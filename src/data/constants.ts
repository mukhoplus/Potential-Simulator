import { PotentialGrade, PotentialType } from "../types/common";

// 레벨별 재설정 비용 (200레벨 기준 - 구간2)
export const RESET_COSTS = {
  poten: {
    rare: 4_500_000,
    epic: 18_000_000,
    unique: 38_250_000,
    legendary: 45_000_000,
  },
  addi: {
    rare: 22_000_000,
    epic: 61_600_000,
    unique: 74_800_000,
    legendary: 88_000_000,
  },
} as const;

// 천장 시스템 - 등급 상승 보장 횟수
export const CEILING_COUNTS = {
  poten: {
    rareToEpic: 10,
    epicToUnique: 42,
    uniqueToLegendary: 107,
  },
  addi: {
    rareToEpic: 62,
    epicToUnique: 152,
    uniqueToLegendary: 214,
  },
} as const;

// 등급 상승 확률 (%)
export const GRADE_UP_PROBABILITIES = {
  poten: {
    rareToEpic: 15.0000001275,
    epicToUnique: 3.5,
    uniqueToLegendary: 1.4,
  },
  addi: {
    rareToEpic: 2.381,
    epicToUnique: 0.9804,
    uniqueToLegendary: 0.7,
  },
} as const;

// 라인별 옵션 등급 확률
export const LINE_GRADE_PROBABILITIES = {
  poten: {
    line1: { current: 100, lower: 0 },
    line2: { current: 20, lower: 80 },
    line3: { current: 5, lower: 95 },
  },
  addi: {
    rare: {
      line1: { current: 100, lower: 0 },
      line2: { current: 1.9608, lower: 98.0392 },
      line3: { current: 1.9608, lower: 98.0392 },
    },
    epic: {
      line1: { current: 100, lower: 0 },
      line2: { current: 4.7619, lower: 95.2381 },
      line3: { current: 4.7619, lower: 95.2381 },
    },
    unique: {
      line1: { current: 100, lower: 0 },
      line2: { current: 1.9608, lower: 98.0392 },
      line3: { current: 1.9608, lower: 98.0392 },
    },
    legendary: {
      line1: { current: 100, lower: 0 },
      line2: { current: 0.4975, lower: 99.5025 },
      line3: { current: 0.4975, lower: 99.5025 },
    },
  },
} as const;

// 초기 설정값
export const DEFAULT_SETTINGS = {
  level: 200,
  category: "무기",
  initialPotenGrade: "unique" as PotentialGrade,
  initialAddiGrade: "epic" as PotentialGrade,
} as const;

// 헬퍼 함수들
export const getCost = (type: PotentialType, grade: PotentialGrade): number => {
  return RESET_COSTS[type][grade];
};

export const getCeilingCount = (
  type: PotentialType,
  fromGrade: PotentialGrade,
  toGrade: PotentialGrade
): number => {
  const key = `${fromGrade}To${
    toGrade.charAt(0).toUpperCase() + toGrade.slice(1)
  }` as keyof (typeof CEILING_COUNTS)[typeof type];
  return CEILING_COUNTS[type][key] || 0;
};

export const getGradeUpProbability = (
  type: PotentialType,
  fromGrade: PotentialGrade,
  toGrade: PotentialGrade
): number => {
  const key = `${fromGrade}To${
    toGrade.charAt(0).toUpperCase() + toGrade.slice(1)
  }` as keyof (typeof GRADE_UP_PROBABILITIES)[typeof type];
  return GRADE_UP_PROBABILITIES[type][key] || 0;
};
