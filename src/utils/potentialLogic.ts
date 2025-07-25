import { PotentialOption, PotentialOptionData } from "../types/potential";
import { PotentialGrade, PotentialType } from "../types/common";
import { POTENTIAL_OPTIONS, ADDITIONAL_OPTIONS } from "../data";

// 가중치 기반 랜덤 선택
export const weightedRandomSelect = <T extends { weight: number }>(
  items: T[]
): T => {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
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
  type: PotentialType = "poten"
): (PotentialOptionData & { weight: number })[] => {
  const options = type === "poten" ? POTENTIAL_OPTIONS : ADDITIONAL_OPTIONS;
  const gradeOptions = options.filter((option) => option.grade === grade);

  const lineKey =
    `line${lineNumber}` as keyof PotentialOptionData["probability"];

  return gradeOptions
    .map((option) => ({
      ...option,
      weight: option.probability[lineKey],
    }))
    .filter((option) => option.weight > 0);
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
    let availableOptions = getWeightedOptionsByGrade(grade, lineNumber, type);

    // 중복 제거 (같은 옵션이 3번 나오는 것을 방지)
    if (line > 1) {
      availableOptions = availableOptions.filter((option) => {
        const count = Array.from(usedOptions).filter(
          (used) => used === option.name
        ).length;
        return count < 2; // 최대 2번까지만
      });
    }

    if (availableOptions.length === 0) {
      // 가용 옵션이 없으면 전체에서 선택
      availableOptions = getWeightedOptionsByGrade(grade, lineNumber, type);
    }

    const selectedOption = weightedRandomSelect(availableOptions);

    const potentialOption: PotentialOption = {
      id: `initial_${type}_${line}_${Date.now()}_${Math.random()
        .toString(36)
        .substr(2, 9)}`,
      name: selectedOption.name,
      grade: grade,
      value: extractValueFromName(selectedOption.name),
      originalGrade: selectedOption.grade,
    };

    options.push(potentialOption);
    usedOptions.add(selectedOption.name);
  }

  return options;
};
