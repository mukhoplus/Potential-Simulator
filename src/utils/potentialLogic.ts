import { PotentialOption, PotentialOptionData } from "../types/potential";
import { PotentialGrade, PotentialType } from "../types/common";
import { ItemCategory } from "../types/potential";
import {
  getPotentialOptionsByCategory,
  getAdditionalOptionsByCategory,
  getWeightedOptions,
  getWeightedAdditionalOptions,
  isPotentialCurrentGradeOption,
  isAdditionalCurrentGradeOption,
} from "../data";

// 가중치 기반 랜덤 선택
export const weightedRandomSelect = <T extends { weight: number }>(
  items: T[]
): T => {
  if (!items || items.length === 0) {
    throw new Error("weightedRandomSelect: 빈 배열이 전달되었습니다.");
  }

  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);

  if (totalWeight <= 0) {
    // 가중치가 모두 0이면 첫 번째 항목 반환
    return items[0];
  }

  let random = Math.random() * totalWeight;

  for (const item of items) {
    random -= item.weight;
    if (random <= 0) {
      return item;
    }
  }

  return items[items.length - 1]; // fallback
};

// 특정 등급의 옵션들을 라인별 가중치와 함께 가져오기
export const getWeightedOptionsByGrade = (
  grade: PotentialGrade,
  lineNumber: 1 | 2 | 3,
  type: PotentialType = "poten",
  category?: ItemCategory
): (PotentialOptionData & { weight: number })[] => {
  if (type === "poten") {
    // 잠재능력: 수정된 함수 사용
    return getWeightedOptions(grade, lineNumber, category);
  } else {
    // 에디셔널: 수정된 함수 사용
    return getWeightedAdditionalOptions(grade, lineNumber, category);
  }
};

// 옵션 이름에서 수치 추출
const extractValueFromName = (name: string): string => {
  const matches = name.match(/\+(\d+%?)/);
  return matches ? matches[1] : "";
};

// 간단한 랜덤 옵션 생성 (초기 상태용)
export const generateRandomInitialOptions = (
  grade: PotentialGrade,
  type: PotentialType = "poten"
): PotentialOption[] => {
  const options: PotentialOption[] = [];
  const usedOptions = new Set<string>();

  for (let line = 1; line <= 3; line++) {
    const lineNumber = line as 1 | 2 | 3;

    // 해당 등급의 해당 라인에서 가능한 옵션들 가져오기
    let availableOptions = getWeightedOptionsByGrade(grade, lineNumber, type);

    if (availableOptions.length === 0) {
      // 가용 옵션이 없으면 전체에서 선택
      availableOptions = getWeightedOptionsByGrade(grade, lineNumber, type);

      // 그래도 옵션이 없으면 등급에 맞는 기본 옵션 생성
      if (availableOptions.length === 0) {
        console.warn(
          `No options available for grade: ${grade}, line: ${lineNumber}, type: ${type}`
        );

        // 등급에 맞는 fallback 옵션 생성
        let fallbackName: string;
        switch (grade) {
          case "rare":
            fallbackName = "STR +12";
            break;
          case "epic":
            fallbackName = "STR +6%";
            break;
          case "unique":
            fallbackName = "STR +9%";
            break;
          case "legendary":
            fallbackName = "STR +12%";
            break;
          default:
            fallbackName = "STR +12";
        }

        const fallbackOption = {
          id: "fallback",
          name: fallbackName,
          grade: grade,
          probability: { line1: 1, line2: 1, line3: 1 },
          weight: 1,
        };
        availableOptions = [fallbackOption];
      }
    }

    const selectedOption = weightedRandomSelect(availableOptions);

    // line1 확률 기반으로 색상 등급 결정 (메이플스토리 시스템)
    let isCurrentGradeOption: boolean;
    if (type === "poten") {
      isCurrentGradeOption = isPotentialCurrentGradeOption(selectedOption);
    } else {
      isCurrentGradeOption = isAdditionalCurrentGradeOption(selectedOption);
    }

    const displayGrade = isCurrentGradeOption ? grade : getPreviousGrade(grade);

    const potentialOption: PotentialOption = {
      id: `initial_${type}_${line}_${Date.now()}_${Math.random()
        .toString(36)
        .substr(2, 9)}`,
      name: selectedOption.name,
      grade: displayGrade, // line1 확률 기반 색상 등급
      value: extractValueFromName(selectedOption.name),
      originalGrade: selectedOption.grade, // 데이터상의 원본 등급
    };

    options.push(potentialOption);
    usedOptions.add(selectedOption.name);
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
