import { PotentialOptionData } from "../types/potential";

// 에디셔널 잠재능력 옵션 데이터 (200레벨 무기 기준)
export const ADDITIONAL_OPTIONS: PotentialOptionData[] = [
  // === 레어 등급 옵션 ===
  {
    id: "addi_rare_hp_100",
    name: "최대 HP +100",
    grade: "rare",
    probability: { line1: 5.8824, line2: 0.1153, line3: 0.1153 },
  },
  {
    id: "addi_rare_mp_100",
    name: "최대 MP +100",
    grade: "rare",
    probability: { line1: 5.8824, line2: 0.1153, line3: 0.1153 },
  },
  {
    id: "addi_rare_speed_6",
    name: "이동속도 +6",
    grade: "rare",
    probability: { line1: 5.8824, line2: 0.1153, line3: 0.1153 },
  },
  {
    id: "addi_rare_jump_6",
    name: "점프력 +6",
    grade: "rare",
    probability: { line1: 5.8824, line2: 0.1153, line3: 0.1153 },
  },
  {
    id: "addi_rare_def_100",
    name: "방어력 +100",
    grade: "rare",
    probability: { line1: 5.8824, line2: 0.1153, line3: 0.1153 },
  },
  {
    id: "addi_rare_str_12",
    name: "STR +12",
    grade: "rare",
    probability: { line1: 5.8824, line2: 0.1153, line3: 0.1153 },
  },
  {
    id: "addi_rare_dex_12",
    name: "DEX +12",
    grade: "rare",
    probability: { line1: 5.8824, line2: 0.1153, line3: 0.1153 },
  },
  {
    id: "addi_rare_int_12",
    name: "INT +12",
    grade: "rare",
    probability: { line1: 5.8824, line2: 0.1153, line3: 0.1153 },
  },
  {
    id: "addi_rare_luk_12",
    name: "LUK +12",
    grade: "rare",
    probability: { line1: 5.8824, line2: 0.1153, line3: 0.1153 },
  },
  {
    id: "addi_rare_att_12",
    name: "공격력 +12",
    grade: "rare",
    probability: { line1: 3.9216, line2: 0.07689, line3: 0.07689 },
  },
  {
    id: "addi_rare_matt_12",
    name: "마력 +12",
    grade: "rare",
    probability: { line1: 3.9216, line2: 0.07689, line3: 0.07689 },
  },
  {
    id: "addi_rare_hp_2p",
    name: "최대 HP +2%",
    grade: "rare",
    probability: { line1: 3.9216, line2: 0.07689, line3: 0.07689 },
  },
  {
    id: "addi_rare_mp_2p",
    name: "최대 MP +2%",
    grade: "rare",
    probability: { line1: 3.9216, line2: 0.07689, line3: 0.07689 },
  },
  {
    id: "addi_rare_str_3p",
    name: "STR +3%",
    grade: "rare",
    probability: { line1: 3.9216, line2: 0.07689, line3: 0.07689 },
  },
  {
    id: "addi_rare_dex_3p",
    name: "DEX +3%",
    grade: "rare",
    probability: { line1: 3.9216, line2: 0.07689, line3: 0.07689 },
  },
  {
    id: "addi_rare_int_3p",
    name: "INT +3%",
    grade: "rare",
    probability: { line1: 3.9216, line2: 0.07689, line3: 0.07689 },
  },
  {
    id: "addi_rare_luk_3p",
    name: "LUK +3%",
    grade: "rare",
    probability: { line1: 3.9216, line2: 0.07689, line3: 0.07689 },
  },
  {
    id: "addi_rare_att_3p",
    name: "공격력 +3%",
    grade: "rare",
    probability: { line1: 1.9608, line2: 0.03845, line3: 0.03845 },
  },
  {
    id: "addi_rare_matt_3p",
    name: "마력 +3%",
    grade: "rare",
    probability: { line1: 1.9608, line2: 0.03845, line3: 0.03845 },
  },
  {
    id: "addi_rare_crit_4p",
    name: "크리티컬 확률 +4%",
    grade: "rare",
    probability: { line1: 3.9216, line2: 0.07689, line3: 0.07689 },
  },
  {
    id: "addi_rare_damage_3p",
    name: "데미지 +3%",
    grade: "rare",
    probability: { line1: 1.9608, line2: 0.03845, line3: 0.03845 },
  },
  {
    id: "addi_rare_allstat_5",
    name: "올스탯 +5",
    grade: "rare",
    probability: { line1: 5.8824, line2: 0.1153, line3: 0.1153 },
  },

  // === 에픽 등급 옵션 ===
  // 에픽 등급은 레어 옵션도 포함하므로 더 복잡하지만, 여기서는 주요 에픽 옵션만
  // (실제로는 레어 옵션들도 낮은 확률로 포함됨)

  // === 유니크 등급 옵션 ===
  {
    id: "addi_unique_hp_8p",
    name: "최대 HP +8%",
    grade: "unique",
    probability: { line1: 6.9767, line2: 0.1368, line3: 0.1368 },
  },
  {
    id: "addi_unique_mp_8p",
    name: "최대 MP +8%",
    grade: "unique",
    probability: { line1: 6.9767, line2: 0.1368, line3: 0.1368 },
  },
  {
    id: "addi_unique_att_9p",
    name: "공격력 +9%",
    grade: "unique",
    probability: { line1: 4.6512, line2: 0.0912, line3: 0.0912 },
  },
  {
    id: "addi_unique_matt_9p",
    name: "마력 +9%",
    grade: "unique",
    probability: { line1: 4.6512, line2: 0.0912, line3: 0.0912 },
  },
  {
    id: "addi_unique_crit_9p",
    name: "크리티컬 확률 +9%",
    grade: "unique",
    probability: { line1: 4.6512, line2: 0.0912, line3: 0.0912 },
  },
  {
    id: "addi_unique_str_9p",
    name: "STR +9%",
    grade: "unique",
    probability: { line1: 6.9767, line2: 0.1368, line3: 0.1368 },
  },
  {
    id: "addi_unique_dex_9p",
    name: "DEX +9%",
    grade: "unique",
    probability: { line1: 6.9767, line2: 0.1368, line3: 0.1368 },
  },
  {
    id: "addi_unique_int_9p",
    name: "INT +9%",
    grade: "unique",
    probability: { line1: 6.9767, line2: 0.1368, line3: 0.1368 },
  },
  {
    id: "addi_unique_luk_9p",
    name: "LUK +9%",
    grade: "unique",
    probability: { line1: 6.9767, line2: 0.1368, line3: 0.1368 },
  },
  {
    id: "addi_unique_damage_9p",
    name: "데미지 +9%",
    grade: "unique",
    probability: { line1: 2.3256, line2: 0.0456, line3: 0.0456 },
  },
  {
    id: "addi_unique_allstat_6p",
    name: "올스탯 +6%",
    grade: "unique",
    probability: { line1: 4.6512, line2: 0.0912, line3: 0.0912 },
  },
  {
    id: "addi_unique_ignore_4p",
    name: "몬스터 방어율 무시 +4%",
    grade: "unique",
    probability: { line1: 2.3256, line2: 0.0456, line3: 0.0456 },
  },
  {
    id: "addi_unique_boss_12p",
    name: "보스 몬스터 데미지 +12%",
    grade: "unique",
    probability: { line1: 2.3256, line2: 0.0456, line3: 0.0456 },
  },

  // === 레전드리 등급 옵션 ===
  {
    id: "addi_legendary_hp_11p",
    name: "최대 HP +11%",
    grade: "legendary",
    probability: { line1: 7.6923, line2: 0.03827, line3: 0.03827 },
  },
  {
    id: "addi_legendary_mp_11p",
    name: "최대 MP +11%",
    grade: "legendary",
    probability: { line1: 7.6923, line2: 0.03827, line3: 0.03827 },
  },
  {
    id: "addi_legendary_att_12p",
    name: "공격력 +12%",
    grade: "legendary",
    probability: { line1: 5.1282, line2: 0.02551, line3: 0.02551 },
  },
  {
    id: "addi_legendary_matt_12p",
    name: "마력 +12%",
    grade: "legendary",
    probability: { line1: 5.1282, line2: 0.02551, line3: 0.02551 },
  },
  {
    id: "addi_legendary_crit_12p",
    name: "크리티컬 확률 +12%",
    grade: "legendary",
    probability: { line1: 5.1282, line2: 0.02551, line3: 0.02551 },
  },
  {
    id: "addi_legendary_str_12p",
    name: "STR +12%",
    grade: "legendary",
    probability: { line1: 7.6923, line2: 0.03827, line3: 0.03827 },
  },
  {
    id: "addi_legendary_dex_12p",
    name: "DEX +12%",
    grade: "legendary",
    probability: { line1: 7.6923, line2: 0.03827, line3: 0.03827 },
  },
  {
    id: "addi_legendary_int_12p",
    name: "INT +12%",
    grade: "legendary",
    probability: { line1: 7.6923, line2: 0.03827, line3: 0.03827 },
  },
  {
    id: "addi_legendary_luk_12p",
    name: "LUK +12%",
    grade: "legendary",
    probability: { line1: 7.6923, line2: 0.03827, line3: 0.03827 },
  },
  {
    id: "addi_legendary_damage_12p",
    name: "데미지 +12%",
    grade: "legendary",
    probability: { line1: 2.5641, line2: 0.01276, line3: 0.01276 },
  },
  {
    id: "addi_legendary_allstat_9p",
    name: "올스탯 +9%",
    grade: "legendary",
    probability: { line1: 5.1282, line2: 0.02551, line3: 0.02551 },
  },
  {
    id: "addi_legendary_att_32",
    name: "공격력 +32",
    grade: "legendary",
    probability: { line1: 2.5641, line2: 0.01276, line3: 0.01276 },
  },
  {
    id: "addi_legendary_matt_32",
    name: "마력 +32",
    grade: "legendary",
    probability: { line1: 2.5641, line2: 0.01276, line3: 0.01276 },
  },
  {
    id: "addi_legendary_ignore_5p",
    name: "몬스터 방어율 무시 +5%",
    grade: "legendary",
    probability: { line1: 2.5641, line2: 0.01276, line3: 0.01276 },
  },
  {
    id: "addi_legendary_boss_18p",
    name: "보스 몬스터 데미지 +18%",
    grade: "legendary",
    probability: { line1: 2.5641, line2: 0.01276, line3: 0.01276 },
  },
];

// 등급별 에디셔널 옵션 필터링 함수
export const getAdditionalOptionsByGrade = (grade: string) => {
  return ADDITIONAL_OPTIONS.filter((option) => option.grade === grade);
};

// 라인별 가중치 적용 함수
export const getWeightedAdditionalOptions = (
  grade: string,
  lineNumber: 1 | 2 | 3
) => {
  const options = getAdditionalOptionsByGrade(grade);
  const lineKey =
    `line${lineNumber}` as keyof PotentialOptionData["probability"];

  return options.map((option) => ({
    ...option,
    weight: option.probability[lineKey],
  }));
};
