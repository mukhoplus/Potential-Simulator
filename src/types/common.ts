// 공통 타입 정의
export type PotentialGrade = "rare" | "epic" | "unique" | "legendary";
export type PotentialType = "poten" | "addi";
export type ItemType = "gene_wep" | "globe" | "hat" | "accessory" | "topwear";

// 등급별 색상
export const GRADE_COLORS = {
  rare: "#92C5F7", // 레어 (연한 파랑)
  epic: "#B041FF", // 에픽 (보라)
  unique: "#FFCC33", // 유니크 (노랑)
  legendary: "#00FF7F", // 레전드리 (연두)
} as const;

// 메이플 스타일 색상 팔레트
export const MAPLE_COLORS = {
  // UI 배경색
  background: "#1a1a2e", // 어두운 남색 배경
  panelBg: "#16213e", // 패널 배경 (어두운 파랑)
  borderColor: "#0f3460", // 테두리 (진한 파랑)
  headerBg: "#0f1419", // 헤더 배경 (더 어두운 배경)

  // 텍스트
  primaryText: "#eee6ce", // 크림색 텍스트
  secondaryText: "#ffd700", // 금색 텍스트
  headerText: "#ffffff", // 헤더 텍스트 (흰색)

  // 버튼
  buttonNormal: "#654321",
  buttonPressed: "#8B4513",
  buttonBorder: "#ffd700", // 버튼 테두리 (금색)

  // 버튼별 색상
  potenButton: "#533483", // 잠재능력 (진한 보라)
  addiButton: "#f39c12", // 에디셔널 (주황색)

  // 상태 표시
  successColor: "#28a745", // 성공 (초록)
  warningColor: "#ffc107", // 경고 (노랑)
  dangerColor: "#dc3545", // 위험 (빨강)

  // 그림자
  shadowColor: "#000000",
} as const;

// 등급 아이콘
export const GRADE_ICONS = {
  rare: "🔵",
  epic: "🟣",
  unique: "🟡",
  legendary: "🟢",
} as const;

// UI 아이콘
export const UI_ICONS = {
  weapon: "🗡️",
  meso: "💰",
  reset: "🔄",
  log: "📜",
  menu: "≡",
  close: "✖️",
} as const;

// 아이템 정보
export const ITEM_INFO = {
  gene_wep: { name: "제네시스 무기", icon: "⚔️" },
  globe: { name: "장갑", icon: "🧤" },
  hat: { name: "모자", icon: "🎩" },
  accessory: { name: "장신구", icon: "💍" },
  topwear: { name: "상의", icon: "👕" },
} as const;
