import { PotentialOptionData } from "../types/potential";

// 잠재능력 옵션 데이터 (200레벨 무기 기준)
export const POTENTIAL_OPTIONS: PotentialOptionData[] = [
  // === 레어 등급 옵션 ===
  // 1라인 옵션
  {
    id: "rare_str_12_1",
    name: "STR +12",
    grade: "rare",
    probability: { line1: 6.1224, line2: 1.2245, line3: 0.3061 },
  },
  {
    id: "rare_dex_12_1",
    name: "DEX +12",
    grade: "rare",
    probability: { line1: 6.1224, line2: 1.2245, line3: 0.3061 },
  },
  {
    id: "rare_int_12_1",
    name: "INT +12",
    grade: "rare",
    probability: { line1: 6.1224, line2: 1.2245, line3: 0.3061 },
  },
  {
    id: "rare_luk_12_1",
    name: "LUK +12",
    grade: "rare",
    probability: { line1: 6.1224, line2: 1.2245, line3: 0.3061 },
  },
  {
    id: "rare_hp_120",
    name: "최대 HP +120",
    grade: "rare",
    probability: { line1: 6.1224, line2: 1.2245, line3: 0.3061 },
  },
  {
    id: "rare_mp_120",
    name: "최대 MP +120",
    grade: "rare",
    probability: { line1: 6.1224, line2: 1.2245, line3: 0.3061 },
  },
  {
    id: "rare_att_12",
    name: "공격력 +12",
    grade: "rare",
    probability: { line1: 4.08163, line2: 0.8163, line3: 0.2041 },
  },
  {
    id: "rare_matt_12",
    name: "마력 +12",
    grade: "rare",
    probability: { line1: 4.08163, line2: 0.8163, line3: 0.2041 },
  },
  {
    id: "rare_str_3p",
    name: "STR +3%",
    grade: "rare",
    probability: { line1: 6.1224, line2: 1.2245, line3: 0.3061 },
  },
  {
    id: "rare_dex_3p",
    name: "DEX +3%",
    grade: "rare",
    probability: { line1: 6.1224, line2: 1.2245, line3: 0.3061 },
  },
  {
    id: "rare_int_3p",
    name: "INT +3%",
    grade: "rare",
    probability: { line1: 6.1224, line2: 1.2245, line3: 0.3061 },
  },
  {
    id: "rare_luk_3p",
    name: "LUK +3%",
    grade: "rare",
    probability: { line1: 6.1224, line2: 1.2245, line3: 0.3061 },
  },
  {
    id: "rare_att_3p",
    name: "공격력 +3%",
    grade: "rare",
    probability: { line1: 2.04082, line2: 0.4082, line3: 0.102 },
  },
  {
    id: "rare_matt_3p",
    name: "마력 +3%",
    grade: "rare",
    probability: { line1: 2.04082, line2: 0.4082, line3: 0.102 },
  },
  {
    id: "rare_crit_4p",
    name: "크리티컬 확률 +4%",
    grade: "rare",
    probability: { line1: 2.04082, line2: 0.4082, line3: 0.102 },
  },
  {
    id: "rare_damage_3p",
    name: "데미지 +3%",
    grade: "rare",
    probability: { line1: 2.04082, line2: 0.4082, line3: 0.102 },
  },
  {
    id: "rare_allstat_5",
    name: "올스탯 +5",
    grade: "rare",
    probability: { line1: 4.08163, line2: 0.8163, line3: 0.2041 },
  },
  {
    id: "rare_ignore_15p",
    name: "몬스터 방어율 무시 +15%",
    grade: "rare",
    probability: { line1: 2.04082, line2: 0.4082, line3: 0.102 },
  },

  // === 에픽 등급 옵션 ===
  {
    id: "epic_str_6p",
    name: "STR +6%",
    grade: "epic",
    probability: { line1: 10.8696, line2: 2.1739, line3: 0.5435 },
  },
  {
    id: "epic_dex_6p",
    name: "DEX +6%",
    grade: "epic",
    probability: { line1: 10.8696, line2: 2.1739, line3: 0.5435 },
  },
  {
    id: "epic_int_6p",
    name: "INT +6%",
    grade: "epic",
    probability: { line1: 10.8696, line2: 2.1739, line3: 0.5435 },
  },
  {
    id: "epic_luk_6p",
    name: "LUK +6%",
    grade: "epic",
    probability: { line1: 10.8696, line2: 2.1739, line3: 0.5435 },
  },
  {
    id: "epic_hp_6p",
    name: "최대 HP +6%",
    grade: "epic",
    probability: { line1: 10.8696, line2: 2.1739, line3: 0.5435 },
  },
  {
    id: "epic_mp_6p",
    name: "최대 MP +6%",
    grade: "epic",
    probability: { line1: 10.8696, line2: 2.1739, line3: 0.5435 },
  },
  {
    id: "epic_att_6p",
    name: "공격력 +6%",
    grade: "epic",
    probability: { line1: 4.3478, line2: 0.8696, line3: 0.2174 },
  },
  {
    id: "epic_matt_6p",
    name: "마력 +6%",
    grade: "epic",
    probability: { line1: 4.3478, line2: 0.8696, line3: 0.2174 },
  },
  {
    id: "epic_crit_8p",
    name: "크리티컬 확률 +8%",
    grade: "epic",
    probability: { line1: 4.3478, line2: 0.8696, line3: 0.2174 },
  },
  {
    id: "epic_damage_6p",
    name: "데미지 +6%",
    grade: "epic",
    probability: { line1: 4.3478, line2: 0.8696, line3: 0.2174 },
  },
  {
    id: "epic_allstat_3p",
    name: "올스탯 +3%",
    grade: "epic",
    probability: { line1: 4.3478, line2: 0.8696, line3: 0.2174 },
  },
  {
    id: "epic_ignore_15p",
    name: "몬스터 방어율 무시 +15%",
    grade: "epic",
    probability: { line1: 4.3478, line2: 0.8696, line3: 0.2174 },
  },

  // === 유니크 등급 옵션 ===
  {
    id: "unique_str_9p",
    name: "STR +9%",
    grade: "unique",
    probability: { line1: 9.3023, line2: 9.3023, line3: 11.04651 },
  },
  {
    id: "unique_dex_9p",
    name: "DEX +9%",
    grade: "unique",
    probability: { line1: 9.3023, line2: 9.3023, line3: 11.04651 },
  },
  {
    id: "unique_int_9p",
    name: "INT +9%",
    grade: "unique",
    probability: { line1: 9.3023, line2: 9.3023, line3: 11.04651 },
  },
  {
    id: "unique_luk_9p",
    name: "LUK +9%",
    grade: "unique",
    probability: { line1: 9.3023, line2: 9.3023, line3: 11.04651 },
  },
  {
    id: "unique_att_9p",
    name: "공격력 +9%",
    grade: "unique",
    probability: { line1: 5.5814, line2: 5.5814, line3: 6.6279 },
  },
  {
    id: "unique_matt_9p",
    name: "마력 +9%",
    grade: "unique",
    probability: { line1: 5.5814, line2: 5.5814, line3: 6.6279 },
  },
  {
    id: "unique_crit_9p",
    name: "크리티컬 확률 +9%",
    grade: "unique",
    probability: { line1: 7.4419, line2: 7.4419, line3: 8.8372 },
  },
  {
    id: "unique_damage_9p",
    name: "데미지 +9%",
    grade: "unique",
    probability: { line1: 5.5814, line2: 5.5814, line3: 6.6279 },
  },
  {
    id: "unique_allstat_6p",
    name: "올스탯 +6%",
    grade: "unique",
    probability: { line1: 7.4419, line2: 7.4419, line3: 8.8372 },
  },
  {
    id: "unique_ignore_30p",
    name: "몬스터 방어율 무시 +30%",
    grade: "unique",
    probability: { line1: 5.5814, line2: 5.5814, line3: 6.6279 },
  },
  {
    id: "unique_boss_30p",
    name: "보스 몬스터 데미지 +30%",
    grade: "unique",
    probability: { line1: 5.5814, line2: 5.5814, line3: 6.6279 },
  },

  // === 레전드리 등급 옵션 ===
  {
    id: "legendary_str_12p",
    name: "STR +12%",
    grade: "legendary",
    probability: { line1: 9.7561, line2: 1.9512, line3: 0.4878 },
  },
  {
    id: "legendary_dex_12p",
    name: "DEX +12%",
    grade: "legendary",
    probability: { line1: 9.7561, line2: 1.9512, line3: 0.4878 },
  },
  {
    id: "legendary_int_12p",
    name: "INT +12%",
    grade: "legendary",
    probability: { line1: 9.7561, line2: 1.9512, line3: 0.4878 },
  },
  {
    id: "legendary_luk_12p",
    name: "LUK +12%",
    grade: "legendary",
    probability: { line1: 9.7561, line2: 1.9512, line3: 0.4878 },
  },
  {
    id: "legendary_att_12p",
    name: "공격력 +12%",
    grade: "legendary",
    probability: { line1: 4.878, line2: 0.9756, line3: 0.2439 },
  },
  {
    id: "legendary_matt_12p",
    name: "마력 +12%",
    grade: "legendary",
    probability: { line1: 4.878, line2: 0.9756, line3: 0.2439 },
  },
  {
    id: "legendary_crit_12p",
    name: "크리티컬 확률 +12%",
    grade: "legendary",
    probability: { line1: 4.878, line2: 0.9756, line3: 0.2439 },
  },
  {
    id: "legendary_damage_12p",
    name: "데미지 +12%",
    grade: "legendary",
    probability: { line1: 4.878, line2: 0.9756, line3: 0.2439 },
  },
  {
    id: "legendary_allstat_9p",
    name: "올스탯 +9%",
    grade: "legendary",
    probability: { line1: 7.3171, line2: 1.4634, line3: 0.3659 },
  },
  {
    id: "legendary_att_32",
    name: "공격력 +32",
    grade: "legendary",
    probability: { line1: 4.878, line2: 0.9756, line3: 0.2439 },
  },
  {
    id: "legendary_matt_32",
    name: "마력 +32",
    grade: "legendary",
    probability: { line1: 4.878, line2: 0.9756, line3: 0.2439 },
  },
  {
    id: "legendary_ignore_35p",
    name: "몬스터 방어율 무시 +35%",
    grade: "legendary",
    probability: { line1: 4.878, line2: 0.9756, line3: 0.2439 },
  },
  {
    id: "legendary_ignore_40p",
    name: "몬스터 방어율 무시 +40%",
    grade: "legendary",
    probability: { line1: 4.878, line2: 0.9756, line3: 0.2439 },
  },
  {
    id: "legendary_boss_35p",
    name: "보스 몬스터 데미지 +35%",
    grade: "legendary",
    probability: { line1: 9.7561, line2: 1.9512, line3: 0.4878 },
  },
  {
    id: "legendary_boss_40p",
    name: "보스 몬스터 데미지 +40%",
    grade: "legendary",
    probability: { line1: 4.878, line2: 0.9756, line3: 0.2439 },
  },
];

// 등급별 옵션 필터링 함수
export const getOptionsByGrade = (grade: string) => {
  return POTENTIAL_OPTIONS.filter((option) => option.grade === grade);
};

// 라인별 가중치 적용 함수
export const getWeightedOptions = (grade: string, lineNumber: 1 | 2 | 3) => {
  const options = getOptionsByGrade(grade);
  const lineKey =
    `line${lineNumber}` as keyof PotentialOptionData["probability"];

  return options.map((option) => ({
    ...option,
    weight: option.probability[lineKey],
  }));
};
