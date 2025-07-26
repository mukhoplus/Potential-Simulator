import { PotentialOptionData } from "../types/potential";
import { ItemCategory } from "../types/potential";

// 잠재능력 옵션 데이터 (무기 120~200레벨 기준)
export const WEAPON_POTENTIAL_OPTIONS: PotentialOptionData[] = [
  // === 레어 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "rare_str_12",
    name: "STR +12",
    grade: "rare",
    probability: { line1: 6.1224, line2: 1.2245, line3: 0.3061 },
  },
  {
    id: "rare_dex_12",
    name: "DEX +12",
    grade: "rare",
    probability: { line1: 6.1224, line2: 1.2245, line3: 0.3061 },
  },
  {
    id: "rare_int_12",
    name: "INT +12",
    grade: "rare",
    probability: { line1: 6.1224, line2: 1.2245, line3: 0.3061 },
  },
  {
    id: "rare_luk_12",
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
    probability: { line1: 4.0816, line2: 0.8163, line3: 0.2041 },
  },
  {
    id: "rare_matt_12",
    name: "마력 +12",
    grade: "rare",
    probability: { line1: 4.0816, line2: 0.8163, line3: 0.2041 },
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
    probability: { line1: 2.0408, line2: 0.4082, line3: 0.102 },
  },
  {
    id: "rare_matt_3p",
    name: "마력 +3%",
    grade: "rare",
    probability: { line1: 2.0408, line2: 0.4082, line3: 0.102 },
  },
  {
    id: "rare_crit_4p",
    name: "크리티컬 확률 +4%",
    grade: "rare",
    probability: { line1: 2.0408, line2: 0.4082, line3: 0.102 },
  },
  {
    id: "rare_damage_3p",
    name: "데미지 +3%",
    grade: "rare",
    probability: { line1: 2.0408, line2: 0.4082, line3: 0.102 },
  },
  {
    id: "rare_allstat_5",
    name: "올스탯 +5",
    grade: "rare",
    probability: { line1: 4.0816, line2: 0.8163, line3: 0.2041 },
  },
  {
    id: "rare_hp_recovery_240",
    name: "공격 시 20% 확률로 240의 HP 회복",
    grade: "rare",
    probability: { line1: 2.0408, line2: 0.4082, line3: 0.102 },
  },
  {
    id: "rare_mp_recovery_120",
    name: "공격 시 20% 확률로 120의 MP 회복",
    grade: "rare",
    probability: { line1: 2.0408, line2: 0.4082, line3: 0.102 },
  },
  {
    id: "rare_poison_effect",
    name: "공격 시 20% 확률로 6레벨 중독효과 적용",
    grade: "rare",
    probability: { line1: 2.0408, line2: 0.4082, line3: 0.102 },
  },
  {
    id: "rare_stun_effect",
    name: "공격 시 10% 확률로 2레벨 기절효과 적용",
    grade: "rare",
    probability: { line1: 2.0408, line2: 0.4082, line3: 0.102 },
  },
  {
    id: "rare_slow_effect",
    name: "공격 시 20% 확률로 2레벨 슬로우효과 적용",
    grade: "rare",
    probability: { line1: 2.0408, line2: 0.4082, line3: 0.102 },
  },
  {
    id: "rare_blind_effect",
    name: "공격 시 20% 확률로 3레벨 암흑효과 적용",
    grade: "rare",
    probability: { line1: 2.0408, line2: 0.4082, line3: 0.102 },
  },
  {
    id: "rare_freeze_effect",
    name: "공격 시 10% 확률로 2레벨 빙결효과 적용",
    grade: "rare",
    probability: { line1: 2.0408, line2: 0.4082, line3: 0.102 },
  },
  {
    id: "rare_seal_effect",
    name: "공격 시 10% 확률로 2레벨 봉인효과 적용",
    grade: "rare",
    probability: { line1: 2.0408, line2: 0.4082, line3: 0.102 },
  },
  {
    id: "rare_ignore_15p",
    name: "몬스터 방어율 무시 +15%",
    grade: "rare",
    probability: { line1: 2.0408, line2: 0.4082, line3: 0.102 },
  },

  // 2,3번째 라인 전용 레어 옵션들
  {
    id: "rare_str_6",
    name: "STR +6",
    grade: "rare",
    probability: { line1: 0, line2: 10.9091, line3: 12.9545 },
  },
  {
    id: "rare_dex_6",
    name: "DEX +6",
    grade: "rare",
    probability: { line1: 0, line2: 10.9091, line3: 12.9545 },
  },
  {
    id: "rare_int_6",
    name: "INT +6",
    grade: "rare",
    probability: { line1: 0, line2: 10.9091, line3: 12.9545 },
  },
  {
    id: "rare_luk_6",
    name: "LUK +6",
    grade: "rare",
    probability: { line1: 0, line2: 10.9091, line3: 12.9545 },
  },
  {
    id: "rare_hp_60",
    name: "최대 HP +60",
    grade: "rare",
    probability: { line1: 0, line2: 10.9091, line3: 12.9545 },
  },
  {
    id: "rare_mp_60",
    name: "최대 MP +60",
    grade: "rare",
    probability: { line1: 0, line2: 10.9091, line3: 12.9545 },
  },
  {
    id: "rare_att_6",
    name: "공격력 +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2727, line3: 8.6364 },
  },
  {
    id: "rare_matt_6",
    name: "마력 +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2727, line3: 8.6364 },
  },

  // === 에픽 등급 옵션 ===
  // 1번째 라인 에픽 옵션들
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
    id: "epic_hp_recovery_360",
    name: "공격 시 20% 확률로 360의 HP 회복",
    grade: "epic",
    probability: { line1: 4.3478, line2: 0.8696, line3: 0.2174 },
  },
  {
    id: "epic_mp_recovery_180",
    name: "공격 시 20% 확률로 180의 MP 회복",
    grade: "epic",
    probability: { line1: 4.3478, line2: 0.8696, line3: 0.2174 },
  },
  {
    id: "epic_ignore_15p",
    name: "몬스터 방어율 무시 +15%",
    grade: "epic",
    probability: { line1: 4.3478, line2: 0.8696, line3: 0.2174 },
  },

  // 2,3번째 라인 에픽 옵션들 (레어 등급 옵션들 포함)
  // 레어 등급 옵션들 (에픽 2,3번째 라인에서 가능)
  {
    id: "epic_rare_str_12",
    name: "STR +12",
    grade: "epic",
    probability: { line1: 0, line2: 4.898, line3: 5.8163 },
  },
  {
    id: "epic_rare_dex_12",
    name: "DEX +12",
    grade: "epic",
    probability: { line1: 0, line2: 4.898, line3: 5.8163 },
  },
  {
    id: "epic_rare_int_12",
    name: "INT +12",
    grade: "epic",
    probability: { line1: 0, line2: 4.898, line3: 5.8163 },
  },
  {
    id: "epic_rare_luk_12",
    name: "LUK +12",
    grade: "epic",
    probability: { line1: 0, line2: 4.898, line3: 5.8163 },
  },
  {
    id: "epic_rare_hp_120",
    name: "최대 HP +120",
    grade: "epic",
    probability: { line1: 0, line2: 4.898, line3: 5.8163 },
  },
  {
    id: "epic_rare_mp_120",
    name: "최대 MP +120",
    grade: "epic",
    probability: { line1: 0, line2: 4.898, line3: 5.8163 },
  },
  {
    id: "epic_rare_att_12",
    name: "공격력 +12",
    grade: "epic",
    probability: { line1: 0, line2: 3.2653, line3: 3.8776 },
  },
  {
    id: "epic_rare_matt_12",
    name: "마력 +12",
    grade: "epic",
    probability: { line1: 0, line2: 3.2653, line3: 3.8776 },
  },
  {
    id: "epic_rare_str_3p",
    name: "STR +3%",
    grade: "epic",
    probability: { line1: 0, line2: 4.898, line3: 5.8163 },
  },
  {
    id: "epic_rare_dex_3p",
    name: "DEX +3%",
    grade: "epic",
    probability: { line1: 0, line2: 4.898, line3: 5.8163 },
  },
  {
    id: "epic_rare_int_3p",
    name: "INT +3%",
    grade: "epic",
    probability: { line1: 0, line2: 4.898, line3: 5.8163 },
  },
  {
    id: "epic_rare_luk_3p",
    name: "LUK +3%",
    grade: "epic",
    probability: { line1: 0, line2: 4.898, line3: 5.8163 },
  },
  {
    id: "epic_rare_att_3p",
    name: "공격력 +3%",
    grade: "epic",
    probability: { line1: 0, line2: 1.6327, line3: 1.9388 },
  },
  {
    id: "epic_rare_matt_3p",
    name: "마력 +3%",
    grade: "epic",
    probability: { line1: 0, line2: 1.6327, line3: 1.9388 },
  },
  {
    id: "epic_rare_crit_4p",
    name: "크리티컬 확률 +4%",
    grade: "epic",
    probability: { line1: 0, line2: 1.6327, line3: 1.9388 },
  },
  {
    id: "epic_rare_damage_3p",
    name: "데미지 +3%",
    grade: "epic",
    probability: { line1: 0, line2: 1.6327, line3: 1.9388 },
  },
  {
    id: "epic_rare_allstat_5",
    name: "올스탯 +5",
    grade: "epic",
    probability: { line1: 0, line2: 3.2653, line3: 3.8776 },
  },
  {
    id: "epic_rare_hp_recovery_240",
    name: "공격 시 20% 확률로 240의 HP 회복",
    grade: "epic",
    probability: { line1: 0, line2: 1.6327, line3: 1.9388 },
  },
  {
    id: "epic_rare_mp_recovery_120",
    name: "공격 시 20% 확률로 120의 MP 회복",
    grade: "epic",
    probability: { line1: 0, line2: 1.6327, line3: 1.9388 },
  },
  {
    id: "epic_rare_poison_effect",
    name: "공격 시 20% 확률로 6레벨 중독효과 적용",
    grade: "epic",
    probability: { line1: 0, line2: 1.6327, line3: 1.9388 },
  },
  {
    id: "epic_rare_stun_effect",
    name: "공격 시 10% 확률로 2레벨 기절효과 적용",
    grade: "epic",
    probability: { line1: 0, line2: 1.6327, line3: 1.9388 },
  },
  {
    id: "epic_rare_slow_effect",
    name: "공격 시 20% 확률로 2레벨 슬로우효과 적용",
    grade: "epic",
    probability: { line1: 0, line2: 1.6327, line3: 1.9388 },
  },
  {
    id: "epic_rare_blind_effect",
    name: "공격 시 20% 확률로 3레벨 암흑효과 적용",
    grade: "epic",
    probability: { line1: 0, line2: 1.6327, line3: 1.9388 },
  },
  {
    id: "epic_rare_freeze_effect",
    name: "공격 시 10% 확률로 2레벨 빙결효과 적용",
    grade: "epic",
    probability: { line1: 0, line2: 1.6327, line3: 1.9388 },
  },
  {
    id: "epic_rare_seal_effect",
    name: "공격 시 10% 확률로 2레벨 봉인효과 적용",
    grade: "epic",
    probability: { line1: 0, line2: 1.6327, line3: 1.9388 },
  },
  {
    id: "epic_rare_ignore_15p",
    name: "몬스터 방어율 무시 +15%",
    grade: "epic",
    probability: { line1: 0, line2: 1.6327, line3: 1.9388 },
  },

  // === 유니크 등급 옵션 ===
  // 1번째 라인 유니크 옵션들
  {
    id: "unique_str_9p",
    name: "STR +9%",
    grade: "unique",
    probability: { line1: 11.6279, line2: 2.3256, line3: 0.5814 },
  },
  {
    id: "unique_dex_9p",
    name: "DEX +9%",
    grade: "unique",
    probability: { line1: 11.6279, line2: 2.3256, line3: 0.5814 },
  },
  {
    id: "unique_int_9p",
    name: "INT +9%",
    grade: "unique",
    probability: { line1: 11.6279, line2: 2.3256, line3: 0.5814 },
  },
  {
    id: "unique_luk_9p",
    name: "LUK +9%",
    grade: "unique",
    probability: { line1: 11.6279, line2: 2.3256, line3: 0.5814 },
  },
  {
    id: "unique_att_9p",
    name: "공격력 +9%",
    grade: "unique",
    probability: { line1: 6.9767, line2: 1.3953, line3: 0.3488 },
  },
  {
    id: "unique_matt_9p",
    name: "마력 +9%",
    grade: "unique",
    probability: { line1: 6.9767, line2: 1.3953, line3: 0.3488 },
  },
  {
    id: "unique_crit_9p",
    name: "크리티컬 확률 +9%",
    grade: "unique",
    probability: { line1: 9.3023, line2: 1.8605, line3: 0.4651 },
  },
  {
    id: "unique_damage_9p",
    name: "데미지 +9%",
    grade: "unique",
    probability: { line1: 6.9767, line2: 1.3953, line3: 0.3488 },
  },
  {
    id: "unique_allstat_6p",
    name: "올스탯 +6%",
    grade: "unique",
    probability: { line1: 9.3023, line2: 1.8605, line3: 0.4651 },
  },
  {
    id: "unique_ignore_30p",
    name: "몬스터 방어율 무시 +30%",
    grade: "unique",
    probability: { line1: 6.9767, line2: 1.3953, line3: 0.3488 },
  },
  {
    id: "unique_boss_30p",
    name: "보스 몬스터 데미지 +30%",
    grade: "unique",
    probability: { line1: 6.9767, line2: 1.3953, line3: 0.3488 },
  },

  // 2,3번째 라인 유니크 옵션들 (에픽 등급 옵션들 포함)
  // 에픽 등급 옵션들 (유니크 2,3번째 라인에서 가능)
  {
    id: "unique_epic_str_6p",
    name: "STR +6%",
    grade: "unique",
    probability: { line1: 0, line2: 8.6957, line3: 10.3261 },
  },
  {
    id: "unique_epic_dex_6p",
    name: "DEX +6%",
    grade: "unique",
    probability: { line1: 0, line2: 8.6957, line3: 10.3261 },
  },
  {
    id: "unique_epic_int_6p",
    name: "INT +6%",
    grade: "unique",
    probability: { line1: 0, line2: 8.6957, line3: 10.3261 },
  },
  {
    id: "unique_epic_luk_6p",
    name: "LUK +6%",
    grade: "unique",
    probability: { line1: 0, line2: 8.6957, line3: 10.3261 },
  },
  {
    id: "unique_epic_hp_6p",
    name: "최대 HP +6%",
    grade: "unique",
    probability: { line1: 0, line2: 8.6957, line3: 10.3261 },
  },
  {
    id: "unique_epic_mp_6p",
    name: "최대 MP +6%",
    grade: "unique",
    probability: { line1: 0, line2: 8.6957, line3: 10.3261 },
  },
  {
    id: "unique_epic_att_6p",
    name: "공격력 +6%",
    grade: "unique",
    probability: { line1: 0, line2: 3.4783, line3: 4.1304 },
  },
  {
    id: "unique_epic_matt_6p",
    name: "마력 +6%",
    grade: "unique",
    probability: { line1: 0, line2: 3.4783, line3: 4.1304 },
  },
  {
    id: "unique_epic_crit_8p",
    name: "크리티컬 확률 +8%",
    grade: "unique",
    probability: { line1: 0, line2: 3.4783, line3: 4.1304 },
  },
  {
    id: "unique_epic_damage_6p",
    name: "데미지 +6%",
    grade: "unique",
    probability: { line1: 0, line2: 3.4783, line3: 4.1304 },
  },
  {
    id: "unique_epic_allstat_3p",
    name: "올스탯 +3%",
    grade: "unique",
    probability: { line1: 0, line2: 3.4783, line3: 4.1304 },
  },
  {
    id: "unique_epic_hp_recovery_360",
    name: "공격 시 20% 확률로 360의 HP 회복",
    grade: "unique",
    probability: { line1: 0, line2: 3.4783, line3: 4.1304 },
  },
  {
    id: "unique_epic_mp_recovery_180",
    name: "공격 시 20% 확률로 180의 MP 회복",
    grade: "unique",
    probability: { line1: 0, line2: 3.4783, line3: 4.1304 },
  },
  {
    id: "unique_epic_ignore_15p",
    name: "몬스터 방어율 무시 +15%",
    grade: "unique",
    probability: { line1: 0, line2: 3.4783, line3: 4.1304 },
  },

  // === 레전드리 등급 옵션 ===
  // 1번째 라인 레전드리 옵션들
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

  // 2,3번째 라인 레전드리 옵션들 (유니크 등급 옵션들 포함)
  // 유니크 등급 옵션들 (레전드리 2,3번째 라인에서 가능)
  {
    id: "legendary_unique_str_9p",
    name: "STR +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 9.3023, line3: 11.0465 },
  },
  {
    id: "legendary_unique_dex_9p",
    name: "DEX +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 9.3023, line3: 11.0465 },
  },
  {
    id: "legendary_unique_int_9p",
    name: "INT +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 9.3023, line3: 11.0465 },
  },
  {
    id: "legendary_unique_luk_9p",
    name: "LUK +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 9.3023, line3: 11.0465 },
  },
  {
    id: "legendary_unique_att_9p",
    name: "공격력 +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 5.5814, line3: 6.6279 },
  },
  {
    id: "legendary_unique_matt_9p",
    name: "마력 +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 5.5814, line3: 6.6279 },
  },
  {
    id: "legendary_unique_crit_9p",
    name: "크리티컬 확률 +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.4419, line3: 8.8372 },
  },
  {
    id: "legendary_unique_damage_9p",
    name: "데미지 +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 5.5814, line3: 6.6279 },
  },
  {
    id: "legendary_unique_allstat_6p",
    name: "올스탯 +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.4419, line3: 8.8372 },
  },
  {
    id: "legendary_unique_ignore_30p",
    name: "몬스터 방어율 무시 +30%",
    grade: "legendary",
    probability: { line1: 0, line2: 5.5814, line3: 6.6279 },
  },
  {
    id: "legendary_unique_boss_30p",
    name: "보스 몬스터 데미지 +30%",
    grade: "legendary",
    probability: { line1: 0, line2: 5.5814, line3: 6.6279 },
  },
];

// 잠재능력 옵션 데이터 (모자 120~200레벨 기준)
export const HAT_POTENTIAL_OPTIONS: PotentialOptionData[] = [
  // === 레어 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "hat_rare_str_12",
    name: "STR +12",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "hat_rare_dex_12",
    name: "DEX +12",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "hat_rare_int_12",
    name: "INT +12",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "hat_rare_luk_12",
    name: "LUK +12",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "hat_rare_hp_120",
    name: "HP +120",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "hat_rare_mp_120",
    name: "MP +120",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "hat_rare_def_120",
    name: "방어력 +120",
    grade: "rare",
    probability: { line1: 5.0, line2: 1.0, line3: 0.25 },
  },
  {
    id: "hat_rare_str_3p",
    name: "STR +3%",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "hat_rare_dex_3p",
    name: "DEX +3%",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "hat_rare_int_3p",
    name: "INT +3%",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "hat_rare_luk_3p",
    name: "LUK +3%",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "hat_rare_hp_3p",
    name: "HP +3%",
    grade: "rare",
    probability: { line1: 5.0, line2: 1.0, line3: 0.25 },
  },
  {
    id: "hat_rare_mp_3p",
    name: "MP +3%",
    grade: "rare",
    probability: { line1: 5.0, line2: 1.0, line3: 0.25 },
  },
  {
    id: "hat_rare_def_3p",
    name: "방어력 +3%",
    grade: "rare",
    probability: { line1: 5.0, line2: 1.0, line3: 0.25 },
  },
  {
    id: "hat_rare_allstat_5",
    name: "올스탯 +5",
    grade: "rare",
    probability: { line1: 5.0, line2: 1.0, line3: 0.25 },
  },

  // 2,3번째 라인 전용 레어 옵션들
  {
    id: "hat_rare_str_6",
    name: "STR +6",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "hat_rare_dex_6",
    name: "DEX +6",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "hat_rare_int_6",
    name: "INT +6",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "hat_rare_luk_6",
    name: "LUK +6",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "hat_rare_hp_60",
    name: "HP +60",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "hat_rare_mp_60",
    name: "MP +60",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "hat_rare_def_60",
    name: "방어력 +60",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },

  // === 에픽 등급 옵션 ===
  // 1번째 라인 에픽 옵션들
  {
    id: "hat_epic_str_6p",
    name: "STR +6%",
    grade: "epic",
    probability: { line1: 14.2857, line2: 2.8571, line3: 0.7143 },
  },
  {
    id: "hat_epic_dex_6p",
    name: "DEX +6%",
    grade: "epic",
    probability: { line1: 14.2857, line2: 2.8571, line3: 0.7143 },
  },
  {
    id: "hat_epic_int_6p",
    name: "INT +6%",
    grade: "epic",
    probability: { line1: 14.2857, line2: 2.8571, line3: 0.7143 },
  },
  {
    id: "hat_epic_luk_6p",
    name: "LUK +6%",
    grade: "epic",
    probability: { line1: 14.2857, line2: 2.8571, line3: 0.7143 },
  },
  {
    id: "hat_epic_hp_6p",
    name: "HP +6%",
    grade: "epic",
    probability: { line1: 14.2857, line2: 2.8571, line3: 0.7143 },
  },
  {
    id: "hat_epic_mp_6p",
    name: "MP +6%",
    grade: "epic",
    probability: { line1: 14.2857, line2: 2.8571, line3: 0.7143 },
  },
  {
    id: "hat_epic_def_6p",
    name: "방어력 +6%",
    grade: "epic",
    probability: { line1: 8.5714, line2: 1.7143, line3: 0.4286 },
  },
  {
    id: "hat_epic_allstat_3p",
    name: "올스탯 +3%",
    grade: "epic",
    probability: { line1: 5.7143, line2: 1.1429, line3: 0.2857 },
  },

  // 2,3번째 라인 에픽 옵션들 (레어 등급 옵션들 포함)
  {
    id: "hat_epic_rare_str_12",
    name: "STR +12",
    grade: "epic",
    probability: { line1: 0, line2: 6.0, line3: 7.125 },
  },
  {
    id: "hat_epic_rare_dex_12",
    name: "DEX +12",
    grade: "epic",
    probability: { line1: 0, line2: 6.0, line3: 7.125 },
  },
  {
    id: "hat_epic_rare_int_12",
    name: "INT +12",
    grade: "epic",
    probability: { line1: 0, line2: 6.0, line3: 7.125 },
  },
  {
    id: "hat_epic_rare_luk_12",
    name: "LUK +12",
    grade: "epic",
    probability: { line1: 0, line2: 6.0, line3: 7.125 },
  },
  {
    id: "hat_epic_rare_hp_120",
    name: "HP +120",
    grade: "epic",
    probability: { line1: 0, line2: 6.0, line3: 7.125 },
  },
  {
    id: "hat_epic_rare_mp_120",
    name: "MP +120",
    grade: "epic",
    probability: { line1: 0, line2: 6.0, line3: 7.125 },
  },
  {
    id: "hat_epic_rare_def_120",
    name: "방어력 +120",
    grade: "epic",
    probability: { line1: 0, line2: 4.0, line3: 4.75 },
  },
  {
    id: "hat_epic_rare_str_3p",
    name: "STR +3%",
    grade: "epic",
    probability: { line1: 0, line2: 6.0, line3: 7.125 },
  },
  {
    id: "hat_epic_rare_dex_3p",
    name: "DEX +3%",
    grade: "epic",
    probability: { line1: 0, line2: 6.0, line3: 7.125 },
  },
  {
    id: "hat_epic_rare_int_3p",
    name: "INT +3%",
    grade: "epic",
    probability: { line1: 0, line2: 6.0, line3: 7.125 },
  },
  {
    id: "hat_epic_rare_luk_3p",
    name: "LUK +3%",
    grade: "epic",
    probability: { line1: 0, line2: 6.0, line3: 7.125 },
  },
  {
    id: "hat_epic_rare_hp_3p",
    name: "HP +3%",
    grade: "epic",
    probability: { line1: 0, line2: 4.0, line3: 4.75 },
  },
  {
    id: "hat_epic_rare_mp_3p",
    name: "MP +3%",
    grade: "epic",
    probability: { line1: 0, line2: 4.0, line3: 4.75 },
  },
  {
    id: "hat_epic_rare_def_3p",
    name: "방어력 +3%",
    grade: "epic",
    probability: { line1: 0, line2: 4.0, line3: 4.75 },
  },
  {
    id: "hat_epic_rare_allstat_5",
    name: "올스탯 +5",
    grade: "epic",
    probability: { line1: 0, line2: 4.0, line3: 4.75 },
  },

  // === 유니크 등급 옵션 ===
  // 1번째 라인 유니크 옵션들
  {
    id: "hat_unique_str_9p",
    name: "STR +9%",
    grade: "unique",
    probability: { line1: 9.6154, line2: 1.9231, line3: 0.4808 },
  },
  {
    id: "hat_unique_dex_9p",
    name: "DEX +9%",
    grade: "unique",
    probability: { line1: 9.6154, line2: 1.9231, line3: 0.4808 },
  },
  {
    id: "hat_unique_int_9p",
    name: "INT +9%",
    grade: "unique",
    probability: { line1: 9.6154, line2: 1.9231, line3: 0.4808 },
  },
  {
    id: "hat_unique_luk_9p",
    name: "LUK +9%",
    grade: "unique",
    probability: { line1: 9.6154, line2: 1.9231, line3: 0.4808 },
  },
  {
    id: "hat_unique_hp_9p",
    name: "HP +9%",
    grade: "unique",
    probability: { line1: 11.5385, line2: 2.3077, line3: 0.5769 },
  },
  {
    id: "hat_unique_mp_9p",
    name: "MP +9%",
    grade: "unique",
    probability: { line1: 11.5385, line2: 2.3077, line3: 0.5769 },
  },
  {
    id: "hat_unique_allstat_6p",
    name: "올스탯 +6%",
    grade: "unique",
    probability: { line1: 7.6923, line2: 1.5385, line3: 0.3846 },
  },
  {
    id: "hat_unique_damage_ignore_20p_5p",
    name: "피격 시 데미지 20% 무시 (5%)",
    grade: "unique",
    probability: { line1: 7.6923, line2: 1.5385, line3: 0.3846 },
  },
  {
    id: "hat_unique_damage_ignore_40p_5p",
    name: "피격 시 데미지 40% 무시 (5%)",
    grade: "unique",
    probability: { line1: 7.6923, line2: 1.5385, line3: 0.3846 },
  },
  {
    id: "hat_unique_recovery_30p",
    name: "회복 효율 +30%",
    grade: "unique",
    probability: { line1: 7.6923, line2: 1.5385, line3: 0.3846 },
  },
  {
    id: "hat_unique_mystic_door",
    name: "<쓸만한 미스틱 도어>",
    grade: "unique",
    probability: { line1: 7.6923, line2: 1.5385, line3: 0.3846 },
  },

  // 2,3번째 라인 유니크 옵션들 (에픽 등급 옵션들 포함)
  {
    id: "hat_unique_epic_str_6p",
    name: "STR +6%",
    grade: "unique",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "hat_unique_epic_dex_6p",
    name: "DEX +6%",
    grade: "unique",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "hat_unique_epic_int_6p",
    name: "INT +6%",
    grade: "unique",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "hat_unique_epic_luk_6p",
    name: "LUK +6%",
    grade: "unique",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "hat_unique_epic_hp_6p",
    name: "HP +6%",
    grade: "unique",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "hat_unique_epic_mp_6p",
    name: "MP +6%",
    grade: "unique",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "hat_unique_epic_def_6p",
    name: "방어력 +6%",
    grade: "unique",
    probability: { line1: 0, line2: 6.8571, line3: 8.1429 },
  },
  {
    id: "hat_unique_epic_allstat_3p",
    name: "올스탯 +3%",
    grade: "unique",
    probability: { line1: 0, line2: 4.5714, line3: 5.4286 },
  },

  // === 레전드리 등급 옵션 ===
  // 1번째 라인 레전드리 옵션들
  {
    id: "hat_legendary_str_12p",
    name: "STR +12%",
    grade: "legendary",
    probability: { line1: 9.7561, line2: 1.9512, line3: 0.4878 },
  },
  {
    id: "hat_legendary_dex_12p",
    name: "DEX +12%",
    grade: "legendary",
    probability: { line1: 9.7561, line2: 1.9512, line3: 0.4878 },
  },
  {
    id: "hat_legendary_int_12p",
    name: "INT +12%",
    grade: "legendary",
    probability: { line1: 9.7561, line2: 1.9512, line3: 0.4878 },
  },
  {
    id: "hat_legendary_luk_12p",
    name: "LUK +12%",
    grade: "legendary",
    probability: { line1: 9.7561, line2: 1.9512, line3: 0.4878 },
  },
  {
    id: "hat_legendary_hp_12p",
    name: "HP +12%",
    grade: "legendary",
    probability: { line1: 9.7561, line2: 1.9512, line3: 0.4878 },
  },
  {
    id: "hat_legendary_mp_12p",
    name: "MP +12%",
    grade: "legendary",
    probability: { line1: 9.7561, line2: 1.9512, line3: 0.4878 },
  },
  {
    id: "hat_legendary_allstat_9p",
    name: "올스탯 +9%",
    grade: "legendary",
    probability: { line1: 7.3171, line2: 1.4634, line3: 0.3659 },
  },
  {
    id: "hat_legendary_damage_ignore_20p_10p",
    name: "피격 시 데미지 20% 무시 (10%)",
    grade: "legendary",
    probability: { line1: 7.3171, line2: 1.4634, line3: 0.3659 },
  },
  {
    id: "hat_legendary_damage_ignore_40p_10p",
    name: "피격 시 데미지 40% 무시 (10%)",
    grade: "legendary",
    probability: { line1: 7.3171, line2: 1.4634, line3: 0.3659 },
  },
  {
    id: "hat_legendary_cooldown_1s",
    name: "재사용 대기시간 -1초",
    grade: "legendary",
    probability: { line1: 7.3171, line2: 1.4634, line3: 0.3659 },
  },
  {
    id: "hat_legendary_cooldown_2s",
    name: "재사용 대기시간 -2초",
    grade: "legendary",
    probability: { line1: 4.878, line2: 0.9756, line3: 0.2439 },
  },
  {
    id: "hat_legendary_advanced_bless",
    name: "<쓸만한 어드밴스드 블레스>",
    grade: "legendary",
    probability: { line1: 7.3171, line2: 1.4634, line3: 0.3659 },
  },

  // 2,3번째 라인 레전드리 옵션들 (유니크 등급 옵션들 포함)
  {
    id: "hat_legendary_unique_str_9p",
    name: "STR +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.6923, line3: 9.1346 },
  },
  {
    id: "hat_legendary_unique_dex_9p",
    name: "DEX +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.6923, line3: 9.1346 },
  },
  {
    id: "hat_legendary_unique_int_9p",
    name: "INT +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.6923, line3: 9.1346 },
  },
  {
    id: "hat_legendary_unique_luk_9p",
    name: "LUK +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.6923, line3: 9.1346 },
  },
  {
    id: "hat_legendary_unique_hp_9p",
    name: "HP +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 9.2308, line3: 10.9615 },
  },
  {
    id: "hat_legendary_unique_mp_9p",
    name: "MP +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 9.2308, line3: 10.9615 },
  },
  {
    id: "hat_legendary_unique_allstat_6p",
    name: "올스탯 +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.1538, line3: 7.3077 },
  },
  {
    id: "hat_legendary_unique_damage_ignore_20p_5p",
    name: "피격 시 데미지 20% 무시 (5%)",
    grade: "legendary",
    probability: { line1: 0, line2: 6.1538, line3: 7.3077 },
  },
  {
    id: "hat_legendary_unique_damage_ignore_40p_5p",
    name: "피격 시 데미지 40% 무시 (5%)",
    grade: "legendary",
    probability: { line1: 0, line2: 6.1538, line3: 7.3077 },
  },
  {
    id: "hat_legendary_unique_recovery_30p",
    name: "회복 효율 +30%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.1538, line3: 7.3077 },
  },
  {
    id: "hat_legendary_unique_mystic_door",
    name: "<쓸만한 미스틱 도어>",
    grade: "legendary",
    probability: { line1: 0, line2: 6.1538, line3: 7.3077 },
  },
];

// 장갑 잠재능력 옵션 데이터 (200레벨 기준)
export const GLOVE_POTENTIAL_OPTIONS: PotentialOptionData[] = [
  // === 레어 등급 옵션 ===
  // 첫 번째 라인 옵션들
  {
    id: "glove_rare_str_12",
    name: "STR +12",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "glove_rare_dex_12",
    name: "DEX +12",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "glove_rare_int_12",
    name: "INT +12",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "glove_rare_luk_12",
    name: "LUK +12",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "glove_rare_hp_120",
    name: "최대 HP +120",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "glove_rare_mp_120",
    name: "최대 MP +120",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "glove_rare_def_120",
    name: "방어력 +120",
    grade: "rare",
    probability: { line1: 5, line2: 1.0000001192, line3: 0.25 },
  },
  {
    id: "glove_rare_str_3p",
    name: "STR +3%",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "glove_rare_dex_3p",
    name: "DEX +3%",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "glove_rare_int_3p",
    name: "INT +3%",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "glove_rare_luk_3p",
    name: "LUK +3%",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "glove_rare_hp_3p",
    name: "최대 HP +3%",
    grade: "rare",
    probability: { line1: 5, line2: 1.0000001192, line3: 0.25 },
  },
  {
    id: "glove_rare_mp_3p",
    name: "최대 MP +3%",
    grade: "rare",
    probability: { line1: 5, line2: 1.0000001192, line3: 0.25 },
  },
  {
    id: "glove_rare_def_3p",
    name: "방어력 +3%",
    grade: "rare",
    probability: { line1: 5, line2: 1.0000001192, line3: 0.25 },
  },
  {
    id: "glove_rare_allstat_5",
    name: "올스탯 +5",
    grade: "rare",
    probability: { line1: 5, line2: 1.0000001192, line3: 0.25 },
  },
  // 두 번째/세 번째 라인 전용 옵션들
  {
    id: "glove_rare_str_6",
    name: "STR +6",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "glove_rare_dex_6",
    name: "DEX +6",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "glove_rare_int_6",
    name: "INT +6",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "glove_rare_luk_6",
    name: "LUK +6",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "glove_rare_hp_60",
    name: "최대 HP +60",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "glove_rare_mp_60",
    name: "최대 MP +60",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "glove_rare_def_60",
    name: "방어력 +60",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },

  // === 에픽 등급 옵션 ===
  // 첫 번째 라인 옵션들
  {
    id: "glove_epic_str_6p",
    name: "STR +6%",
    grade: "epic",
    probability: { line1: 12.1951, line2: 2.439, line3: 0.6098 },
  },
  {
    id: "glove_epic_dex_6p",
    name: "DEX +6%",
    grade: "epic",
    probability: { line1: 12.1951, line2: 2.439, line3: 0.6098 },
  },
  {
    id: "glove_epic_int_6p",
    name: "INT +6%",
    grade: "epic",
    probability: { line1: 12.1951, line2: 2.439, line3: 0.6098 },
  },
  {
    id: "glove_epic_luk_6p",
    name: "LUK +6%",
    grade: "epic",
    probability: { line1: 12.1951, line2: 2.439, line3: 0.6098 },
  },
  {
    id: "glove_epic_hp_6p",
    name: "최대 HP +6%",
    grade: "epic",
    probability: { line1: 12.1951, line2: 2.439, line3: 0.6098 },
  },
  {
    id: "glove_epic_mp_6p",
    name: "최대 MP +6%",
    grade: "epic",
    probability: { line1: 12.1951, line2: 2.439, line3: 0.6098 },
  },
  {
    id: "glove_epic_def_6p",
    name: "방어력 +6%",
    grade: "epic",
    probability: { line1: 7.3171, line2: 1.4634, line3: 0.3659 },
  },
  {
    id: "glove_epic_allstat_3p",
    name: "올스탯 +3%",
    grade: "epic",
    probability: { line1: 4.878, line2: 0.9756, line3: 0.2439 },
  },
  {
    id: "glove_epic_hp_recovery",
    name: "몬스터 처치 시 15% 확률로 95의 HP회복",
    grade: "epic",
    probability: { line1: 7.3171, line2: 1.4634, line3: 0.3659 },
  },
  {
    id: "glove_epic_mp_recovery",
    name: "몬스터 처치 시 15% 확률로 95의 MP회복",
    grade: "epic",
    probability: { line1: 7.3171, line2: 1.4634, line3: 0.3659 },
  },
  // 두 번째/세 번째 라인 전용 옵션들 (상속)
  {
    id: "glove_epic_inherited_str_12",
    name: "STR +12",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "glove_epic_inherited_dex_12",
    name: "DEX +12",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "glove_epic_inherited_int_12",
    name: "INT +12",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "glove_epic_inherited_luk_12",
    name: "LUK +12",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "glove_epic_inherited_hp_120",
    name: "최대 HP +120",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "glove_epic_inherited_mp_120",
    name: "최대 MP +120",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "glove_epic_inherited_def_120",
    name: "방어력 +120",
    grade: "epic",
    probability: { line1: 0, line2: 4.0000004768, line3: 4.75 },
  },
  {
    id: "glove_epic_inherited_str_3p",
    name: "STR +3%",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "glove_epic_inherited_dex_3p",
    name: "DEX +3%",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "glove_epic_inherited_int_3p",
    name: "INT +3%",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "glove_epic_inherited_luk_3p",
    name: "LUK +3%",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "glove_epic_inherited_hp_3p",
    name: "최대 HP +3%",
    grade: "epic",
    probability: { line1: 0, line2: 4.0000004768, line3: 4.75 },
  },
  {
    id: "glove_epic_inherited_mp_3p",
    name: "최대 MP +3%",
    grade: "epic",
    probability: { line1: 0, line2: 4.0000004768, line3: 4.75 },
  },
  {
    id: "glove_epic_inherited_def_3p",
    name: "방어력 +3%",
    grade: "epic",
    probability: { line1: 0, line2: 4.0000004768, line3: 4.75 },
  },
  {
    id: "glove_epic_inherited_allstat_5",
    name: "올스탯 +5",
    grade: "epic",
    probability: { line1: 0, line2: 4.0000004768, line3: 4.75 },
  },

  // === 유니크 등급 옵션 ===
  // 첫 번째 라인 옵션들
  {
    id: "glove_unique_str_9p",
    name: "STR +9%",
    grade: "unique",
    probability: { line1: 8.9286, line2: 1.7857, line3: 0.4464 },
  },
  {
    id: "glove_unique_dex_9p",
    name: "DEX +9%",
    grade: "unique",
    probability: { line1: 8.9286, line2: 1.7857, line3: 0.4464 },
  },
  {
    id: "glove_unique_int_9p",
    name: "INT +9%",
    grade: "unique",
    probability: { line1: 8.9286, line2: 1.7857, line3: 0.4464 },
  },
  {
    id: "glove_unique_luk_9p",
    name: "LUK +9%",
    grade: "unique",
    probability: { line1: 8.9286, line2: 1.7857, line3: 0.4464 },
  },
  {
    id: "glove_unique_hp_9p",
    name: "최대 HP +9%",
    grade: "unique",
    probability: { line1: 10.7143, line2: 2.1429, line3: 0.5357 },
  },
  {
    id: "glove_unique_mp_9p",
    name: "최대 MP +9%",
    grade: "unique",
    probability: { line1: 10.7143, line2: 2.1429, line3: 0.5357 },
  },
  {
    id: "glove_unique_allstat_6p",
    name: "올스탯 +6%",
    grade: "unique",
    probability: { line1: 7.1429, line2: 1.4286, line3: 0.3571 },
  },
  {
    id: "glove_unique_str_32",
    name: "STR +32",
    grade: "unique",
    probability: { line1: 1.7857, line2: 0.3571, line3: 0.08929 },
  },
  {
    id: "glove_unique_dex_32",
    name: "DEX +32",
    grade: "unique",
    probability: { line1: 1.7857, line2: 0.3571, line3: 0.08929 },
  },
  {
    id: "glove_unique_int_32",
    name: "INT +32",
    grade: "unique",
    probability: { line1: 1.7857, line2: 0.3571, line3: 0.08929 },
  },
  {
    id: "glove_unique_luk_32",
    name: "LUK +32",
    grade: "unique",
    probability: { line1: 1.7857, line2: 0.3571, line3: 0.08929 },
  },
  {
    id: "glove_unique_damage_reduce_20p",
    name: "피격 시 5% 확률로 데미지의 20% 무시",
    grade: "unique",
    probability: { line1: 7.1429, line2: 1.4286, line3: 0.3571 },
  },
  {
    id: "glove_unique_damage_reduce_40p",
    name: "피격 시 5% 확률로 데미지의 40% 무시",
    grade: "unique",
    probability: { line1: 7.1429, line2: 1.4286, line3: 0.3571 },
  },
  {
    id: "glove_unique_hp_recovery_skill",
    name: "HP 회복 아이템 및 회복 스킬 효율 +30%",
    grade: "unique",
    probability: { line1: 7.1429, line2: 1.4286, line3: 0.3571 },
  },
  {
    id: "glove_unique_sharp_eyes",
    name: "<쓸만한 샤프 아이즈> 스킬 사용 가능",
    grade: "unique",
    probability: { line1: 7.1429, line2: 1.4286, line3: 0.3571 },
  },
  // 두 번째/세 번째 라인 전용 옵션들 (상속)
  {
    id: "glove_unique_inherited_str_6p",
    name: "STR +6%",
    grade: "unique",
    probability: { line1: 0, line2: 9.7561, line3: 11.5854 },
  },
  {
    id: "glove_unique_inherited_dex_6p",
    name: "DEX +6%",
    grade: "unique",
    probability: { line1: 0, line2: 9.7561, line3: 11.5854 },
  },
  {
    id: "glove_unique_inherited_int_6p",
    name: "INT +6%",
    grade: "unique",
    probability: { line1: 0, line2: 9.7561, line3: 11.5854 },
  },
  {
    id: "glove_unique_inherited_luk_6p",
    name: "LUK +6%",
    grade: "unique",
    probability: { line1: 0, line2: 9.7561, line3: 11.5854 },
  },
  {
    id: "glove_unique_inherited_hp_6p",
    name: "최대 HP +6%",
    grade: "unique",
    probability: { line1: 0, line2: 9.7561, line3: 11.5854 },
  },
  {
    id: "glove_unique_inherited_mp_6p",
    name: "최대 MP +6%",
    grade: "unique",
    probability: { line1: 0, line2: 9.7561, line3: 11.5854 },
  },
  {
    id: "glove_unique_inherited_def_6p",
    name: "방어력 +6%",
    grade: "unique",
    probability: { line1: 0, line2: 5.8537, line3: 6.9512 },
  },
  {
    id: "glove_unique_inherited_allstat_3p",
    name: "올스탯 +3%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9024, line3: 4.6341 },
  },
  {
    id: "glove_unique_inherited_hp_recovery",
    name: "몬스터 처치 시 15% 확률로 95의 HP회복",
    grade: "unique",
    probability: { line1: 0, line2: 5.8537, line3: 6.9512 },
  },
  {
    id: "glove_unique_inherited_mp_recovery",
    name: "몬스터 처치 시 15% 확률로 95의 MP회복",
    grade: "unique",
    probability: { line1: 0, line2: 5.8537, line3: 6.9512 },
  },

  // === 레전드리 등급 옵션 ===
  // 첫 번째 라인 옵션들
  {
    id: "glove_legendary_str_12p",
    name: "STR +12%",
    grade: "legendary",
    probability: { line1: 10, line2: 2.0000002384, line3: 0.5 },
  },
  {
    id: "glove_legendary_dex_12p",
    name: "DEX +12%",
    grade: "legendary",
    probability: { line1: 10, line2: 2.0000002384, line3: 0.5 },
  },
  {
    id: "glove_legendary_int_12p",
    name: "INT +12%",
    grade: "legendary",
    probability: { line1: 10, line2: 2.0000002384, line3: 0.5 },
  },
  {
    id: "glove_legendary_luk_12p",
    name: "LUK +12%",
    grade: "legendary",
    probability: { line1: 10, line2: 2.0000002384, line3: 0.5 },
  },
  {
    id: "glove_legendary_hp_12p",
    name: "최대 HP +12%",
    grade: "legendary",
    probability: { line1: 10, line2: 2.0000002384, line3: 0.5 },
  },
  {
    id: "glove_legendary_mp_12p",
    name: "최대 MP +12%",
    grade: "legendary",
    probability: { line1: 10, line2: 2.0000002384, line3: 0.5 },
  },
  {
    id: "glove_legendary_crit_damage_8p",
    name: "크리티컬 데미지 +8%",
    grade: "legendary",
    probability: { line1: 10, line2: 2.0000002384, line3: 0.5 },
  },
  {
    id: "glove_legendary_allstat_9p",
    name: "올스탯 +9%",
    grade: "legendary",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "glove_legendary_damage_reduce_20p_10",
    name: "피격 시 10% 확률로 데미지의 20% 무시",
    grade: "legendary",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "glove_legendary_damage_reduce_40p_10",
    name: "피격 시 10% 확률로 데미지의 40% 무시",
    grade: "legendary",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "glove_legendary_wind_booster",
    name: "<쓸만한 윈드 부스터> 스킬 사용 가능",
    grade: "legendary",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  // 두 번째/세 번째 라인 전용 옵션들 (상속)
  {
    id: "glove_legendary_inherited_str_9p",
    name: "STR +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.1429, line3: 8.4821 },
  },
  {
    id: "glove_legendary_inherited_dex_9p",
    name: "DEX +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.1429, line3: 8.4821 },
  },
  {
    id: "glove_legendary_inherited_int_9p",
    name: "INT +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.1429, line3: 8.4821 },
  },
  {
    id: "glove_legendary_inherited_luk_9p",
    name: "LUK +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.1429, line3: 8.4821 },
  },
  {
    id: "glove_legendary_inherited_hp_9p",
    name: "최대 HP +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 8.5714, line3: 10.1786 },
  },
  {
    id: "glove_legendary_inherited_mp_9p",
    name: "최대 MP +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 8.5714, line3: 10.1786 },
  },
  {
    id: "glove_legendary_inherited_allstat_6p",
    name: "올스탯 +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 5.7143, line3: 6.7857 },
  },
  {
    id: "glove_legendary_inherited_str_32",
    name: "STR +32",
    grade: "legendary",
    probability: { line1: 0, line2: 1.4286, line3: 1.6964 },
  },
  {
    id: "glove_legendary_inherited_dex_32",
    name: "DEX +32",
    grade: "legendary",
    probability: { line1: 0, line2: 1.4286, line3: 1.6964 },
  },
  {
    id: "glove_legendary_inherited_int_32",
    name: "INT +32",
    grade: "legendary",
    probability: { line1: 0, line2: 1.4286, line3: 1.6964 },
  },
  {
    id: "glove_legendary_inherited_luk_32",
    name: "LUK +32",
    grade: "legendary",
    probability: { line1: 0, line2: 1.4286, line3: 1.6964 },
  },
  {
    id: "glove_legendary_inherited_damage_reduce_20p",
    name: "피격 시 5% 확률로 데미지의 20% 무시",
    grade: "legendary",
    probability: { line1: 0, line2: 5.7143, line3: 6.7857 },
  },
  {
    id: "glove_legendary_inherited_damage_reduce_40p",
    name: "피격 시 5% 확률로 데미지의 40% 무시",
    grade: "legendary",
    probability: { line1: 0, line2: 5.7143, line3: 6.7857 },
  },
  {
    id: "glove_legendary_inherited_hp_recovery_skill",
    name: "HP 회복 아이템 및 회복 스킬 효율 +30%",
    grade: "legendary",
    probability: { line1: 0, line2: 5.7143, line3: 6.7857 },
  },
  {
    id: "glove_legendary_inherited_sharp_eyes",
    name: "<쓸만한 샤프 아이즈> 스킬 사용 가능",
    grade: "legendary",
    probability: { line1: 0, line2: 5.7143, line3: 6.7857 },
  },
];

// 장신구(펜던트) 잠재능력 옵션 데이터 (160레벨 기준)
export const ACCESSORY_POTENTIAL_OPTIONS: PotentialOptionData[] = [
  // === 레어 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "accessory_rare_str_12",
    name: "STR +12",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "accessory_rare_dex_12",
    name: "DEX +12",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "accessory_rare_int_12",
    name: "INT +12",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "accessory_rare_luk_12",
    name: "LUK +12",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "accessory_rare_hp_120",
    name: "최대 HP +120",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "accessory_rare_mp_120",
    name: "최대 MP +120",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "accessory_rare_def_120",
    name: "방어력 +120",
    grade: "rare",
    probability: { line1: 5, line2: 1.0000001192, line3: 0.25 },
  },
  {
    id: "accessory_rare_str_3p",
    name: "STR +3%",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "accessory_rare_dex_3p",
    name: "DEX +3%",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "accessory_rare_int_3p",
    name: "INT +3%",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "accessory_rare_luk_3p",
    name: "LUK +3%",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "accessory_rare_hp_3p",
    name: "최대 HP +3%",
    grade: "rare",
    probability: { line1: 5, line2: 1.0000001192, line3: 0.25 },
  },
  {
    id: "accessory_rare_mp_3p",
    name: "최대 MP +3%",
    grade: "rare",
    probability: { line1: 5, line2: 1.0000001192, line3: 0.25 },
  },
  {
    id: "accessory_rare_def_3p",
    name: "방어력 +3%",
    grade: "rare",
    probability: { line1: 5, line2: 1.0000001192, line3: 0.25 },
  },
  {
    id: "accessory_rare_allstat_5",
    name: "올스탯 +5",
    grade: "rare",
    probability: { line1: 5, line2: 1.0000001192, line3: 0.25 },
  },
  // 2-3번째 라인 상속 옵션들
  {
    id: "accessory_rare_inherited_str_6",
    name: "STR +6",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "accessory_rare_inherited_dex_6",
    name: "DEX +6",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "accessory_rare_inherited_int_6",
    name: "INT +6",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "accessory_rare_inherited_luk_6",
    name: "LUK +6",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "accessory_rare_inherited_hp_60",
    name: "최대 HP +60",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "accessory_rare_inherited_mp_60",
    name: "최대 MP +60",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "accessory_rare_inherited_def_60",
    name: "방어력 +60",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },

  // === 에픽 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "accessory_epic_str_6p",
    name: "STR +6%",
    grade: "epic",
    probability: { line1: 14.2857, line2: 2.8571, line3: 0.7143 },
  },
  {
    id: "accessory_epic_dex_6p",
    name: "DEX +6%",
    grade: "epic",
    probability: { line1: 14.2857, line2: 2.8571, line3: 0.7143 },
  },
  {
    id: "accessory_epic_int_6p",
    name: "INT +6%",
    grade: "epic",
    probability: { line1: 14.2857, line2: 2.8571, line3: 0.7143 },
  },
  {
    id: "accessory_epic_luk_6p",
    name: "LUK +6%",
    grade: "epic",
    probability: { line1: 14.2857, line2: 2.8571, line3: 0.7143 },
  },
  {
    id: "accessory_epic_hp_6p",
    name: "최대 HP +6%",
    grade: "epic",
    probability: { line1: 14.2857, line2: 2.8571, line3: 0.7143 },
  },
  {
    id: "accessory_epic_mp_6p",
    name: "최대 MP +6%",
    grade: "epic",
    probability: { line1: 14.2857, line2: 2.8571, line3: 0.7143 },
  },
  {
    id: "accessory_epic_def_6p",
    name: "방어력 +6%",
    grade: "epic",
    probability: { line1: 8.5714, line2: 1.7143, line3: 0.4286 },
  },
  {
    id: "accessory_epic_allstat_3p",
    name: "올스탯 +3%",
    grade: "epic",
    probability: { line1: 5.7143, line2: 1.1429, line3: 0.2857 },
  },
  // 2-3번째 라인 상속 옵션들 (레어 등급)
  {
    id: "accessory_epic_inherited_str_12",
    name: "STR +12",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "accessory_epic_inherited_dex_12",
    name: "DEX +12",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "accessory_epic_inherited_int_12",
    name: "INT +12",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "accessory_epic_inherited_luk_12",
    name: "LUK +12",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "accessory_epic_inherited_hp_120",
    name: "최대 HP +120",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "accessory_epic_inherited_mp_120",
    name: "최대 MP +120",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "accessory_epic_inherited_def_120",
    name: "방어력 +120",
    grade: "epic",
    probability: { line1: 0, line2: 4.0000004768, line3: 4.75 },
  },
  {
    id: "accessory_epic_inherited_str_3p",
    name: "STR +3%",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "accessory_epic_inherited_dex_3p",
    name: "DEX +3%",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "accessory_epic_inherited_int_3p",
    name: "INT +3%",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "accessory_epic_inherited_luk_3p",
    name: "LUK +3%",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "accessory_epic_inherited_hp_3p",
    name: "최대 HP +3%",
    grade: "epic",
    probability: { line1: 0, line2: 4.0000004768, line3: 4.75 },
  },
  {
    id: "accessory_epic_inherited_mp_3p",
    name: "최대 MP +3%",
    grade: "epic",
    probability: { line1: 0, line2: 4.0000004768, line3: 4.75 },
  },
  {
    id: "accessory_epic_inherited_def_3p",
    name: "방어력 +3%",
    grade: "epic",
    probability: { line1: 0, line2: 4.0000004768, line3: 4.75 },
  },
  {
    id: "accessory_epic_inherited_allstat_5",
    name: "올스탯 +5",
    grade: "epic",
    probability: { line1: 0, line2: 4.0000004768, line3: 4.75 },
  },

  // === 유니크 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "accessory_unique_str_9p",
    name: "STR +9%",
    grade: "unique",
    probability: { line1: 12.5, line2: 2.5, line3: 0.625 },
  },
  {
    id: "accessory_unique_dex_9p",
    name: "DEX +9%",
    grade: "unique",
    probability: { line1: 12.5, line2: 2.5, line3: 0.625 },
  },
  {
    id: "accessory_unique_int_9p",
    name: "INT +9%",
    grade: "unique",
    probability: { line1: 12.5, line2: 2.5, line3: 0.625 },
  },
  {
    id: "accessory_unique_luk_9p",
    name: "LUK +9%",
    grade: "unique",
    probability: { line1: 12.5, line2: 2.5, line3: 0.625 },
  },
  {
    id: "accessory_unique_hp_9p",
    name: "최대 HP +9%",
    grade: "unique",
    probability: { line1: 15.0000009537, line2: 3, line3: 0.75 },
  },
  {
    id: "accessory_unique_mp_9p",
    name: "최대 MP +9%",
    grade: "unique",
    probability: { line1: 15.0000009537, line2: 3, line3: 0.75 },
  },
  {
    id: "accessory_unique_allstat_6p",
    name: "올스탯 +6%",
    grade: "unique",
    probability: { line1: 10, line2: 2.0000002384, line3: 0.5 },
  },
  {
    id: "accessory_unique_hp_recovery",
    name: "HP 회복 아이템 및 회복 스킬 +30%",
    grade: "unique",
    probability: { line1: 10, line2: 2.0000002384, line3: 0.5 },
  },
  // 2-3번째 라인 상속 옵션들 (에픽 등급)
  {
    id: "accessory_unique_inherited_str_6p",
    name: "STR +6%",
    grade: "unique",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "accessory_unique_inherited_dex_6p",
    name: "DEX +6%",
    grade: "unique",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "accessory_unique_inherited_int_6p",
    name: "INT +6%",
    grade: "unique",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "accessory_unique_inherited_luk_6p",
    name: "LUK +6%",
    grade: "unique",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "accessory_unique_inherited_hp_6p",
    name: "최대 HP +6%",
    grade: "unique",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "accessory_unique_inherited_mp_6p",
    name: "최대 MP +6%",
    grade: "unique",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "accessory_unique_inherited_def_6p",
    name: "방어력 +6%",
    grade: "unique",
    probability: { line1: 0, line2: 6.8571, line3: 8.1429 },
  },
  {
    id: "accessory_unique_inherited_allstat_3p",
    name: "올스탯 +3%",
    grade: "unique",
    probability: { line1: 0, line2: 4.5714, line3: 5.4286 },
  },

  // === 레전드리 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "accessory_legendary_str_12p",
    name: "STR +12%",
    grade: "legendary",
    probability: { line1: 10.2564, line2: 2.05128, line3: 0.5128 },
  },
  {
    id: "accessory_legendary_dex_12p",
    name: "DEX +12%",
    grade: "legendary",
    probability: { line1: 10.2564, line2: 2.05128, line3: 0.5128 },
  },
  {
    id: "accessory_legendary_int_12p",
    name: "INT +12%",
    grade: "legendary",
    probability: { line1: 10.2564, line2: 2.05128, line3: 0.5128 },
  },
  {
    id: "accessory_legendary_luk_12p",
    name: "LUK +12%",
    grade: "legendary",
    probability: { line1: 10.2564, line2: 2.05128, line3: 0.5128 },
  },
  {
    id: "accessory_legendary_hp_12p",
    name: "최대 HP +12%",
    grade: "legendary",
    probability: { line1: 10.2564, line2: 2.05128, line3: 0.5128 },
  },
  {
    id: "accessory_legendary_mp_12p",
    name: "최대 MP +12%",
    grade: "legendary",
    probability: { line1: 10.2564, line2: 2.05128, line3: 0.5128 },
  },
  {
    id: "accessory_legendary_allstat_9p",
    name: "올스탯 +9%",
    grade: "legendary",
    probability: { line1: 7.6923, line2: 1.5385, line3: 0.3846 },
  },
  {
    id: "accessory_legendary_mp_consume_15p",
    name: "모든 스킬의 MP 소모 -15%",
    grade: "legendary",
    probability: { line1: 7.6923, line2: 1.5385, line3: 0.3846 },
  },
  {
    id: "accessory_legendary_mp_consume_30p",
    name: "모든 스킬의 MP 소모 -30%",
    grade: "legendary",
    probability: { line1: 7.6923, line2: 1.5385, line3: 0.3846 },
  },
  {
    id: "accessory_legendary_meso_20p",
    name: "메소 획득량 +20%",
    grade: "legendary",
    probability: { line1: 7.6923, line2: 1.5385, line3: 0.3846 },
  },
  {
    id: "accessory_legendary_drop_20p",
    name: "아이템 드롭률 +20%",
    grade: "legendary",
    probability: { line1: 7.6923, line2: 1.5385, line3: 0.3846 },
  },
  // 2-3번째 라인 상속 옵션들 (유니크 등급)
  {
    id: "accessory_legendary_inherited_str_9p",
    name: "STR +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 10, line3: 11.875 },
  },
  {
    id: "accessory_legendary_inherited_dex_9p",
    name: "DEX +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 10, line3: 11.875 },
  },
  {
    id: "accessory_legendary_inherited_int_9p",
    name: "INT +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 10, line3: 11.875 },
  },
  {
    id: "accessory_legendary_inherited_luk_9p",
    name: "LUK +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 10, line3: 11.875 },
  },
  {
    id: "accessory_legendary_inherited_hp_9p",
    name: "최대 HP +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 12, line3: 14.25 },
  },
  {
    id: "accessory_legendary_inherited_mp_9p",
    name: "최대 MP +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 12, line3: 14.25 },
  },
  {
    id: "accessory_legendary_inherited_allstat_6p",
    name: "올스탯 +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 8.0000009537, line3: 9.5 },
  },
  {
    id: "accessory_legendary_inherited_hp_recovery",
    name: "HP 회복 아이템 및 회복 스킬 +30%",
    grade: "legendary",
    probability: { line1: 0, line2: 8.0000009537, line3: 9.5 },
  },
];

// 상의 잠재능력 옵션 데이터 (150레벨 기준)
export const TOP_POTENTIAL_OPTIONS: PotentialOptionData[] = [
  // === 레어 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "top_rare_str_12",
    name: "STR +12",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "top_rare_dex_12",
    name: "DEX +12",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "top_rare_int_12",
    name: "INT +12",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "top_rare_luk_12",
    name: "LUK +12",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "top_rare_hp_120",
    name: "최대 HP +120",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "top_rare_mp_120",
    name: "최대 MP +120",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "top_rare_def_120",
    name: "방어력 +120",
    grade: "rare",
    probability: { line1: 5, line2: 1, line3: 0.25 },
  },
  {
    id: "top_rare_str_3p",
    name: "STR +3%",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "top_rare_dex_3p",
    name: "DEX +3%",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "top_rare_int_3p",
    name: "INT +3%",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "top_rare_luk_3p",
    name: "LUK +3%",
    grade: "rare",
    probability: { line1: 7.5, line2: 1.5, line3: 0.375 },
  },
  {
    id: "top_rare_hp_3p",
    name: "최대 HP +3%",
    grade: "rare",
    probability: { line1: 5, line2: 1, line3: 0.25 },
  },
  {
    id: "top_rare_mp_3p",
    name: "최대 MP +3%",
    grade: "rare",
    probability: { line1: 5, line2: 1, line3: 0.25 },
  },
  {
    id: "top_rare_def_3p",
    name: "방어력 +3%",
    grade: "rare",
    probability: { line1: 5, line2: 1, line3: 0.25 },
  },
  {
    id: "top_rare_allstat_5",
    name: "올스탯 +5",
    grade: "rare",
    probability: { line1: 5, line2: 1, line3: 0.25 },
  },
  // 2-3번째 라인 상속 옵션들
  {
    id: "top_rare_inherited_str_6",
    name: "STR +6",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "top_rare_inherited_dex_6",
    name: "DEX +6",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "top_rare_inherited_int_6",
    name: "INT +6",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "top_rare_inherited_luk_6",
    name: "LUK +6",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "top_rare_inherited_hp_60",
    name: "최대 HP +60",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "top_rare_inherited_mp_60",
    name: "최대 MP +60",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },
  {
    id: "top_rare_inherited_def_60",
    name: "방어력 +60",
    grade: "rare",
    probability: { line1: 0, line2: 11.4286, line3: 13.5714 },
  },

  // === 에픽 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "top_epic_str_6p",
    name: "STR +6%",
    grade: "epic",
    probability: { line1: 13.1579, line2: 2.6316, line3: 0.6579 },
  },
  {
    id: "top_epic_dex_6p",
    name: "DEX +6%",
    grade: "epic",
    probability: { line1: 13.1579, line2: 2.6316, line3: 0.6579 },
  },
  {
    id: "top_epic_int_6p",
    name: "INT +6%",
    grade: "epic",
    probability: { line1: 13.1579, line2: 2.6316, line3: 0.6579 },
  },
  {
    id: "top_epic_luk_6p",
    name: "LUK +6%",
    grade: "epic",
    probability: { line1: 13.1579, line2: 2.6316, line3: 0.6579 },
  },
  {
    id: "top_epic_hp_6p",
    name: "최대 HP +6%",
    grade: "epic",
    probability: { line1: 13.1579, line2: 2.6316, line3: 0.6579 },
  },
  {
    id: "top_epic_mp_6p",
    name: "최대 MP +6%",
    grade: "epic",
    probability: { line1: 13.1579, line2: 2.6316, line3: 0.6579 },
  },
  {
    id: "top_epic_def_6p",
    name: "방어력 +6%",
    grade: "epic",
    probability: { line1: 7.8947, line2: 1.5789, line3: 0.3947 },
  },
  {
    id: "top_epic_allstat_3p",
    name: "올스탯 +3%",
    grade: "epic",
    probability: { line1: 5.2632, line2: 1.05263, line3: 0.2632 },
  },
  {
    id: "top_epic_invincible_1s",
    name: "피격 후 무적시간 +1초",
    grade: "epic",
    probability: { line1: 7.8947, line2: 1.5789, line3: 0.3947 },
  },
  // 2-3번째 라인 상속 옵션들 (레어 등급)
  {
    id: "top_epic_inherited_str_12",
    name: "STR +12",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "top_epic_inherited_dex_12",
    name: "DEX +12",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "top_epic_inherited_int_12",
    name: "INT +12",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "top_epic_inherited_luk_12",
    name: "LUK +12",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "top_epic_inherited_hp_120",
    name: "최대 HP +120",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "top_epic_inherited_mp_120",
    name: "최대 MP +120",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "top_epic_inherited_def_120",
    name: "방어력 +120",
    grade: "epic",
    probability: { line1: 0, line2: 4, line3: 4.75 },
  },
  {
    id: "top_epic_inherited_str_3p",
    name: "STR +3%",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "top_epic_inherited_dex_3p",
    name: "DEX +3%",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "top_epic_inherited_int_3p",
    name: "INT +3%",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "top_epic_inherited_luk_3p",
    name: "LUK +3%",
    grade: "epic",
    probability: { line1: 0, line2: 6, line3: 7.125 },
  },
  {
    id: "top_epic_inherited_hp_3p",
    name: "최대 HP +3%",
    grade: "epic",
    probability: { line1: 0, line2: 4, line3: 4.75 },
  },
  {
    id: "top_epic_inherited_mp_3p",
    name: "최대 MP +3%",
    grade: "epic",
    probability: { line1: 0, line2: 4, line3: 4.75 },
  },
  {
    id: "top_epic_inherited_def_3p",
    name: "방어력 +3%",
    grade: "epic",
    probability: { line1: 0, line2: 4, line3: 4.75 },
  },
  {
    id: "top_epic_inherited_allstat_5",
    name: "올스탯 +5",
    grade: "epic",
    probability: { line1: 0, line2: 4, line3: 4.75 },
  },

  // === 유니크 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "top_unique_str_9p",
    name: "STR +9%",
    grade: "unique",
    probability: { line1: 8.06452, line2: 1.6129, line3: 0.4032 },
  },
  {
    id: "top_unique_dex_9p",
    name: "DEX +9%",
    grade: "unique",
    probability: { line1: 8.06452, line2: 1.6129, line3: 0.4032 },
  },
  {
    id: "top_unique_int_9p",
    name: "INT +9%",
    grade: "unique",
    probability: { line1: 8.06452, line2: 1.6129, line3: 0.4032 },
  },
  {
    id: "top_unique_luk_9p",
    name: "LUK +9%",
    grade: "unique",
    probability: { line1: 8.06452, line2: 1.6129, line3: 0.4032 },
  },
  {
    id: "top_unique_hp_9p",
    name: "최대 HP +9%",
    grade: "unique",
    probability: { line1: 9.6774, line2: 1.9355, line3: 0.4839 },
  },
  {
    id: "top_unique_mp_9p",
    name: "최대 MP +9%",
    grade: "unique",
    probability: { line1: 9.6774, line2: 1.9355, line3: 0.4839 },
  },
  {
    id: "top_unique_allstat_6p",
    name: "올스탯 +6%",
    grade: "unique",
    probability: { line1: 6.4516, line2: 1.2903, line3: 0.3226 },
  },
  {
    id: "top_unique_damage_ignore_20p",
    name: "피격 시 5% 확률로 데미지의 20% 무시",
    grade: "unique",
    probability: { line1: 6.4516, line2: 1.2903, line3: 0.3226 },
  },
  {
    id: "top_unique_damage_ignore_40p",
    name: "피격 시 5% 확률로 데미지의 40% 무시",
    grade: "unique",
    probability: { line1: 6.4516, line2: 1.2903, line3: 0.3226 },
  },
  {
    id: "top_unique_invincible_2s",
    name: "피격 후 무적시간 +2초",
    grade: "unique",
    probability: { line1: 6.4516, line2: 1.2903, line3: 0.3226 },
  },
  {
    id: "top_unique_invincible_7s",
    name: "피격 시 2% 확률로 7초간 무적",
    grade: "unique",
    probability: { line1: 6.4516, line2: 1.2903, line3: 0.3226 },
  },
  {
    id: "top_unique_reflect_50p",
    name: "30% 확률로 받은 피해 50% 반사",
    grade: "unique",
    probability: { line1: 6.4516, line2: 1.2903, line3: 0.3226 },
  },
  {
    id: "top_unique_reflect_70p",
    name: "30% 확률로 받은 피해 70% 반사",
    grade: "unique",
    probability: { line1: 3.2258, line2: 0.6452, line3: 0.1613 },
  },
  {
    id: "top_unique_hp_recovery",
    name: "HP 회복 아이템 및 회복 스킬 효율 +30%",
    grade: "unique",
    probability: { line1: 6.4516, line2: 1.2903, line3: 0.3226 },
  },
  // 2-3번째 라인 상속 옵션들 (에픽 등급)
  {
    id: "top_unique_inherited_str_6p",
    name: "STR +6%",
    grade: "unique",
    probability: { line1: 0, line2: 10.5263, line3: 12.5 },
  },
  {
    id: "top_unique_inherited_dex_6p",
    name: "DEX +6%",
    grade: "unique",
    probability: { line1: 0, line2: 10.5263, line3: 12.5 },
  },
  {
    id: "top_unique_inherited_int_6p",
    name: "INT +6%",
    grade: "unique",
    probability: { line1: 0, line2: 10.5263, line3: 12.5 },
  },
  {
    id: "top_unique_inherited_luk_6p",
    name: "LUK +6%",
    grade: "unique",
    probability: { line1: 0, line2: 10.5263, line3: 12.5 },
  },
  {
    id: "top_unique_inherited_hp_6p",
    name: "최대 HP +6%",
    grade: "unique",
    probability: { line1: 0, line2: 10.5263, line3: 12.5 },
  },
  {
    id: "top_unique_inherited_mp_6p",
    name: "최대 MP +6%",
    grade: "unique",
    probability: { line1: 0, line2: 10.5263, line3: 12.5 },
  },
  {
    id: "top_unique_inherited_def_6p",
    name: "방어력 +6%",
    grade: "unique",
    probability: { line1: 0, line2: 6.3158, line3: 7.5 },
  },
  {
    id: "top_unique_inherited_allstat_3p",
    name: "올스탯 +3%",
    grade: "unique",
    probability: { line1: 0, line2: 4.2105, line3: 5 },
  },
  {
    id: "top_unique_inherited_invincible_1s",
    name: "피격 후 무적시간 +1초",
    grade: "unique",
    probability: { line1: 0, line2: 6.3158, line3: 7.5 },
  },

  // === 레전드리 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "top_legendary_str_12p",
    name: "STR +12%",
    grade: "legendary",
    probability: { line1: 10.2564, line2: 2.05128, line3: 0.5128 },
  },
  {
    id: "top_legendary_dex_12p",
    name: "DEX +12%",
    grade: "legendary",
    probability: { line1: 10.2564, line2: 2.05128, line3: 0.5128 },
  },
  {
    id: "top_legendary_int_12p",
    name: "INT +12%",
    grade: "legendary",
    probability: { line1: 10.2564, line2: 2.05128, line3: 0.5128 },
  },
  {
    id: "top_legendary_luk_12p",
    name: "LUK +12%",
    grade: "legendary",
    probability: { line1: 10.2564, line2: 2.05128, line3: 0.5128 },
  },
  {
    id: "top_legendary_hp_12p",
    name: "최대 HP +12%",
    grade: "legendary",
    probability: { line1: 10.2564, line2: 2.05128, line3: 0.5128 },
  },
  {
    id: "top_legendary_mp_12p",
    name: "최대 MP +12%",
    grade: "legendary",
    probability: { line1: 10.2564, line2: 2.05128, line3: 0.5128 },
  },
  {
    id: "top_legendary_allstat_9p",
    name: "올스탯 +9%",
    grade: "legendary",
    probability: { line1: 7.6923, line2: 1.5385, line3: 0.3846 },
  },
  {
    id: "top_legendary_damage_ignore_20p_10",
    name: "피격 시 10% 확률로 데미지의 20% 무시",
    grade: "legendary",
    probability: { line1: 7.6923, line2: 1.5385, line3: 0.3846 },
  },
  {
    id: "top_legendary_damage_ignore_40p_10",
    name: "피격 시 10% 확률로 데미지의 40% 무시",
    grade: "legendary",
    probability: { line1: 7.6923, line2: 1.5385, line3: 0.3846 },
  },
  {
    id: "top_legendary_invincible_3s",
    name: "피격 후 무적시간 +3초",
    grade: "legendary",
    probability: { line1: 7.6923, line2: 1.5385, line3: 0.3846 },
  },
  {
    id: "top_legendary_invincible_7s_4",
    name: "피격 시 4% 확률로 7초간 무적",
    grade: "legendary",
    probability: { line1: 7.6923, line2: 1.5385, line3: 0.3846 },
  },
  // 2-3번째 라인 상속 옵션들 (유니크 등급)
  {
    id: "top_legendary_inherited_str_9p",
    name: "STR +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.4516, line3: 7.6613 },
  },
  {
    id: "top_legendary_inherited_dex_9p",
    name: "DEX +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.4516, line3: 7.6613 },
  },
  {
    id: "top_legendary_inherited_int_9p",
    name: "INT +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.4516, line3: 7.6613 },
  },
  {
    id: "top_legendary_inherited_luk_9p",
    name: "LUK +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.4516, line3: 7.6613 },
  },
  {
    id: "top_legendary_inherited_hp_9p",
    name: "최대 HP +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.7419, line3: 9.1935 },
  },
  {
    id: "top_legendary_inherited_mp_9p",
    name: "최대 MP +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.7419, line3: 9.1935 },
  },
  {
    id: "top_legendary_inherited_allstat_6p",
    name: "올스탯 +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 5.1613, line3: 6.129 },
  },
  {
    id: "top_legendary_inherited_hp_recovery",
    name: "HP 회복 아이템 및 회복 스킬 효율 +30%",
    grade: "legendary",
    probability: { line1: 0, line2: 5.1613, line3: 6.129 },
  },
  // 에디셔널에서 상속된 옵션들 (레전드리 등급에서 에디셔널에서 빌려옴)
  {
    id: "top_legendary_inherited_str_18",
    name: "STR +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "top_legendary_inherited_dex_18",
    name: "DEX +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "top_legendary_inherited_int_18",
    name: "INT +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "top_legendary_inherited_luk_18",
    name: "LUK +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "top_legendary_inherited_hp_300",
    name: "최대 HP +300",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "top_legendary_inherited_mp_300",
    name: "최대 MP +300",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "top_legendary_inherited_att_14",
    name: "공격력 +14",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_legendary_inherited_matt_14",
    name: "마력 +14",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_legendary_inherited_str_6p",
    name: "STR +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_legendary_inherited_dex_6p",
    name: "DEX +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_legendary_inherited_int_6p",
    name: "INT +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_legendary_inherited_luk_6p",
    name: "LUK +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_legendary_inherited_hp_8p",
    name: "최대 HP +8%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "top_legendary_inherited_mp_8p",
    name: "최대 MP +8%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "top_legendary_inherited_allstat_5p",
    name: "올스탯 +5%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_legendary_inherited_str_lv9_1",
    name: "캐릭터 기준 9레벨 당 STR +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_legendary_inherited_dex_lv9_1",
    name: "캐릭터 기준 9레벨 당 DEX +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_legendary_inherited_int_lv9_1",
    name: "캐릭터 기준 9레벨 당 INT +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_legendary_inherited_luk_lv9_1",
    name: "캐릭터 기준 9레벨 당 LUK +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_legendary_inherited_hp_recovery_20p",
    name: "HP 회복 아이템 및 회복 스킬 효율 +20%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
];

// 하위 호환성을 위한 기본 옵션 (무기 옵션을 기본으로 사용)
export const POTENTIAL_OPTIONS = WEAPON_POTENTIAL_OPTIONS;

// 카테고리별 잠재능력 옵션 조회 함수
export const getPotentialOptionsByCategory = (
  category: ItemCategory
): PotentialOptionData[] => {
  switch (category) {
    case "weapon":
      return WEAPON_POTENTIAL_OPTIONS;
    case "hat":
      return HAT_POTENTIAL_OPTIONS;
    case "glove":
      return GLOVE_POTENTIAL_OPTIONS;
    case "accessory":
      return ACCESSORY_POTENTIAL_OPTIONS;
    case "top":
      return TOP_POTENTIAL_OPTIONS;
    default:
      // 기본값으로 무기 옵션 사용
      return WEAPON_POTENTIAL_OPTIONS;
  }
};

// 등급별 옵션 필터링 함수 (기존 방식)
export const getOptionsByGrade = (grade: string, category?: ItemCategory) => {
  const options = category
    ? getPotentialOptionsByCategory(category)
    : POTENTIAL_OPTIONS;
  return options.filter((option) => option.grade === grade);
};

// line1 확률 기준으로 현재 등급/하위 등급 옵션 구분 함수
export const getPotentialOptionsByGradeAndType = (
  grade: string,
  includeInheritedOptions: boolean = true,
  category?: ItemCategory
) => {
  const options = category
    ? getPotentialOptionsByCategory(category)
    : POTENTIAL_OPTIONS;
  const gradeOptions = options.filter((option) => option.grade === grade);

  if (includeInheritedOptions) {
    // 모든 옵션 반환 (현재 등급 + 하위 등급 상속)
    return gradeOptions;
  } else {
    // line1이 0보다 큰 옵션만 반환 (현재 등급 고유 옵션)
    return gradeOptions.filter((option) => option.probability.line1 > 0);
  }
};

// 현재 등급 고유 옵션만 가져오는 함수
export const getCurrentGradePotentialOptions = (
  grade: string,
  category?: ItemCategory
) => {
  return getPotentialOptionsByGradeAndType(grade, false, category);
};

// 하위 등급에서 상속된 옵션만 가져오는 함수
export const getInheritedPotentialOptions = (
  grade: string,
  category?: ItemCategory
) => {
  const options = category
    ? getPotentialOptionsByCategory(category)
    : POTENTIAL_OPTIONS;
  return options.filter(
    (option) => option.grade === grade && option.probability.line1 === 0
  );
};

// 라인별 가중치 적용 함수 (기존 방식)
export const getWeightedOptions = (
  grade: string,
  lineNumber: 1 | 2 | 3,
  category?: ItemCategory
) => {
  const options = getOptionsByGrade(grade, category);
  const lineKey =
    `line${lineNumber}` as keyof PotentialOptionData["probability"];

  return options.map((option) => ({
    ...option,
    weight: option.probability[lineKey],
  }));
};

// 라인별 가중치 적용 함수 (옵션 타입 구분 방식)
export const getWeightedPotentialOptionsByType = (
  grade: string,
  lineNumber: 1 | 2 | 3,
  includeInheritedOptions: boolean = true,
  category?: ItemCategory
) => {
  const options = getPotentialOptionsByGradeAndType(
    grade,
    includeInheritedOptions,
    category
  );
  const lineKey =
    `line${lineNumber}` as keyof PotentialOptionData["probability"];

  return options
    .map((option) => ({
      ...option,
      weight: option.probability[lineKey],
    }))
    .filter((option) => option.weight > 0); // 가중치가 0인 옵션 제외
};

// 옵션이 현재 등급 고유 옵션인지 확인하는 헬퍼 함수 (UI 색상 구분용)
export const isPotentialCurrentGradeOption = (
  option: PotentialOptionData
): boolean => {
  return option.probability.line1 > 0;
};

// 옵션이 하위 등급에서 상속된 옵션인지 확인하는 헬퍼 함수 (UI 색상 구분용)
export const isPotentialInheritedOption = (
  option: PotentialOptionData
): boolean => {
  return option.probability.line1 === 0;
};
