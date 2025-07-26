import { PotentialGrade, PotentialType } from "./common";

// 잠재능력 옵션 데이터 구조
export interface PotentialOptionData {
  id: string;
  name: string;
  grade: PotentialGrade;
  probability: {
    line1: number;
    line2: number;
    line3: number;
  };
  restriction?: "unique" | "max2"; // 쓸만한 스킬, 피격 시 무적 등
}

// 현재 잠재능력 옵션 (실제 적용된 옵션)
export interface PotentialOption {
  id: string;
  name: string;
  grade: PotentialGrade;
  value: string;
  originalGrade: PotentialGrade; // 해당 옵션이 원래 어떤 등급인지
}

// 잠재능력 상태
export interface PotentialState {
  poten: PotentialOption[]; // 잠재능력 3라인
  addi: PotentialOption[]; // 에디셔널 3라인
  potenGrade: PotentialGrade; // 현재 잠재능력 등급
  addiGrade: PotentialGrade; // 현재 에디셔널 등급
}

// 천장 카운터 상태
export interface CeilingState {
  poten: {
    rareToEpic: number;
    epicToUnique: number;
    uniqueToLegendary: number;
  };
  addi: {
    rareToEpic: number;
    epicToUnique: number;
    uniqueToLegendary: number;
  };
}

// 통계 상태
export interface StatusState {
  totalMeso: number; // 총 사용 메소
  resetCounts: {
    // 재설정 횟수
    poten: number;
    addi: number;
  };
  currentMeso: {
    // 현재 보유 메소 (시뮬레이터용)
    poten: number;
    addi: number;
  };
}

// 로그 엔트리
export interface LogEntry {
  id: string;
  timestamp: number;
  type: PotentialType;
  resetCount: number;
  cost: number;
  options: PotentialOption[];
  grade: PotentialGrade;
  isGradeUp: boolean; // 등급업 여부
  ceilingCount: number; // 당시 천장 카운트
}

// 설정 상태
export interface SettingsState {
  level: number; // 아이템 레벨
  category: ItemCategory; // 아이템 분류
  initialPotenGrade: PotentialGrade; // 시작 잠재능력 등급
  initialAddiGrade: PotentialGrade; // 시작 에디셔널 등급
}

// 아이템 카테고리
export type ItemCategory = "weapon" | "hat" | "glove" | "accessory" | "top";

// 아이템 레벨과 카테고리별 재설정 비용 정보
export interface ResetCostInfo {
  level: number;
  category: ItemCategory;
  costs: {
    poten: {
      rare: number;
      epic: number;
      unique: number;
      legendary: number;
    };
    addi: {
      rare: number;
      epic: number;
      unique: number;
      legendary: number;
    };
  };
}

// 아이템 정보
export interface ItemInfo {
  level: number;
  category: ItemCategory;
  name: string;
  initialPotenGrade: PotentialGrade;
  initialAddiGrade: PotentialGrade;
}
