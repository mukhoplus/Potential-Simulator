import { PotentialOption, PotentialGrade, PotentialType } from "../types";
import { ItemType } from "../types/common";
import { ItemCategory } from "../types/potential";
import {
  GRADE_UP_PROBABILITIES,
  CEILING_COUNTS,
  getCost,
  LINE_GRADE_PROBABILITIES,
} from "../data/constants";
import {
  isPotentialCurrentGradeOption,
  isAdditionalCurrentGradeOption,
} from "../data";
import {
  weightedRandomSelect,
  getWeightedOptionsByGrade,
  generateRandomInitialOptions,
} from "./potentialLogic";

// 등급 상승 체크 함수
export const checkGradeUp = (
  type: PotentialType,
  currentGrade: PotentialGrade,
  ceilingCount: number
): { isGradeUp: boolean; newGrade: PotentialGrade } => {
  const getNextGrade = (grade: PotentialGrade): PotentialGrade | null => {
    switch (grade) {
      case "rare":
        return "epic";
      case "epic":
        return "unique";
      case "unique":
        return "legendary";
      case "legendary":
        return null;
      default:
        return null;
    }
  };

  const nextGrade = getNextGrade(currentGrade);
  if (!nextGrade) {
    return { isGradeUp: false, newGrade: currentGrade };
  }

  // 천장 체크
  const ceilingKey = `${currentGrade}To${
    nextGrade.charAt(0).toUpperCase() + nextGrade.slice(1)
  }` as keyof (typeof CEILING_COUNTS)[typeof type];
  const maxCeiling = CEILING_COUNTS[type][ceilingKey];

  if (ceilingCount >= maxCeiling) {
    // 천장 도달 - 확정 등급업
    return { isGradeUp: true, newGrade: nextGrade };
  }

  // 확률 체크
  const probabilityKey = `${currentGrade}To${
    nextGrade.charAt(0).toUpperCase() + nextGrade.slice(1)
  }` as keyof (typeof GRADE_UP_PROBABILITIES)[typeof type];
  const probability = GRADE_UP_PROBABILITIES[type][probabilityKey];

  const random = Math.random() * 100;
  const isGradeUp = random < probability;

  return {
    isGradeUp,
    newGrade: isGradeUp ? nextGrade : currentGrade,
  };
};

// 특정 옵션의 중복 제한을 확인하는 함수
const getOptionDuplicateLimit = (optionName: string): number => {
  // 피격 시 데미지 무시/무적 옵션 - 최대 2줄
  if (optionName.includes("피격 시")) {
    return 2;
  }

  // 쓸만한 스킬 계열 / 피격 후 무적시간 증가 - 최대 1줄
  if (optionName.includes("쓸만한") || optionName.includes("피격 후")) {
    return 1;
  }

  // 기본적으로는 제한 없음
  return 3;
};

// 중복 제한을 고려한 옵션 생성
export const generateOptionsWithDuplicateLimit = (
  grade: PotentialGrade,
  type: PotentialType,
  selectedItem?: ItemType
): PotentialOption[] => {
  const options: PotentialOption[] = [];
  const usedOptions = new Map<string, number>(); // 옵션명 -> 사용 횟수

  // selectedItem을 카테고리로 변환
  let category: ItemCategory | undefined;
  if (selectedItem) {
    const itemMapping: Record<ItemType, ItemCategory> = {
      gene_wep: "weapon",
      glove: "glove",
      hat: "hat",
      accessory: "accessory",
      topwear: "top",
    };
    category = itemMapping[selectedItem];
  }

  for (let line = 0; line < 3; line++) {
    const lineNumber = (line + 1) as 1 | 2 | 3;

    // 해당 등급의 해당 라인에서 가능한 모든 옵션 가져오기
    let availableOptions = getWeightedOptionsByGrade(
      grade,
      lineNumber,
      type,
      category
    );

    // 중복 제한 적용 (특정 옵션별 제한)
    availableOptions = availableOptions.filter((option) => {
      const usageCount = usedOptions.get(option.name) || 0;
      const limit = getOptionDuplicateLimit(option.name);
      return usageCount < limit;
    });

    if (availableOptions.length === 0) {
      // 가용 옵션이 없으면 전체 풀에서 선택 (중복 제한 무시)
      availableOptions = getWeightedOptionsByGrade(
        grade,
        lineNumber,
        type,
        category
      );

      // 그래도 없으면 다른 라인에서 선택
      if (availableOptions.length === 0) {
        for (let fallbackLine = 1; fallbackLine <= 3; fallbackLine++) {
          availableOptions = getWeightedOptionsByGrade(
            grade,
            fallbackLine as 1 | 2 | 3,
            type,
            category
          );
          if (availableOptions.length > 0) break;
        }
      }

      // 그래도 없으면 해당 타입의 모든 옵션에서 선택
      if (availableOptions.length === 0) {
        const allOptions =
          type === "poten"
            ? require("../data").POTENTIAL_OPTIONS
            : require("../data").ADDITIONAL_OPTIONS;

        availableOptions = allOptions
          .filter((option: any) => option.grade === grade)
          .map((option: any) => ({
            ...option,
            weight: 1, // 균등한 가중치
          }));
      }

      // 최후의 수단: 아무 등급이나 선택
      if (availableOptions.length === 0) {
        const allOptions =
          type === "poten"
            ? require("../data").POTENTIAL_OPTIONS
            : require("../data").ADDITIONAL_OPTIONS;

        availableOptions = allOptions
          .slice(0, 1) // 첫 번째 옵션만
          .map((option: any) => ({
            ...option,
            weight: 1,
          }));
      }
    }

    if (availableOptions.length === 0) {
      console.error(
        `[ERROR] 사용 가능한 옵션이 없습니다. grade: ${grade}, line: ${lineNumber}, type: ${type}`
      );
      throw new Error(
        `사용 가능한 옵션이 없습니다. grade: ${grade}, line: ${lineNumber}, type: ${type}`
      );
    }

    const selectedOption = weightedRandomSelect(availableOptions);

    // 옵션 이름에서 수치 추출
    const extractValueFromName = (name: string): string => {
      const matches = name.match(/\+(\d+%?)/);
      return matches ? matches[1] : "";
    };

    // line1 확률 기반으로 색상 등급 결정 (메이플스토리 시스템)
    let isCurrentGradeOption: boolean;
    if (type === "poten") {
      isCurrentGradeOption = isPotentialCurrentGradeOption(selectedOption);
    } else {
      isCurrentGradeOption = isAdditionalCurrentGradeOption(selectedOption);
    }

    const displayGrade = isCurrentGradeOption ? grade : getPreviousGrade(grade);

    const potentialOption: PotentialOption = {
      id: `reset_${type}_${lineNumber}_${Date.now()}_${Math.random()
        .toString(36)
        .substr(2, 9)}`,
      name: selectedOption.name,
      grade: displayGrade, // line1 확률 기반 색상 등급
      value: extractValueFromName(selectedOption.name),
      originalGrade: selectedOption.grade, // 데이터상의 원본 등급
    };

    options.push(potentialOption);

    // 사용 횟수 업데이트
    const currentCount = usedOptions.get(selectedOption.name) || 0;
    usedOptions.set(selectedOption.name, currentCount + 1);
  }

  return options;
};

// 이전 등급 반환 헬퍼 함수 (색상 표시용)
const getPreviousGrade = (grade: PotentialGrade): PotentialGrade => {
  switch (grade) {
    case "epic":
      return "rare";
    case "unique":
      return "epic";
    case "legendary":
      return "unique";
    case "rare":
      return "rare";
    default:
      return grade;
  }
};

// 동적 비용 계산 함수
const getDynamicCost = (
  type: PotentialType,
  grade: PotentialGrade,
  selectedItem: ItemType
): number => {
  try {
    const { getResetCost, ITEM_PRESETS } = require("../data/resetCosts");

    // 선택된 아이템 정보 찾기
    const itemMapping: Record<ItemType, string> = {
      gene_wep: "weapon",
      glove: "glove",
      hat: "hat",
      accessory: "accessory",
      topwear: "top",
    };

    const itemPreset = ITEM_PRESETS.find(
      (item: any) => itemMapping[selectedItem] === item.category
    );

    if (itemPreset) {
      // 동적 비용 계산
      return getResetCost(itemPreset.level, itemPreset.category, type, grade);
    } else {
      // 기본값으로 fallback
      return getCost(type, grade);
    }
  } catch (error) {
    // 에러 발생 시 기본값 사용
    return getCost(type, grade);
  }
};

// 메인 재설정 로직
export const resetPotential = (
  type: PotentialType,
  currentState: {
    grade: PotentialGrade;
    ceilingCount: number;
    options: PotentialOption[];
    selectedItem?: ItemType;
  }
): {
  newGrade: PotentialGrade;
  newOptions: PotentialOption[];
  isGradeUp: boolean;
  cost: number;
  newCeilingCount: number;
} => {
  const { grade: currentGrade, ceilingCount, selectedItem } = currentState;

  // 1. 등급 상승 체크
  const gradeUpResult = checkGradeUp(type, currentGrade, ceilingCount);
  const newGrade = gradeUpResult.newGrade;
  const isGradeUp = gradeUpResult.isGradeUp;

  // 2. 천장 카운터 업데이트
  let newCeilingCount;
  if (isGradeUp) {
    // 등급업 시 카운터 리셋
    newCeilingCount = 0;
  } else {
    // 실패 시 카운터 증가
    newCeilingCount = ceilingCount + 1;
  }

  // 3. 중복 제한 고려한 옵션 생성
  const newOptions = generateOptionsWithDuplicateLimit(
    newGrade,
    type,
    selectedItem
  );

  // 5. 비용 계산 (동적 비용 적용)
  const cost = selectedItem
    ? getDynamicCost(type, currentGrade, selectedItem)
    : getCost(type, currentGrade);

  return {
    newGrade,
    newOptions,
    isGradeUp,
    cost,
    newCeilingCount,
  };
};

// 동일한 결과 체크 (메이플에서는 완전히 동일한 결과가 나오면 재설정)
export const isSameResult = (
  oldOptions: PotentialOption[],
  newOptions: PotentialOption[]
): boolean => {
  if (oldOptions.length !== newOptions.length) return false;

  for (let i = 0; i < oldOptions.length; i++) {
    if (
      oldOptions[i].name !== newOptions[i].name ||
      oldOptions[i].grade !== newOptions[i].grade
    ) {
      return false;
    }
  }

  return true;
};

// 동일 결과 방지 재설정
export const resetPotentialWithDuplicatePrevention = (
  type: PotentialType,
  currentState: {
    grade: PotentialGrade;
    ceilingCount: number;
    options: PotentialOption[];
    selectedItem?: ItemType;
  },
  maxRetries: number = 10
): {
  newGrade: PotentialGrade;
  newOptions: PotentialOption[];
  isGradeUp: boolean;
  cost: number;
  newCeilingCount: number;
} => {
  let result = resetPotential(type, currentState);
  let retries = 0;

  // 동일한 결과가 나오면 재시도 (단, 등급업한 경우는 제외)
  while (
    !result.isGradeUp &&
    isSameResult(currentState.options, result.newOptions) &&
    retries < maxRetries
  ) {
    // 재설정 (천장 카운터는 그대로 유지)
    result = resetPotential(type, {
      ...currentState,
      ceilingCount: result.newCeilingCount - 1, // 이전에 증가된 것을 되돌림
    });
    retries++;
  }

  return result;
};
