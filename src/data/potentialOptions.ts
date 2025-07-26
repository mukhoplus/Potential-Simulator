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

// 하위 호환성을 위한 기본 옵션 (무기 옵션을 기본으로 사용)
export const POTENTIAL_OPTIONS = WEAPON_POTENTIAL_OPTIONS;

// 카테고리별 잠재능력 옵션 조회 함수
export const getPotentialOptionsByCategory = (
  category: ItemCategory
): PotentialOptionData[] => {
  // 현재는 무기 옵션만 구현되어 있음
  // 향후 다른 카테고리 옵션들을 추가할 예정
  switch (category) {
    case "weapon":
      return WEAPON_POTENTIAL_OPTIONS;
    case "hat":
    case "glove":
    case "accessory":
    case "top":
    default:
      // 임시로 무기 옵션 사용 (추후 각 카테고리별 옵션으로 교체 예정)
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
