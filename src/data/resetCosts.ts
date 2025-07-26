import { ItemCategory, ResetCostInfo } from "../types/potential";

// 레벨과 카테고리별 재설정 비용 데이터
export const RESET_COSTS: ResetCostInfo[] = [
  // 150레벨 (모자, 상의)
  {
    level: 150,
    category: "hat",
    costs: {
      poten: {
        rare: 4_500_000,
        epic: 18_000_000,
        unique: 38_250_000,
        legendary: 45_000_000,
      },
      addi: {
        rare: 19_500_000,
        epic: 54_600_000,
        unique: 66_300_000,
        legendary: 78_000_000,
      },
    },
  },
  {
    level: 150,
    category: "top",
    costs: {
      poten: {
        rare: 4_500_000,
        epic: 18_000_000,
        unique: 38_250_000,
        legendary: 45_000_000,
      },
      addi: {
        rare: 19_500_000,
        epic: 54_600_000,
        unique: 66_300_000,
        legendary: 78_000_000,
      },
    },
  },
  // 160레벨 (장신구)
  {
    level: 160,
    category: "accessory",
    costs: {
      poten: {
        rare: 4_250_000,
        epic: 17_000_000,
        unique: 36_125_000,
        legendary: 42_500_000,
      },
      addi: {
        rare: 20_750_000,
        epic: 58_100_000,
        unique: 70_550_000,
        legendary: 83_000_000,
      },
    },
  },
  // 200레벨 (제네시스 무기, 장갑)
  {
    level: 200,
    category: "weapon",
    costs: {
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
    },
  },
  {
    level: 200,
    category: "glove",
    costs: {
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
    },
  },
];

// 특정 레벨/카테고리의 재설정 비용 조회 함수
export const getResetCost = (
  level: number,
  category: ItemCategory,
  type: "poten" | "addi",
  grade: "rare" | "epic" | "unique" | "legendary"
): number => {
  const costInfo = RESET_COSTS.find(
    (info) => info.level === level && info.category === category
  );

  if (!costInfo) {
    console.warn(
      `Reset cost not found for level ${level}, category ${category}`
    );
    // 기본값으로 200레벨 무기 비용 반환
    return RESET_COSTS.find((c) => c.level === 200 && c.category === "weapon")!
      .costs[type][grade];
  }

  return costInfo.costs[type][grade];
};

// 아이템 정보 목록 (시뮬레이터에서 선택할 수 있는 아이템들)
export const ITEM_PRESETS = [
  {
    level: 200,
    category: "weapon" as ItemCategory,
    name: "제네시스 무기",
    initialPotenGrade: "unique" as const, // 유니크 등급 시작
    initialAddiGrade: "epic" as const, // 에픽 등급 시작
  },
  {
    level: 150,
    category: "hat" as ItemCategory,
    name: "모자",
    initialPotenGrade: "rare" as const,
    initialAddiGrade: "rare" as const,
  },
  {
    level: 200,
    category: "glove" as ItemCategory,
    name: "장갑",
    initialPotenGrade: "rare" as const,
    initialAddiGrade: "rare" as const,
  },
  {
    level: 160,
    category: "accessory" as ItemCategory,
    name: "장신구",
    initialPotenGrade: "rare" as const,
    initialAddiGrade: "rare" as const,
  },
  {
    level: 150,
    category: "top" as ItemCategory,
    name: "상의",
    initialPotenGrade: "rare" as const,
    initialAddiGrade: "rare" as const,
  },
];

// 카테고리별 한글 이름 매핑
export const CATEGORY_NAMES = {
  weapon: "무기",
  hat: "모자",
  glove: "장갑",
  accessory: "장신구",
  top: "상의",
} as const;
