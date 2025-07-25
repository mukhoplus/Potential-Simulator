// 공통 타입 정의
export type PotentialGrade = "rare" | "epic" | "unique" | "legendary";
export type PotentialType = "poten" | "addi";

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
  background: "#2C1810",
  panelBg: "#4A3425",
  borderColor: "#8B7355",

  // 텍스트
  primaryText: "#FFFFFF",
  secondaryText: "#D4AF37",

  // 버튼
  buttonNormal: "#654321",
  buttonPressed: "#8B4513",

  // 버튼별 색상
  potenButton: "#000000", // 잠재능력 (검은색)
  addiButton: "#90EE90", // 에디셔널 (연두색)
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
