import { PotentialOptionData } from "../types/potential";
import { ItemCategory } from "../types/potential";

// 에디셔널 잠재능력 옵션 데이터 (모자 150레벨 기준)
export const HAT_ADDITIONAL_OPTIONS: PotentialOptionData[] = [
  // === 레어 등급 옵션 ===
  // 첫 번째 라인 옵션들
  {
    id: "hat_addi_rare_str_10",
    name: "STR +10",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "hat_addi_rare_dex_10",
    name: "DEX +10",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "hat_addi_rare_int_10",
    name: "INT +10",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "hat_addi_rare_luk_10",
    name: "LUK +10",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "hat_addi_rare_hp_100",
    name: "최대 HP +100",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "hat_addi_rare_mp_100",
    name: "최대 MP +100",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "hat_addi_rare_speed_6",
    name: "이동속도 +6",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "hat_addi_rare_jump_6",
    name: "점프력 +6",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "hat_addi_rare_att_10",
    name: "공격력 +10",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "hat_addi_rare_matt_10",
    name: "마력 +10",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "hat_addi_rare_def_100",
    name: "방어력 +100",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "hat_addi_rare_str_2p",
    name: "STR +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "hat_addi_rare_dex_2p",
    name: "DEX +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "hat_addi_rare_int_2p",
    name: "INT +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "hat_addi_rare_luk_2p",
    name: "LUK +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "hat_addi_rare_hp_2p",
    name: "최대 HP +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "hat_addi_rare_mp_2p",
    name: "최대 MP +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "hat_addi_rare_def_2p",
    name: "방어력 +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "hat_addi_rare_allstat_3",
    name: "올스탯 +3",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },

  // 2,3번째 라인 전용 레어 옵션들
  {
    id: "hat_addi_rare_str_6",
    name: "STR +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "hat_addi_rare_dex_6",
    name: "DEX +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "hat_addi_rare_int_6",
    name: "INT +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "hat_addi_rare_luk_6",
    name: "LUK +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "hat_addi_rare_hp_60",
    name: "최대 HP +60",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "hat_addi_rare_mp_60",
    name: "최대 MP +60",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "hat_addi_rare_speed_4",
    name: "이동속도 +4",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "hat_addi_rare_jump_4",
    name: "점프력 +4",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "hat_addi_rare_att_3",
    name: "공격력 +3",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "hat_addi_rare_matt_3",
    name: "마력 +3",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "hat_addi_rare_def_60",
    name: "방어력 +60",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },

  // === 에픽 등급 옵션 ===
  // 첫 번째 라인 옵션들
  {
    id: "hat_addi_epic_str_14",
    name: "STR +14",
    grade: "epic",
    probability: { line1: 6.0, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "hat_addi_epic_dex_14",
    name: "DEX +14",
    grade: "epic",
    probability: { line1: 6.0, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "hat_addi_epic_int_14",
    name: "INT +14",
    grade: "epic",
    probability: { line1: 6.0, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "hat_addi_epic_luk_14",
    name: "LUK +14",
    grade: "epic",
    probability: { line1: 6.0, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "hat_addi_epic_hp_180",
    name: "최대 HP +180",
    grade: "epic",
    probability: { line1: 6.0, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "hat_addi_epic_mp_180",
    name: "최대 MP +180",
    grade: "epic",
    probability: { line1: 6.0, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "hat_addi_epic_speed_8",
    name: "이동속도 +8",
    grade: "epic",
    probability: { line1: 6.0, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "hat_addi_epic_jump_8",
    name: "점프력 +8",
    grade: "epic",
    probability: { line1: 6.0, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "hat_addi_epic_att_11",
    name: "공격력 +11",
    grade: "epic",
    probability: { line1: 4.0, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "hat_addi_epic_matt_11",
    name: "마력 +11",
    grade: "epic",
    probability: { line1: 4.0, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "hat_addi_epic_def_120",
    name: "방어력 +120",
    grade: "epic",
    probability: { line1: 6.0, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "hat_addi_epic_str_4p",
    name: "STR +4%",
    grade: "epic",
    probability: { line1: 4.0, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "hat_addi_epic_dex_4p",
    name: "DEX +4%",
    grade: "epic",
    probability: { line1: 4.0, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "hat_addi_epic_int_4p",
    name: "INT +4%",
    grade: "epic",
    probability: { line1: 4.0, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "hat_addi_epic_luk_4p",
    name: "LUK +4%",
    grade: "epic",
    probability: { line1: 4.0, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "hat_addi_epic_hp_5p",
    name: "최대 HP +5%",
    grade: "epic",
    probability: { line1: 6.0, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "hat_addi_epic_mp_5p",
    name: "최대 MP +5%",
    grade: "epic",
    probability: { line1: 6.0, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "hat_addi_epic_def_4p",
    name: "방어력 +4%",
    grade: "epic",
    probability: { line1: 6.0, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "hat_addi_epic_allstat_2p",
    name: "올스탯 +2%",
    grade: "epic",
    probability: { line1: 4.0, line2: 0.1905, line3: 0.1905 },
  },

  // 2,3번째 라인 에픽 옵션들 (레어 등급 옵션들 포함)
  {
    id: "hat_addi_epic_rare_str_10",
    name: "STR +10",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "hat_addi_epic_rare_dex_10",
    name: "DEX +10",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "hat_addi_epic_rare_int_10",
    name: "INT +10",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "hat_addi_epic_rare_luk_10",
    name: "LUK +10",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "hat_addi_epic_rare_hp_100",
    name: "최대 HP +100",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "hat_addi_epic_rare_mp_100",
    name: "최대 MP +100",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "hat_addi_epic_rare_speed_6",
    name: "이동속도 +6",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "hat_addi_epic_rare_jump_6",
    name: "점프력 +6",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "hat_addi_epic_rare_att_10",
    name: "공격력 +10",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "hat_addi_epic_rare_matt_10",
    name: "마력 +10",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "hat_addi_epic_rare_def_100",
    name: "방어력 +100",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "hat_addi_epic_rare_str_2p",
    name: "STR +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "hat_addi_epic_rare_dex_2p",
    name: "DEX +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "hat_addi_epic_rare_int_2p",
    name: "INT +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "hat_addi_epic_rare_luk_2p",
    name: "LUK +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "hat_addi_epic_rare_hp_2p",
    name: "최대 HP +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "hat_addi_epic_rare_mp_2p",
    name: "최대 MP +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "hat_addi_epic_rare_def_2p",
    name: "방어력 +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "hat_addi_epic_rare_allstat_3",
    name: "올스탯 +3",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },

  // === 유니크 등급 옵션 ===
  // 첫 번째 라인 옵션들
  {
    id: "hat_addi_unique_str_18",
    name: "STR +18",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "hat_addi_unique_dex_18",
    name: "DEX +18",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "hat_addi_unique_int_18",
    name: "INT +18",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "hat_addi_unique_luk_18",
    name: "LUK +18",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "hat_addi_unique_hp_300",
    name: "최대 HP +300",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "hat_addi_unique_mp_300",
    name: "최대 MP +300",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "hat_addi_unique_att_14",
    name: "공격력 +14",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "hat_addi_unique_matt_14",
    name: "마력 +14",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "hat_addi_unique_str_6p",
    name: "STR +6%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "hat_addi_unique_dex_6p",
    name: "DEX +6%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "hat_addi_unique_int_6p",
    name: "INT +6%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "hat_addi_unique_luk_6p",
    name: "LUK +6%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "hat_addi_unique_hp_8p",
    name: "최대 HP +8%",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "hat_addi_unique_mp_8p",
    name: "최대 MP +8%",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "hat_addi_unique_allstat_5p",
    name: "올스탯 +5%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "hat_addi_unique_str_per_level",
    name: "캐릭터 기준 9레벨 당 STR +1",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "hat_addi_unique_dex_per_level",
    name: "캐릭터 기준 9레벨 당 DEX +1",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "hat_addi_unique_int_per_level",
    name: "캐릭터 기준 9레벨 당 INT +1",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "hat_addi_unique_luk_per_level",
    name: "캐릭터 기준 9레벨 당 LUK +1",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "hat_addi_unique_recovery_20p",
    name: "HP 회복 아이템 및 회복 스킬 효율 +20%",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },

  // 2,3번째 라인 유니크 옵션들 (에픽 등급 옵션들 포함)
  {
    id: "hat_addi_unique_epic_str_14",
    name: "STR +14",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "hat_addi_unique_epic_dex_14",
    name: "DEX +14",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "hat_addi_unique_epic_int_14",
    name: "INT +14",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "hat_addi_unique_epic_luk_14",
    name: "LUK +14",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "hat_addi_unique_epic_hp_180",
    name: "최대 HP +180",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "hat_addi_unique_epic_mp_180",
    name: "최대 MP +180",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "hat_addi_unique_epic_speed_8",
    name: "이동속도 +8",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "hat_addi_unique_epic_jump_8",
    name: "점프력 +8",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "hat_addi_unique_epic_att_11",
    name: "공격력 +11",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "hat_addi_unique_epic_matt_11",
    name: "마력 +11",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "hat_addi_unique_epic_def_120",
    name: "방어력 +120",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "hat_addi_unique_epic_str_4p",
    name: "STR +4%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "hat_addi_unique_epic_dex_4p",
    name: "DEX +4%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "hat_addi_unique_epic_int_4p",
    name: "INT +4%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "hat_addi_unique_epic_luk_4p",
    name: "LUK +4%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "hat_addi_unique_epic_hp_5p",
    name: "최대 HP +5%",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "hat_addi_unique_epic_mp_5p",
    name: "최대 MP +5%",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "hat_addi_unique_epic_def_4p",
    name: "방어력 +4%",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "hat_addi_unique_epic_allstat_2p",
    name: "올스탯 +2%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },

  // === 레전드리 등급 옵션 ===
  // 첫 번째 라인 옵션들
  {
    id: "hat_addi_legendary_str_20",
    name: "STR +20",
    grade: "legendary",
    probability: { line1: 5.0, line2: 0.02488, line3: 0.02488 },
  },
  {
    id: "hat_addi_legendary_dex_20",
    name: "DEX +20",
    grade: "legendary",
    probability: { line1: 5.0, line2: 0.02488, line3: 0.02488 },
  },
  {
    id: "hat_addi_legendary_int_20",
    name: "INT +20",
    grade: "legendary",
    probability: { line1: 5.0, line2: 0.02488, line3: 0.02488 },
  },
  {
    id: "hat_addi_legendary_luk_20",
    name: "LUK +20",
    grade: "legendary",
    probability: { line1: 5.0, line2: 0.02488, line3: 0.02488 },
  },
  {
    id: "hat_addi_legendary_hp_360",
    name: "최대 HP +360",
    grade: "legendary",
    probability: { line1: 5.0, line2: 0.02488, line3: 0.02488 },
  },
  {
    id: "hat_addi_legendary_mp_360",
    name: "최대 MP +360",
    grade: "legendary",
    probability: { line1: 5.0, line2: 0.02488, line3: 0.02488 },
  },
  {
    id: "hat_addi_legendary_att_16",
    name: "공격력 +16",
    grade: "legendary",
    probability: { line1: 3.3333, line2: 0.01658, line3: 0.01658 },
  },
  {
    id: "hat_addi_legendary_matt_16",
    name: "마력 +16",
    grade: "legendary",
    probability: { line1: 3.3333, line2: 0.01658, line3: 0.01658 },
  },
  {
    id: "hat_addi_legendary_str_8p",
    name: "STR +8%",
    grade: "legendary",
    probability: { line1: 3.3333, line2: 0.01658, line3: 0.01658 },
  },
  {
    id: "hat_addi_legendary_dex_8p",
    name: "DEX +8%",
    grade: "legendary",
    probability: { line1: 3.3333, line2: 0.01658, line3: 0.01658 },
  },
  {
    id: "hat_addi_legendary_int_8p",
    name: "INT +8%",
    grade: "legendary",
    probability: { line1: 3.3333, line2: 0.01658, line3: 0.01658 },
  },
  {
    id: "hat_addi_legendary_luk_8p",
    name: "LUK +8%",
    grade: "legendary",
    probability: { line1: 3.3333, line2: 0.01658, line3: 0.01658 },
  },
  {
    id: "hat_addi_legendary_hp_11p",
    name: "최대 HP +11%",
    grade: "legendary",
    probability: { line1: 5.0, line2: 0.02488, line3: 0.02488 },
  },
  {
    id: "hat_addi_legendary_mp_11p",
    name: "최대 MP +11%",
    grade: "legendary",
    probability: { line1: 5.0, line2: 0.02488, line3: 0.02488 },
  },
  {
    id: "hat_addi_legendary_crit_1p",
    name: "크리티컬 데미지 +1%",
    grade: "legendary",
    probability: { line1: 3.3333, line2: 0.01658, line3: 0.01658 },
  },
  {
    id: "hat_addi_legendary_allstat_6p",
    name: "올스탯 +6%",
    grade: "legendary",
    probability: { line1: 3.3333, line2: 0.01658, line3: 0.01658 },
  },
  {
    id: "hat_addi_legendary_str_per_level_2",
    name: "캐릭터 기준 9레벨 당 STR +2",
    grade: "legendary",
    probability: { line1: 3.3333, line2: 0.01658, line3: 0.01658 },
  },
  {
    id: "hat_addi_legendary_dex_per_level_2",
    name: "캐릭터 기준 9레벤 당 DEX +2",
    grade: "legendary",
    probability: { line1: 3.3333, line2: 0.01658, line3: 0.01658 },
  },
  {
    id: "hat_addi_legendary_int_per_level_2",
    name: "캐릭터 기준 9레벨 당 INT +2",
    grade: "legendary",
    probability: { line1: 3.3333, line2: 0.01658, line3: 0.01658 },
  },
  {
    id: "hat_addi_legendary_luk_per_level_2",
    name: "캐릭터 기준 9레벨 당 LUK +2",
    grade: "legendary",
    probability: { line1: 3.3333, line2: 0.01658, line3: 0.01658 },
  },
  {
    id: "hat_addi_legendary_recovery_30p",
    name: "HP 회복 아이템 및 회복 스킬 효율 +30%",
    grade: "legendary",
    probability: { line1: 5.0, line2: 0.02488, line3: 0.02488 },
  },
  {
    id: "hat_addi_legendary_cooldown_1s",
    name: "스킬 재사용 대기시간 -1초",
    grade: "legendary",
    probability: { line1: 5.0, line2: 0.02488, line3: 0.02488 },
  },
  {
    id: "hat_addi_legendary_meso_5p",
    name: "메소 획득량 +5%",
    grade: "legendary",
    probability: { line1: 5.0, line2: 0.02488, line3: 0.02488 },
  },
  {
    id: "hat_addi_legendary_drop_5p",
    name: "아이템 드롭률 +5%",
    grade: "legendary",
    probability: { line1: 5.0, line2: 0.02488, line3: 0.02488 },
  },

  // 2,3번째 라인 레전드리 옵션들 (유니크 등급 옵션들 포함)
  {
    id: "hat_addi_legendary_unique_str_18",
    name: "STR +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "hat_addi_legendary_unique_dex_18",
    name: "DEX +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "hat_addi_legendary_unique_int_18",
    name: "INT +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "hat_addi_legendary_unique_luk_18",
    name: "LUK +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "hat_addi_legendary_unique_hp_300",
    name: "최대 HP +300",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "hat_addi_legendary_unique_mp_300",
    name: "최대 MP +300",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "hat_addi_legendary_unique_att_14",
    name: "공격력 +14",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "hat_addi_legendary_unique_matt_14",
    name: "마력 +14",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "hat_addi_legendary_unique_str_6p",
    name: "STR +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "hat_addi_legendary_unique_dex_6p",
    name: "DEX +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "hat_addi_legendary_unique_int_6p",
    name: "INT +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "hat_addi_legendary_unique_luk_6p",
    name: "LUK +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "hat_addi_legendary_unique_hp_8p",
    name: "최대 HP +8%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "hat_addi_legendary_unique_mp_8p",
    name: "최대 MP +8%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "hat_addi_legendary_unique_allstat_5p",
    name: "올스탯 +5%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "hat_addi_legendary_unique_str_per_level",
    name: "캐릭터 기준 9레벨 당 STR +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "hat_addi_legendary_unique_dex_per_level",
    name: "캐릭터 기준 9레벨 당 DEX +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "hat_addi_legendary_unique_int_per_level",
    name: "캐릭터 기준 9레벨 당 INT +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "hat_addi_legendary_unique_luk_per_level",
    name: "캐릭터 기준 9레벨 당 LUK +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "hat_addi_legendary_unique_recovery_20p",
    name: "HP 회복 아이템 및 회복 스킬 효율 +20%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
];

// 장갑 에디셔널 잠재능력 옵션 데이터 (200레벨 기준)
export const GLOVE_ADDITIONAL_OPTIONS: PotentialOptionData[] = [
  // === 레어 등급 옵션 ===
  // 첫 번째 라인 옵션들
  {
    id: "glove_addi_rare_str_10",
    name: "STR +10",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "glove_addi_rare_dex_10",
    name: "DEX +10",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "glove_addi_rare_int_10",
    name: "INT +10",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "glove_addi_rare_luk_10",
    name: "LUK +10",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "glove_addi_rare_hp_100",
    name: "최대 HP +100",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "glove_addi_rare_mp_100",
    name: "최대 MP +100",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "glove_addi_rare_speed_6",
    name: "이동속도 +6",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "glove_addi_rare_jump_6",
    name: "점프력 +6",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "glove_addi_rare_att_10",
    name: "공격력 +10",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "glove_addi_rare_matt_10",
    name: "마력 +10",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "glove_addi_rare_def_100",
    name: "방어력 +100",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "glove_addi_rare_str_2p",
    name: "STR +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "glove_addi_rare_dex_2p",
    name: "DEX +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "glove_addi_rare_int_2p",
    name: "INT +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "glove_addi_rare_luk_2p",
    name: "LUK +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "glove_addi_rare_hp_2p",
    name: "최대 HP +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "glove_addi_rare_mp_2p",
    name: "최대 MP +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "glove_addi_rare_def_2p",
    name: "방어력 +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "glove_addi_rare_allstat_3",
    name: "올스탯 +3",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  // 두 번째/세 번째 라인 전용 옵션들
  {
    id: "glove_addi_rare_str_6",
    name: "STR +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "glove_addi_rare_dex_6",
    name: "DEX +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "glove_addi_rare_int_6",
    name: "INT +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "glove_addi_rare_luk_6",
    name: "LUK +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "glove_addi_rare_hp_60",
    name: "최대 HP +60",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "glove_addi_rare_mp_60",
    name: "최대 MP +60",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "glove_addi_rare_speed_4",
    name: "이동속도 +4",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "glove_addi_rare_jump_4",
    name: "점프력 +4",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "glove_addi_rare_att_3",
    name: "공격력 +3",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "glove_addi_rare_matt_3",
    name: "마력 +3",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "glove_addi_rare_def_60",
    name: "방어력 +60",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },

  // === 에픽 등급 옵션 ===
  // 첫 번째 라인 옵션들
  {
    id: "glove_addi_epic_str_14",
    name: "STR +14",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "glove_addi_epic_dex_14",
    name: "DEX +14",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "glove_addi_epic_int_14",
    name: "INT +14",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "glove_addi_epic_luk_14",
    name: "LUK +14",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "glove_addi_epic_hp_180",
    name: "최대 HP +180",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "glove_addi_epic_mp_180",
    name: "최대 MP +180",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "glove_addi_epic_speed_8",
    name: "이동속도 +8",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "glove_addi_epic_jump_8",
    name: "점프력 +8",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "glove_addi_epic_att_11",
    name: "공격력 +11",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "glove_addi_epic_matt_11",
    name: "마력 +11",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "glove_addi_epic_def_120",
    name: "방어력 +120",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "glove_addi_epic_str_4p",
    name: "STR +4%",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "glove_addi_epic_dex_4p",
    name: "DEX +4%",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "glove_addi_epic_int_4p",
    name: "INT +4%",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "glove_addi_epic_luk_4p",
    name: "LUK +4%",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "glove_addi_epic_hp_5p",
    name: "최대 HP +5%",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "glove_addi_epic_mp_5p",
    name: "최대 MP +5%",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "glove_addi_epic_def_4p",
    name: "방어력 +4%",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "glove_addi_epic_allstat_2p",
    name: "올스탯 +2%",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  // 두 번째/세 번째 라인 전용 옵션들 (상속)
  {
    id: "glove_addi_epic_inherited_str_10",
    name: "STR +10",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "glove_addi_epic_inherited_dex_10",
    name: "DEX +10",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "glove_addi_epic_inherited_int_10",
    name: "INT +10",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "glove_addi_epic_inherited_luk_10",
    name: "LUK +10",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "glove_addi_epic_inherited_hp_100",
    name: "최대 HP +100",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "glove_addi_epic_inherited_mp_100",
    name: "최대 MP +100",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "glove_addi_epic_inherited_speed_6",
    name: "이동속도 +6",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "glove_addi_epic_inherited_jump_6",
    name: "점프력 +6",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "glove_addi_epic_inherited_att_10",
    name: "공격력 +10",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "glove_addi_epic_inherited_matt_10",
    name: "마력 +10",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "glove_addi_epic_inherited_def_100",
    name: "방어력 +100",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "glove_addi_epic_inherited_str_2p",
    name: "STR +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "glove_addi_epic_inherited_dex_2p",
    name: "DEX +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "glove_addi_epic_inherited_int_2p",
    name: "INT +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "glove_addi_epic_inherited_luk_2p",
    name: "LUK +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "glove_addi_epic_inherited_hp_2p",
    name: "최대 HP +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "glove_addi_epic_inherited_mp_2p",
    name: "최대 MP +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "glove_addi_epic_inherited_def_2p",
    name: "방어력 +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "glove_addi_epic_inherited_allstat_3",
    name: "올스탯 +3",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },

  // === 유니크 등급 옵션 ===
  // 첫 번째 라인 옵션들
  {
    id: "glove_addi_unique_str_18",
    name: "STR +18",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "glove_addi_unique_dex_18",
    name: "DEX +18",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "glove_addi_unique_int_18",
    name: "INT +18",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "glove_addi_unique_luk_18",
    name: "LUK +18",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "glove_addi_unique_hp_300",
    name: "최대 HP +300",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "glove_addi_unique_mp_300",
    name: "최대 MP +300",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "glove_addi_unique_att_14",
    name: "공격력 +14",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "glove_addi_unique_matt_14",
    name: "마력 +14",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "glove_addi_unique_str_6p",
    name: "STR +6%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "glove_addi_unique_dex_6p",
    name: "DEX +6%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "glove_addi_unique_int_6p",
    name: "INT +6%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "glove_addi_unique_luk_6p",
    name: "LUK +6%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "glove_addi_unique_hp_8p",
    name: "최대 HP +8%",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "glove_addi_unique_mp_8p",
    name: "최대 MP +8%",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "glove_addi_unique_allstat_5p",
    name: "올스탯 +5%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "glove_addi_unique_per_level_str",
    name: "캐릭터 기준 9레벨 당 STR +1",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "glove_addi_unique_per_level_dex",
    name: "캐릭터 기준 9레벨 당 DEX +1",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "glove_addi_unique_per_level_int",
    name: "캐릭터 기준 9레벨 당 INT +1",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "glove_addi_unique_per_level_luk",
    name: "캐릭터 기준 9레벨 당 LUK +1",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "glove_addi_unique_hp_recovery_20p",
    name: "HP 회복 아이템 및 회복 스킬 효율 +20%",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  // 두 번째/세 번째 라인 전용 옵션들 (상속)
  {
    id: "glove_addi_unique_inherited_str_14",
    name: "STR +14",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "glove_addi_unique_inherited_dex_14",
    name: "DEX +14",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "glove_addi_unique_inherited_int_14",
    name: "INT +14",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "glove_addi_unique_inherited_luk_14",
    name: "LUK +14",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "glove_addi_unique_inherited_hp_180",
    name: "최대 HP +180",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "glove_addi_unique_inherited_mp_180",
    name: "최대 MP +180",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "glove_addi_unique_inherited_speed_8",
    name: "이동속도 +8",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "glove_addi_unique_inherited_jump_8",
    name: "점프력 +8",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "glove_addi_unique_inherited_att_11",
    name: "공격력 +11",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "glove_addi_unique_inherited_matt_11",
    name: "마력 +11",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "glove_addi_unique_inherited_def_120",
    name: "방어력 +120",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "glove_addi_unique_inherited_str_4p",
    name: "STR +4%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "glove_addi_unique_inherited_dex_4p",
    name: "DEX +4%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "glove_addi_unique_inherited_int_4p",
    name: "INT +4%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "glove_addi_unique_inherited_luk_4p",
    name: "LUK +4%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "glove_addi_unique_inherited_hp_5p",
    name: "최대 HP +5%",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "glove_addi_unique_inherited_mp_5p",
    name: "최대 MP +5%",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "glove_addi_unique_inherited_def_4p",
    name: "방어력 +4%",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "glove_addi_unique_inherited_allstat_2p",
    name: "올스탯 +2%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },

  // === 레전드리 등급 옵션 ===
  // 첫 번째 라인 옵션들
  {
    id: "glove_addi_legendary_str_20",
    name: "STR +20",
    grade: "legendary",
    probability: { line1: 5.08475, line2: 0.0253, line3: 0.0253 },
  },
  {
    id: "glove_addi_legendary_dex_20",
    name: "DEX +20",
    grade: "legendary",
    probability: { line1: 5.08475, line2: 0.0253, line3: 0.0253 },
  },
  {
    id: "glove_addi_legendary_int_20",
    name: "INT +20",
    grade: "legendary",
    probability: { line1: 5.08475, line2: 0.0253, line3: 0.0253 },
  },
  {
    id: "glove_addi_legendary_luk_20",
    name: "LUK +20",
    grade: "legendary",
    probability: { line1: 5.08475, line2: 0.0253, line3: 0.0253 },
  },
  {
    id: "glove_addi_legendary_hp_360",
    name: "최대 HP +360",
    grade: "legendary",
    probability: { line1: 5.08475, line2: 0.0253, line3: 0.0253 },
  },
  {
    id: "glove_addi_legendary_mp_360",
    name: "최대 MP +360",
    grade: "legendary",
    probability: { line1: 5.08475, line2: 0.0253, line3: 0.0253 },
  },
  {
    id: "glove_addi_legendary_att_16",
    name: "공격력 +16",
    grade: "legendary",
    probability: { line1: 3.3898, line2: 0.01686, line3: 0.01686 },
  },
  {
    id: "glove_addi_legendary_matt_16",
    name: "마력 +16",
    grade: "legendary",
    probability: { line1: 3.3898, line2: 0.01686, line3: 0.01686 },
  },
  {
    id: "glove_addi_legendary_str_8p",
    name: "STR +8%",
    grade: "legendary",
    probability: { line1: 3.3898, line2: 0.01686, line3: 0.01686 },
  },
  {
    id: "glove_addi_legendary_dex_8p",
    name: "DEX +8%",
    grade: "legendary",
    probability: { line1: 3.3898, line2: 0.01686, line3: 0.01686 },
  },
  {
    id: "glove_addi_legendary_int_8p",
    name: "INT +8%",
    grade: "legendary",
    probability: { line1: 3.3898, line2: 0.01686, line3: 0.01686 },
  },
  {
    id: "glove_addi_legendary_luk_8p",
    name: "LUK +8%",
    grade: "legendary",
    probability: { line1: 3.3898, line2: 0.01686, line3: 0.01686 },
  },
  {
    id: "glove_addi_legendary_hp_11p",
    name: "최대 HP +11%",
    grade: "legendary",
    probability: { line1: 5.08475, line2: 0.0253, line3: 0.0253 },
  },
  {
    id: "glove_addi_legendary_mp_11p",
    name: "최대 MP +11%",
    grade: "legendary",
    probability: { line1: 5.08475, line2: 0.0253, line3: 0.0253 },
  },
  {
    id: "glove_addi_legendary_crit_damage_3p",
    name: "크리티컬 데미지 +3%",
    grade: "legendary",
    probability: { line1: 3.3898, line2: 0.01686, line3: 0.01686 },
  },
  {
    id: "glove_addi_legendary_crit_damage_1p",
    name: "크리티컬 데미지 +1%",
    grade: "legendary",
    probability: { line1: 3.3898, line2: 0.01686, line3: 0.01686 },
  },
  {
    id: "glove_addi_legendary_allstat_6p",
    name: "올스탯 +6%",
    grade: "legendary",
    probability: { line1: 3.3898, line2: 0.01686, line3: 0.01686 },
  },
  {
    id: "glove_addi_legendary_per_level_str_2",
    name: "캐릭터 기준 9레벨 당 STR +2",
    grade: "legendary",
    probability: { line1: 3.3898, line2: 0.01686, line3: 0.01686 },
  },
  {
    id: "glove_addi_legendary_per_level_dex_2",
    name: "캐릭터 기준 9레벨 당 DEX +2",
    grade: "legendary",
    probability: { line1: 3.3898, line2: 0.01686, line3: 0.01686 },
  },
  {
    id: "glove_addi_legendary_per_level_int_2",
    name: "캐릭터 기준 9레벨 당 INT +2",
    grade: "legendary",
    probability: { line1: 3.3898, line2: 0.01686, line3: 0.01686 },
  },
  {
    id: "glove_addi_legendary_per_level_luk_2",
    name: "캐릭터 기준 9레벨 당 LUK +2",
    grade: "legendary",
    probability: { line1: 3.3898, line2: 0.01686, line3: 0.01686 },
  },
  {
    id: "glove_addi_legendary_hp_recovery_30p",
    name: "HP 회복 아이템 및 회복 스킬 효율 +30%",
    grade: "legendary",
    probability: { line1: 5.08475, line2: 0.0253, line3: 0.0253 },
  },
  {
    id: "glove_addi_legendary_meso_5p",
    name: "메소 획득량 +5%",
    grade: "legendary",
    probability: { line1: 5.08475, line2: 0.0253, line3: 0.0253 },
  },
  {
    id: "glove_addi_legendary_item_drop_5p",
    name: "아이템 드롭률 +5%",
    grade: "legendary",
    probability: { line1: 5.08475, line2: 0.0253, line3: 0.0253 },
  },
  // 두 번째/세 번째 라인 전용 옵션들 (상속)
  {
    id: "glove_addi_legendary_inherited_str_18",
    name: "STR +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "glove_addi_legendary_inherited_dex_18",
    name: "DEX +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "glove_addi_legendary_inherited_int_18",
    name: "INT +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "glove_addi_legendary_inherited_luk_18",
    name: "LUK +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "glove_addi_legendary_inherited_hp_300",
    name: "최대 HP +300",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "glove_addi_legendary_inherited_mp_300",
    name: "최대 MP +300",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "glove_addi_legendary_inherited_att_14",
    name: "공격력 +14",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "glove_addi_legendary_inherited_matt_14",
    name: "마력 +14",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "glove_addi_legendary_inherited_str_6p",
    name: "STR +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "glove_addi_legendary_inherited_dex_6p",
    name: "DEX +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "glove_addi_legendary_inherited_int_6p",
    name: "INT +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "glove_addi_legendary_inherited_luk_6p",
    name: "LUK +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "glove_addi_legendary_inherited_hp_8p",
    name: "최대 HP +8%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "glove_addi_legendary_inherited_mp_8p",
    name: "최대 MP +8%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "glove_addi_legendary_inherited_allstat_5p",
    name: "올스탯 +5%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "glove_addi_legendary_inherited_per_level_str",
    name: "캐릭터 기준 9레벨 당 STR +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "glove_addi_legendary_inherited_per_level_dex",
    name: "캐릭터 기준 9레벨 당 DEX +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "glove_addi_legendary_inherited_per_level_int",
    name: "캐릭터 기준 9레벨 당 INT +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "glove_addi_legendary_inherited_per_level_luk",
    name: "캐릭터 기준 9레벨 당 LUK +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "glove_addi_legendary_inherited_hp_recovery_20p",
    name: "HP 회복 아이템 및 회복 스킬 효율 +20%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
];

// 에디셔널 잠재능력 옵션 데이터 (200레벨 무기 기준)
export const WEAPON_ADDITIONAL_OPTIONS: PotentialOptionData[] = [
  // === 레어 등급 옵션 ===
  // 첫 번째 라인 옵션들
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

  // 2,3번째 라인 전용 레어 옵션들
  {
    id: "addi_rare_str_6",
    name: "STR +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "addi_rare_dex_6",
    name: "DEX +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "addi_rare_int_6",
    name: "INT +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "addi_rare_luk_6",
    name: "LUK +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "addi_rare_hp_60",
    name: "최대 HP +60",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "addi_rare_mp_60",
    name: "최대 MP +60",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "addi_rare_speed_4",
    name: "이동속도 +4",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "addi_rare_jump_4",
    name: "점프력 +4",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "addi_rare_def_60",
    name: "방어력 +60",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "addi_rare_att_6",
    name: "공격력 +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "addi_rare_matt_6",
    name: "마력 +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },

  // === 에픽 등급 옵션 ===
  // 첫 번째 라인 옵션들
  {
    id: "addi_epic_hp_5p",
    name: "최대 HP +5%",
    grade: "epic",
    probability: { line1: 8.8235, line2: 0.4202, line3: 0.4202 },
  },
  {
    id: "addi_epic_mp_5p",
    name: "최대 MP +5%",
    grade: "epic",
    probability: { line1: 8.8235, line2: 0.4202, line3: 0.4202 },
  },
  {
    id: "addi_epic_att_6p",
    name: "공격력 +6%",
    grade: "epic",
    probability: { line1: 5.8824, line2: 0.2801, line3: 0.2801 },
  },
  {
    id: "addi_epic_matt_6p",
    name: "마력 +6%",
    grade: "epic",
    probability: { line1: 5.8824, line2: 0.2801, line3: 0.2801 },
  },
  {
    id: "addi_epic_crit_6p",
    name: "크리티컬 확률 +6%",
    grade: "epic",
    probability: { line1: 2.9412, line2: 0.1401, line3: 0.1401 },
  },
  {
    id: "addi_epic_str_6p",
    name: "STR +6%",
    grade: "epic",
    probability: { line1: 8.8235, line2: 0.4202, line3: 0.4202 },
  },
  {
    id: "addi_epic_dex_6p",
    name: "DEX +6%",
    grade: "epic",
    probability: { line1: 8.8235, line2: 0.4202, line3: 0.4202 },
  },
  {
    id: "addi_epic_int_6p",
    name: "INT +6%",
    grade: "epic",
    probability: { line1: 8.8235, line2: 0.4202, line3: 0.4202 },
  },
  {
    id: "addi_epic_luk_6p",
    name: "LUK +6%",
    grade: "epic",
    probability: { line1: 8.8235, line2: 0.4202, line3: 0.4202 },
  },
  {
    id: "addi_epic_damage_6p",
    name: "데미지 +6%",
    grade: "epic",
    probability: { line1: 2.9412, line2: 0.1401, line3: 0.1401 },
  },
  {
    id: "addi_epic_allstat_3p",
    name: "올스탯 +3%",
    grade: "epic",
    probability: { line1: 5.8824, line2: 0.2801, line3: 0.2801 },
  },
  {
    id: "addi_epic_hp_recovery",
    name: "공격 시 3% 확률로 53의 HP 회복",
    grade: "epic",
    probability: { line1: 8.8235, line2: 0.4202, line3: 0.4202 },
  },
  {
    id: "addi_epic_mp_recovery",
    name: "공격 시 3% 확률로 53의 MP 회복",
    grade: "epic",
    probability: { line1: 8.8235, line2: 0.4202, line3: 0.4202 },
  },
  {
    id: "addi_epic_ignore_3p",
    name: "몬스터 방어율 무시 +3%",
    grade: "epic",
    probability: { line1: 5.8824, line2: 0.2801, line3: 0.2801 },
  },

  // 에픽 2, 3번째 라인에서 나오는 레어 등급 옵션들
  {
    id: "addi_epic_rare_hp_100",
    name: "최대 HP +100",
    grade: "epic",
    probability: { line1: 0, line2: 5.6022, line3: 5.6022 },
  },
  {
    id: "addi_epic_rare_mp_100",
    name: "최대 MP +100",
    grade: "epic",
    probability: { line1: 0, line2: 5.6022, line3: 5.6022 },
  },
  {
    id: "addi_epic_rare_speed_6",
    name: "이동속도 +6",
    grade: "epic",
    probability: { line1: 0, line2: 5.6022, line3: 5.6022 },
  },
  {
    id: "addi_epic_rare_jump_6",
    name: "점프력 +6",
    grade: "epic",
    probability: { line1: 0, line2: 5.6022, line3: 5.6022 },
  },
  {
    id: "addi_epic_rare_def_100",
    name: "방어력 +100",
    grade: "epic",
    probability: { line1: 0, line2: 5.6022, line3: 5.6022 },
  },
  {
    id: "addi_epic_rare_str_12",
    name: "STR +12",
    grade: "epic",
    probability: { line1: 0, line2: 5.6022, line3: 5.6022 },
  },
  {
    id: "addi_epic_rare_dex_12",
    name: "DEX +12",
    grade: "epic",
    probability: { line1: 0, line2: 5.6022, line3: 5.6022 },
  },
  {
    id: "addi_epic_rare_int_12",
    name: "INT +12",
    grade: "epic",
    probability: { line1: 0, line2: 5.6022, line3: 5.6022 },
  },
  {
    id: "addi_epic_rare_luk_12",
    name: "LUK +12",
    grade: "epic",
    probability: { line1: 0, line2: 5.6022, line3: 5.6022 },
  },
  {
    id: "addi_epic_rare_att_12",
    name: "공격력 +12",
    grade: "epic",
    probability: { line1: 0, line2: 3.7348, line3: 3.7348 },
  },
  {
    id: "addi_epic_rare_matt_12",
    name: "마력 +12",
    grade: "epic",
    probability: { line1: 0, line2: 3.7348, line3: 3.7348 },
  },
  {
    id: "addi_epic_rare_hp_2p",
    name: "최대 HP +2%",
    grade: "epic",
    probability: { line1: 0, line2: 3.7348, line3: 3.7348 },
  },
  {
    id: "addi_epic_rare_mp_2p",
    name: "최대 MP +2%",
    grade: "epic",
    probability: { line1: 0, line2: 3.7348, line3: 3.7348 },
  },
  {
    id: "addi_epic_rare_str_3p",
    name: "STR +3%",
    grade: "epic",
    probability: { line1: 0, line2: 3.7348, line3: 3.7348 },
  },
  {
    id: "addi_epic_rare_dex_3p",
    name: "DEX +3%",
    grade: "epic",
    probability: { line1: 0, line2: 3.7348, line3: 3.7348 },
  },
  {
    id: "addi_epic_rare_int_3p",
    name: "INT +3%",
    grade: "epic",
    probability: { line1: 0, line2: 3.7348, line3: 3.7348 },
  },
  {
    id: "addi_epic_rare_luk_3p",
    name: "LUK +3%",
    grade: "epic",
    probability: { line1: 0, line2: 3.7348, line3: 3.7348 },
  },
  {
    id: "addi_epic_rare_att_3p",
    name: "공격력 +3%",
    grade: "epic",
    probability: { line1: 0, line2: 1.8674, line3: 1.8674 },
  },
  {
    id: "addi_epic_rare_matt_3p",
    name: "마력 +3%",
    grade: "epic",
    probability: { line1: 0, line2: 1.8674, line3: 1.8674 },
  },
  {
    id: "addi_epic_rare_crit_4p",
    name: "크리티컬 확률 +4%",
    grade: "epic",
    probability: { line1: 0, line2: 3.7348, line3: 3.7348 },
  },
  {
    id: "addi_epic_rare_damage_3p",
    name: "데미지 +3%",
    grade: "epic",
    probability: { line1: 0, line2: 1.8674, line3: 1.8674 },
  },
  {
    id: "addi_epic_rare_allstat_5",
    name: "올스탯 +5",
    grade: "epic",
    probability: { line1: 0, line2: 5.6022, line3: 5.6022 },
  },

  // === 유니크 등급 옵션 ===
  // 첫 번째 라인 옵션들
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
    id: "addi_unique_str_per_level",
    name: "캐릭터 기준 9레벨 당 STR +1",
    grade: "unique",
    probability: { line1: 4.6512, line2: 0.0912, line3: 0.0912 },
  },
  {
    id: "addi_unique_dex_per_level",
    name: "캐릭터 기준 9레벨 당 DEX +1",
    grade: "unique",
    probability: { line1: 4.6512, line2: 0.0912, line3: 0.0912 },
  },
  {
    id: "addi_unique_int_per_level",
    name: "캐릭터 기준 9레벨 당 INT +1",
    grade: "unique",
    probability: { line1: 4.6512, line2: 0.0912, line3: 0.0912 },
  },
  {
    id: "addi_unique_luk_per_level",
    name: "캐릭터 기준 9레벨 당 LUK +1",
    grade: "unique",
    probability: { line1: 4.6512, line2: 0.0912, line3: 0.0912 },
  },
  {
    id: "addi_unique_hp_recovery",
    name: "공격 시 15% 확률로 95의 HP 회복",
    grade: "unique",
    probability: { line1: 6.9767, line2: 0.1368, line3: 0.1368 },
  },
  {
    id: "addi_unique_mp_recovery",
    name: "공격 시 15% 확률로 95의 MP 회복",
    grade: "unique",
    probability: { line1: 6.9767, line2: 0.1368, line3: 0.1368 },
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

  // 유니크 2, 3번째 라인에서 나오는 에픽 등급 옵션들
  {
    id: "addi_unique_epic_hp_5p",
    name: "최대 HP +5%",
    grade: "unique",
    probability: { line1: 0, line2: 8.6505, line3: 8.6505 },
  },
  {
    id: "addi_unique_epic_mp_5p",
    name: "최대 MP +5%",
    grade: "unique",
    probability: { line1: 0, line2: 8.6505, line3: 8.6505 },
  },
  {
    id: "addi_unique_epic_att_6p",
    name: "공격력 +6%",
    grade: "unique",
    probability: { line1: 0, line2: 5.767, line3: 5.767 },
  },
  {
    id: "addi_unique_epic_matt_6p",
    name: "마력 +6%",
    grade: "unique",
    probability: { line1: 0, line2: 5.767, line3: 5.767 },
  },
  {
    id: "addi_unique_epic_crit_6p",
    name: "크리티컬 확률 +6%",
    grade: "unique",
    probability: { line1: 0, line2: 2.8835, line3: 2.8835 },
  },
  {
    id: "addi_unique_epic_str_6p",
    name: "STR +6%",
    grade: "unique",
    probability: { line1: 0, line2: 8.6505, line3: 8.6505 },
  },
  {
    id: "addi_unique_epic_dex_6p",
    name: "DEX +6%",
    grade: "unique",
    probability: { line1: 0, line2: 8.6505, line3: 8.6505 },
  },
  {
    id: "addi_unique_epic_int_6p",
    name: "INT +6%",
    grade: "unique",
    probability: { line1: 0, line2: 8.6505, line3: 8.6505 },
  },
  {
    id: "addi_unique_epic_luk_6p",
    name: "LUK +6%",
    grade: "unique",
    probability: { line1: 0, line2: 8.6505, line3: 8.6505 },
  },
  {
    id: "addi_unique_epic_damage_6p",
    name: "데미지 +6%",
    grade: "unique",
    probability: { line1: 0, line2: 2.8835, line3: 2.8835 },
  },
  {
    id: "addi_unique_epic_allstat_3p",
    name: "올스탯 +3%",
    grade: "unique",
    probability: { line1: 0, line2: 5.767, line3: 5.767 },
  },
  {
    id: "addi_unique_epic_hp_recovery",
    name: "공격 시 3% 확률로 53의 HP 회복",
    grade: "unique",
    probability: { line1: 0, line2: 8.6505, line3: 8.6505 },
  },
  {
    id: "addi_unique_epic_mp_recovery",
    name: "공격 시 3% 확률로 53의 MP 회복",
    grade: "unique",
    probability: { line1: 0, line2: 8.6505, line3: 8.6505 },
  },
  {
    id: "addi_unique_epic_ignore_3p",
    name: "몬스터 방어율 무시 +3%",
    grade: "unique",
    probability: { line1: 0, line2: 5.767, line3: 5.767 },
  },

  // === 레전드리 등급 옵션 ===
  // 첫 번째 라인 옵션들
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
    id: "addi_legendary_str_per_level",
    name: "캐릭터 기준 9레벨 당 STR +2",
    grade: "legendary",
    probability: { line1: 5.1282, line2: 0.02551, line3: 0.02551 },
  },
  {
    id: "addi_legendary_dex_per_level",
    name: "캐릭터 기준 9레벨 당 DEX +2",
    grade: "legendary",
    probability: { line1: 5.1282, line2: 0.02551, line3: 0.02551 },
  },
  {
    id: "addi_legendary_int_per_level",
    name: "캐릭터 기준 9레벨 당 INT +2",
    grade: "legendary",
    probability: { line1: 5.1282, line2: 0.02551, line3: 0.02551 },
  },
  {
    id: "addi_legendary_luk_per_level",
    name: "캐릭터 기준 9레벨 당 LUK +2",
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

  // 2,3번째 라인 레전드리 옵션들 (레전드리 1라인 + 유니크 1라인 옵션만 포함)
  // 레전드리 1번째 라인 옵션들 (2,3번째 라인에서 가능)
  {
    id: "addi_legendary_hp_11p_23",
    name: "최대 HP +11%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.6538, line3: 7.6538 },
  },
  {
    id: "addi_legendary_mp_11p_23",
    name: "최대 MP +11%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.6538, line3: 7.6538 },
  },
  {
    id: "addi_legendary_att_12p_23",
    name: "공격력 +12%",
    grade: "legendary",
    probability: { line1: 0, line2: 5.1026, line3: 5.1026 },
  },
  {
    id: "addi_legendary_matt_12p_23",
    name: "마력 +12%",
    grade: "legendary",
    probability: { line1: 0, line2: 5.1026, line3: 5.1026 },
  },
  {
    id: "addi_legendary_crit_12p_23",
    name: "크리티컬 확률 +12%",
    grade: "legendary",
    probability: { line1: 0, line2: 5.1026, line3: 5.1026 },
  },
  {
    id: "addi_legendary_str_12p_23",
    name: "STR +12%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.6538, line3: 7.6538 },
  },
  {
    id: "addi_legendary_dex_12p_23",
    name: "DEX +12%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.6538, line3: 7.6538 },
  },
  {
    id: "addi_legendary_int_12p_23",
    name: "INT +12%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.6538, line3: 7.6538 },
  },
  {
    id: "addi_legendary_luk_12p_23",
    name: "LUK +12%",
    grade: "legendary",
    probability: { line1: 0, line2: 7.6538, line3: 7.6538 },
  },
  {
    id: "addi_legendary_damage_12p_23",
    name: "데미지 +12%",
    grade: "legendary",
    probability: { line1: 0, line2: 2.5513, line3: 2.5513 },
  },
  {
    id: "addi_legendary_allstat_9p_23",
    name: "올스탯 +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 5.1026, line3: 5.1026 },
  },
  {
    id: "addi_legendary_str_per_level_2_23",
    name: "캐릭터 기준 9레벨 당 STR +2",
    grade: "legendary",
    probability: { line1: 0, line2: 5.1026, line3: 5.1026 },
  },
  {
    id: "addi_legendary_dex_per_level_2_23",
    name: "캐릭터 기준 9레벨 당 DEX +2",
    grade: "legendary",
    probability: { line1: 0, line2: 5.1026, line3: 5.1026 },
  },
  {
    id: "addi_legendary_int_per_level_2_23",
    name: "캐릭터 기준 9레벨 당 INT +2",
    grade: "legendary",
    probability: { line1: 0, line2: 5.1026, line3: 5.1026 },
  },
  {
    id: "addi_legendary_luk_per_level_2_23",
    name: "캐릭터 기준 9레벨 당 LUK +2",
    grade: "legendary",
    probability: { line1: 0, line2: 5.1026, line3: 5.1026 },
  },
  {
    id: "addi_legendary_att_32_23",
    name: "공격력 +32",
    grade: "legendary",
    probability: { line1: 0, line2: 2.5513, line3: 2.5513 },
  },
  {
    id: "addi_legendary_matt_32_23",
    name: "마력 +32",
    grade: "legendary",
    probability: { line1: 0, line2: 2.5513, line3: 2.5513 },
  },
  {
    id: "addi_legendary_ignore_5p_23",
    name: "몬스터 방어율 무시 +5%",
    grade: "legendary",
    probability: { line1: 0, line2: 2.5513, line3: 2.5513 },
  },
  {
    id: "addi_legendary_boss_18p_23",
    name: "보스 몬스터 데미지 +18%",
    grade: "legendary",
    probability: { line1: 0, line2: 2.5513, line3: 2.5513 },
  },

  // 유니크 1번째 라인 옵션들 (레전드리 2,3번째 라인에서 가능)
  {
    id: "addi_legendary_hp_8p",
    name: "최대 HP +8%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.942, line3: 6.942 },
  },
  {
    id: "addi_legendary_mp_8p",
    name: "최대 MP +8%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.942, line3: 6.942 },
  },
  {
    id: "addi_legendary_att_9p",
    name: "공격력 +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.628, line3: 4.628 },
  },
  {
    id: "addi_legendary_matt_9p",
    name: "마력 +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.628, line3: 4.628 },
  },
  {
    id: "addi_legendary_crit_9p",
    name: "크리티컬 확률 +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.628, line3: 4.628 },
  },
  {
    id: "addi_legendary_str_9p",
    name: "STR +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.942, line3: 6.942 },
  },
  {
    id: "addi_legendary_dex_9p",
    name: "DEX +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.942, line3: 6.942 },
  },
  {
    id: "addi_legendary_int_9p",
    name: "INT +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.942, line3: 6.942 },
  },
  {
    id: "addi_legendary_luk_9p",
    name: "LUK +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.942, line3: 6.942 },
  },
  {
    id: "addi_legendary_damage_9p",
    name: "데미지 +9%",
    grade: "legendary",
    probability: { line1: 0, line2: 2.314, line3: 2.314 },
  },
  {
    id: "addi_legendary_allstat_6p",
    name: "올스탯 +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.628, line3: 4.628 },
  },
  {
    id: "addi_legendary_str_per_level_1",
    name: "캐릭터 기준 9레벨 당 STR +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.628, line3: 4.628 },
  },
  {
    id: "addi_legendary_dex_per_level_1",
    name: "캐릭터 기준 9레벨 당 DEX +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.628, line3: 4.628 },
  },
  {
    id: "addi_legendary_int_per_level_1",
    name: "캐릭터 기준 9레벨 당 INT +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.628, line3: 4.628 },
  },
  {
    id: "addi_legendary_luk_per_level_1",
    name: "캐릭터 기준 9레벨 당 LUK +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.628, line3: 4.628 },
  },
  {
    id: "addi_legendary_hp_recovery",
    name: "공격 시 15% 확률로 95의 HP 회복",
    grade: "legendary",
    probability: { line1: 0, line2: 6.942, line3: 6.942 },
  },
  {
    id: "addi_legendary_mp_recovery",
    name: "공격 시 15% 확률로 95의 MP 회복",
    grade: "legendary",
    probability: { line1: 0, line2: 6.942, line3: 6.942 },
  },
  {
    id: "addi_legendary_ignore_4p",
    name: "몬스터 방어율 무시 +4%",
    grade: "legendary",
    probability: { line1: 0, line2: 2.314, line3: 2.314 },
  },
  {
    id: "addi_legendary_boss_12p",
    name: "보스 몬스터 데미지 +12%",
    grade: "legendary",
    probability: { line1: 0, line2: 2.314, line3: 2.314 },
  },
];

// 장신구(펜던트) 에디셔널 잠재능력 옵션 데이터 (160레벨 기준)
export const ACCESSORY_ADDITIONAL_OPTIONS: PotentialOptionData[] = [
  // === 레어 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "accessory_addi_rare_str_10",
    name: "STR +10",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "accessory_addi_rare_dex_10",
    name: "DEX +10",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "accessory_addi_rare_int_10",
    name: "INT +10",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "accessory_addi_rare_luk_10",
    name: "LUK +10",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "accessory_addi_rare_hp_100",
    name: "최대 HP +100",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "accessory_addi_rare_mp_100",
    name: "최대 MP +100",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "accessory_addi_rare_speed_6",
    name: "이동속도 +6",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "accessory_addi_rare_jump_6",
    name: "점프력 +6",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "accessory_addi_rare_att_10",
    name: "공격력 +10",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "accessory_addi_rare_matt_10",
    name: "마력 +10",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "accessory_addi_rare_def_100",
    name: "방어력 +100",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "accessory_addi_rare_str_2p",
    name: "STR +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "accessory_addi_rare_dex_2p",
    name: "DEX +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "accessory_addi_rare_int_2p",
    name: "INT +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "accessory_addi_rare_luk_2p",
    name: "LUK +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "accessory_addi_rare_hp_2p",
    name: "최대 HP +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "accessory_addi_rare_mp_2p",
    name: "최대 MP +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "accessory_addi_rare_def_2p",
    name: "방어력 +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "accessory_addi_rare_allstat_3",
    name: "올스탯 +3",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  // 2-3번째 라인 상속 옵션들
  {
    id: "accessory_addi_rare_inherited_str_6",
    name: "STR +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "accessory_addi_rare_inherited_dex_6",
    name: "DEX +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "accessory_addi_rare_inherited_int_6",
    name: "INT +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "accessory_addi_rare_inherited_luk_6",
    name: "LUK +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "accessory_addi_rare_inherited_hp_60",
    name: "최대 HP +60",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "accessory_addi_rare_inherited_mp_60",
    name: "최대 MP +60",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "accessory_addi_rare_inherited_speed_4",
    name: "이동속도 +4",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "accessory_addi_rare_inherited_jump_4",
    name: "점프력 +4",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "accessory_addi_rare_inherited_att_3",
    name: "공격력 +3",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "accessory_addi_rare_inherited_matt_3",
    name: "마력 +3",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "accessory_addi_rare_inherited_def_60",
    name: "방어력 +60",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },

  // === 에픽 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "accessory_addi_epic_str_14",
    name: "STR +14",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "accessory_addi_epic_dex_14",
    name: "DEX +14",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "accessory_addi_epic_int_14",
    name: "INT +14",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "accessory_addi_epic_luk_14",
    name: "LUK +14",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "accessory_addi_epic_hp_180",
    name: "최대 HP +180",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "accessory_addi_epic_mp_180",
    name: "최대 MP +180",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "accessory_addi_epic_speed_8",
    name: "이동속도 +8",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "accessory_addi_epic_jump_8",
    name: "점프력 +8",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "accessory_addi_epic_att_11",
    name: "공격력 +11",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "accessory_addi_epic_matt_11",
    name: "마력 +11",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "accessory_addi_epic_def_120",
    name: "방어력 +120",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "accessory_addi_epic_str_4p",
    name: "STR +4%",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "accessory_addi_epic_dex_4p",
    name: "DEX +4%",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "accessory_addi_epic_int_4p",
    name: "INT +4%",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "accessory_addi_epic_luk_4p",
    name: "LUK +4%",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "accessory_addi_epic_hp_5p",
    name: "최대 HP +5%",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "accessory_addi_epic_mp_5p",
    name: "최대 MP +5%",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "accessory_addi_epic_def_4p",
    name: "방어력 +4%",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "accessory_addi_epic_allstat_2p",
    name: "올스탯 +2%",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  // 2-3번째 라인 상속 옵션들 (레어 등급)
  {
    id: "accessory_addi_epic_inherited_str_10",
    name: "STR +10",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "accessory_addi_epic_inherited_dex_10",
    name: "DEX +10",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "accessory_addi_epic_inherited_int_10",
    name: "INT +10",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "accessory_addi_epic_inherited_luk_10",
    name: "LUK +10",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "accessory_addi_epic_inherited_hp_100",
    name: "최대 HP +100",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "accessory_addi_epic_inherited_mp_100",
    name: "최대 MP +100",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "accessory_addi_epic_inherited_speed_6",
    name: "이동속도 +6",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "accessory_addi_epic_inherited_jump_6",
    name: "점프력 +6",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "accessory_addi_epic_inherited_att_10",
    name: "공격력 +10",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "accessory_addi_epic_inherited_matt_10",
    name: "마력 +10",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "accessory_addi_epic_inherited_def_100",
    name: "방어력 +100",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "accessory_addi_epic_inherited_str_2p",
    name: "STR +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "accessory_addi_epic_inherited_dex_2p",
    name: "DEX +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "accessory_addi_epic_inherited_int_2p",
    name: "INT +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "accessory_addi_epic_inherited_luk_2p",
    name: "LUK +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "accessory_addi_epic_inherited_hp_2p",
    name: "최대 HP +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "accessory_addi_epic_inherited_mp_2p",
    name: "최대 MP +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "accessory_addi_epic_inherited_def_2p",
    name: "방어력 +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "accessory_addi_epic_inherited_allstat_3",
    name: "올스탯 +3",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },

  // === 유니크 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "accessory_addi_unique_str_18",
    name: "STR +18",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "accessory_addi_unique_dex_18",
    name: "DEX +18",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "accessory_addi_unique_int_18",
    name: "INT +18",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "accessory_addi_unique_luk_18",
    name: "LUK +18",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "accessory_addi_unique_hp_300",
    name: "최대 HP +300",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "accessory_addi_unique_mp_300",
    name: "최대 MP +300",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "accessory_addi_unique_att_14",
    name: "공격력 +14",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "accessory_addi_unique_matt_14",
    name: "마력 +14",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "accessory_addi_unique_str_6p",
    name: "STR +6%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "accessory_addi_unique_dex_6p",
    name: "DEX +6%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "accessory_addi_unique_int_6p",
    name: "INT +6%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "accessory_addi_unique_luk_6p",
    name: "LUK +6%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "accessory_addi_unique_hp_8p",
    name: "최대 HP +8%",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "accessory_addi_unique_mp_8p",
    name: "최대 MP +8%",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "accessory_addi_unique_allstat_5p",
    name: "올스탯 +5%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "accessory_addi_unique_str_lv9_1",
    name: "캐릭터 기준 9레벨 당 STR +1",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "accessory_addi_unique_dex_lv9_1",
    name: "캐릭터 기준 9레벨 당 DEX +1",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "accessory_addi_unique_int_lv9_1",
    name: "캐릭터 기준 9레벨 당 INT +1",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "accessory_addi_unique_luk_lv9_1",
    name: "캐릭터 기준 9레벨 당 LUK +1",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "accessory_addi_unique_hp_recovery_20p",
    name: "HP 회복 아이템 및 회복 스킬 효율 +20%",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  // 2-3번째 라인 상속 옵션들 (에픽 등급)
  {
    id: "accessory_addi_unique_inherited_str_14",
    name: "STR +14",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "accessory_addi_unique_inherited_dex_14",
    name: "DEX +14",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "accessory_addi_unique_inherited_int_14",
    name: "INT +14",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "accessory_addi_unique_inherited_luk_14",
    name: "LUK +14",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "accessory_addi_unique_inherited_hp_180",
    name: "최대 HP +180",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "accessory_addi_unique_inherited_mp_180",
    name: "최대 MP +180",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "accessory_addi_unique_inherited_speed_8",
    name: "이동속도 +8",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "accessory_addi_unique_inherited_jump_8",
    name: "점프력 +8",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "accessory_addi_unique_inherited_att_11",
    name: "공격력 +11",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "accessory_addi_unique_inherited_matt_11",
    name: "마력 +11",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "accessory_addi_unique_inherited_def_120",
    name: "방어력 +120",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "accessory_addi_unique_inherited_str_4p",
    name: "STR +4%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "accessory_addi_unique_inherited_dex_4p",
    name: "DEX +4%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "accessory_addi_unique_inherited_int_4p",
    name: "INT +4%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "accessory_addi_unique_inherited_luk_4p",
    name: "LUK +4%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "accessory_addi_unique_inherited_hp_5p",
    name: "최대 HP +5%",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "accessory_addi_unique_inherited_mp_5p",
    name: "최대 MP +5%",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "accessory_addi_unique_inherited_def_4p",
    name: "방어력 +4%",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "accessory_addi_unique_inherited_allstat_2p",
    name: "올스탯 +2%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },

  // === 레전드리 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "accessory_addi_legendary_str_20",
    name: "STR +20",
    grade: "legendary",
    probability: { line1: 5.1724, line2: 0.02573, line3: 0.02573 },
  },
  {
    id: "accessory_addi_legendary_dex_20",
    name: "DEX +20",
    grade: "legendary",
    probability: { line1: 5.1724, line2: 0.02573, line3: 0.02573 },
  },
  {
    id: "accessory_addi_legendary_int_20",
    name: "INT +20",
    grade: "legendary",
    probability: { line1: 5.1724, line2: 0.02573, line3: 0.02573 },
  },
  {
    id: "accessory_addi_legendary_luk_20",
    name: "LUK +20",
    grade: "legendary",
    probability: { line1: 5.1724, line2: 0.02573, line3: 0.02573 },
  },
  {
    id: "accessory_addi_legendary_hp_360",
    name: "최대 HP +360",
    grade: "legendary",
    probability: { line1: 5.1724, line2: 0.02573, line3: 0.02573 },
  },
  {
    id: "accessory_addi_legendary_mp_360",
    name: "최대 MP +360",
    grade: "legendary",
    probability: { line1: 5.1724, line2: 0.02573, line3: 0.02573 },
  },
  {
    id: "accessory_addi_legendary_att_16",
    name: "공격력 +16",
    grade: "legendary",
    probability: { line1: 3.4483, line2: 0.01716, line3: 0.01716 },
  },
  {
    id: "accessory_addi_legendary_matt_16",
    name: "마력 +16",
    grade: "legendary",
    probability: { line1: 3.4483, line2: 0.01716, line3: 0.01716 },
  },
  {
    id: "accessory_addi_legendary_str_8p",
    name: "STR +8%",
    grade: "legendary",
    probability: { line1: 3.4483, line2: 0.01716, line3: 0.01716 },
  },
  {
    id: "accessory_addi_legendary_dex_8p",
    name: "DEX +8%",
    grade: "legendary",
    probability: { line1: 3.4483, line2: 0.01716, line3: 0.01716 },
  },
  {
    id: "accessory_addi_legendary_int_8p",
    name: "INT +8%",
    grade: "legendary",
    probability: { line1: 3.4483, line2: 0.01716, line3: 0.01716 },
  },
  {
    id: "accessory_addi_legendary_luk_8p",
    name: "LUK +8%",
    grade: "legendary",
    probability: { line1: 3.4483, line2: 0.01716, line3: 0.01716 },
  },
  {
    id: "accessory_addi_legendary_hp_11p",
    name: "최대 HP +11%",
    grade: "legendary",
    probability: { line1: 5.1724, line2: 0.02573, line3: 0.02573 },
  },
  {
    id: "accessory_addi_legendary_mp_11p",
    name: "최대 MP +11%",
    grade: "legendary",
    probability: { line1: 5.1724, line2: 0.02573, line3: 0.02573 },
  },
  {
    id: "accessory_addi_legendary_allstat_6p",
    name: "올스탯 +6%",
    grade: "legendary",
    probability: { line1: 3.4483, line2: 0.01716, line3: 0.01716 },
  },
  {
    id: "accessory_addi_legendary_str_lv9_2",
    name: "캐릭터 기준 9레벨 당 STR +2",
    grade: "legendary",
    probability: { line1: 3.4483, line2: 0.01716, line3: 0.01716 },
  },
  {
    id: "accessory_addi_legendary_dex_lv9_2",
    name: "캐릭터 기준 9레벨 당 DEX +2",
    grade: "legendary",
    probability: { line1: 3.4483, line2: 0.01716, line3: 0.01716 },
  },
  {
    id: "accessory_addi_legendary_int_lv9_2",
    name: "캐릭터 기준 9레벨 당 INT +2",
    grade: "legendary",
    probability: { line1: 3.4483, line2: 0.01716, line3: 0.01716 },
  },
  {
    id: "accessory_addi_legendary_luk_lv9_2",
    name: "캐릭터 기준 9레벨 당 LUK +2",
    grade: "legendary",
    probability: { line1: 3.4483, line2: 0.01716, line3: 0.01716 },
  },
  {
    id: "accessory_addi_legendary_mp_consume_10p",
    name: "모든 스킬의 MP 소모 -10%",
    grade: "legendary",
    probability: { line1: 5.1724, line2: 0.02573, line3: 0.02573 },
  },
  {
    id: "accessory_addi_legendary_hp_recovery_30p",
    name: "HP 회복 아이템 및 회복 스킬 +30%",
    grade: "legendary",
    probability: { line1: 5.1724, line2: 0.02573, line3: 0.02573 },
  },
  {
    id: "accessory_addi_legendary_meso_5p",
    name: "메소 획득량 +5%",
    grade: "legendary",
    probability: { line1: 5.1724, line2: 0.02573, line3: 0.02573 },
  },
  {
    id: "accessory_addi_legendary_drop_5p",
    name: "아이템 드롭률 +5%",
    grade: "legendary",
    probability: { line1: 5.1724, line2: 0.02573, line3: 0.02573 },
  },
  // 2-3번째 라인 상속 옵션들 (유니크 등급)
  {
    id: "accessory_addi_legendary_inherited_str_18",
    name: "STR +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "accessory_addi_legendary_inherited_dex_18",
    name: "DEX +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "accessory_addi_legendary_inherited_int_18",
    name: "INT +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "accessory_addi_legendary_inherited_luk_18",
    name: "LUK +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "accessory_addi_legendary_inherited_hp_300",
    name: "최대 HP +300",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "accessory_addi_legendary_inherited_mp_300",
    name: "최대 MP +300",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "accessory_addi_legendary_inherited_att_14",
    name: "공격력 +14",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "accessory_addi_legendary_inherited_matt_14",
    name: "마력 +14",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "accessory_addi_legendary_inherited_str_6p",
    name: "STR +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "accessory_addi_legendary_inherited_dex_6p",
    name: "DEX +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "accessory_addi_legendary_inherited_int_6p",
    name: "INT +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "accessory_addi_legendary_inherited_luk_6p",
    name: "LUK +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "accessory_addi_legendary_inherited_hp_8p",
    name: "최대 HP +8%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "accessory_addi_legendary_inherited_mp_8p",
    name: "최대 MP +8%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "accessory_addi_legendary_inherited_allstat_5p",
    name: "올스탯 +5%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "accessory_addi_legendary_inherited_str_lv9_1",
    name: "캐릭터 기준 9레벨 당 STR +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "accessory_addi_legendary_inherited_dex_lv9_1",
    name: "캐릭터 기준 9레벨 당 DEX +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "accessory_addi_legendary_inherited_int_lv9_1",
    name: "캐릭터 기준 9레벨 당 INT +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "accessory_addi_legendary_inherited_luk_lv9_1",
    name: "캐릭터 기준 9레벨 당 LUK +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "accessory_addi_legendary_inherited_hp_recovery_20p",
    name: "HP 회복 아이템 및 회복 스킬 효율 +20%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
];

// 상의 에디셔널 잠재능력 옵션 데이터 (150레벨 기준)
export const TOP_ADDITIONAL_OPTIONS: PotentialOptionData[] = [
  // === 레어 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "top_addi_rare_str_10",
    name: "STR +10",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "top_addi_rare_dex_10",
    name: "DEX +10",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "top_addi_rare_int_10",
    name: "INT +10",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "top_addi_rare_luk_10",
    name: "LUK +10",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "top_addi_rare_hp_100",
    name: "최대 HP +100",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "top_addi_rare_mp_100",
    name: "최대 MP +100",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "top_addi_rare_speed_6",
    name: "이동속도 +6",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "top_addi_rare_jump_6",
    name: "점프력 +6",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "top_addi_rare_att_10",
    name: "공격력 +10",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "top_addi_rare_matt_10",
    name: "마력 +10",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "top_addi_rare_def_100",
    name: "방어력 +100",
    grade: "rare",
    probability: { line1: 6.383, line2: 0.1252, line3: 0.1252 },
  },
  {
    id: "top_addi_rare_str_2p",
    name: "STR +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "top_addi_rare_dex_2p",
    name: "DEX +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "top_addi_rare_int_2p",
    name: "INT +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "top_addi_rare_luk_2p",
    name: "LUK +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "top_addi_rare_hp_2p",
    name: "최대 HP +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "top_addi_rare_mp_2p",
    name: "최대 MP +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "top_addi_rare_def_2p",
    name: "방어력 +2%",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  {
    id: "top_addi_rare_allstat_3",
    name: "올스탯 +3",
    grade: "rare",
    probability: { line1: 4.2553, line2: 0.08344, line3: 0.08344 },
  },
  // 2-3번째 라인 상속 옵션들
  {
    id: "top_addi_rare_inherited_str_6",
    name: "STR +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "top_addi_rare_inherited_dex_6",
    name: "DEX +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "top_addi_rare_inherited_int_6",
    name: "INT +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "top_addi_rare_inherited_luk_6",
    name: "LUK +6",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "top_addi_rare_inherited_hp_60",
    name: "최대 HP +60",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "top_addi_rare_inherited_mp_60",
    name: "최대 MP +60",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "top_addi_rare_inherited_speed_4",
    name: "이동속도 +4",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "top_addi_rare_inherited_jump_4",
    name: "점프력 +4",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },
  {
    id: "top_addi_rare_inherited_att_3",
    name: "공격력 +3",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "top_addi_rare_inherited_matt_3",
    name: "마력 +3",
    grade: "rare",
    probability: { line1: 0, line2: 7.2622, line3: 7.2622 },
  },
  {
    id: "top_addi_rare_inherited_def_60",
    name: "방어력 +60",
    grade: "rare",
    probability: { line1: 0, line2: 10.8932, line3: 10.8932 },
  },

  // === 에픽 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "top_addi_epic_str_14",
    name: "STR +14",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "top_addi_epic_dex_14",
    name: "DEX +14",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "top_addi_epic_int_14",
    name: "INT +14",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "top_addi_epic_luk_14",
    name: "LUK +14",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "top_addi_epic_hp_180",
    name: "최대 HP +180",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "top_addi_epic_mp_180",
    name: "최대 MP +180",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "top_addi_epic_speed_8",
    name: "이동속도 +8",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "top_addi_epic_jump_8",
    name: "점프력 +8",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "top_addi_epic_att_11",
    name: "공격력 +11",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "top_addi_epic_matt_11",
    name: "마력 +11",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "top_addi_epic_def_120",
    name: "방어력 +120",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "top_addi_epic_str_4p",
    name: "STR +4%",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "top_addi_epic_dex_4p",
    name: "DEX +4%",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "top_addi_epic_int_4p",
    name: "INT +4%",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "top_addi_epic_luk_4p",
    name: "LUK +4%",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  {
    id: "top_addi_epic_hp_5p",
    name: "최대 HP +5%",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "top_addi_epic_mp_5p",
    name: "최대 MP +5%",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "top_addi_epic_def_4p",
    name: "방어력 +4%",
    grade: "epic",
    probability: { line1: 6, line2: 0.2857, line3: 0.2857 },
  },
  {
    id: "top_addi_epic_allstat_2p",
    name: "올스탯 +2%",
    grade: "epic",
    probability: { line1: 4, line2: 0.1905, line3: 0.1905 },
  },
  // 2-3번째 라인 상속 옵션들 (레어 등급)
  {
    id: "top_addi_epic_inherited_str_10",
    name: "STR +10",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "top_addi_epic_inherited_dex_10",
    name: "DEX +10",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "top_addi_epic_inherited_int_10",
    name: "INT +10",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "top_addi_epic_inherited_luk_10",
    name: "LUK +10",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "top_addi_epic_inherited_hp_100",
    name: "최대 HP +100",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "top_addi_epic_inherited_mp_100",
    name: "최대 MP +100",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "top_addi_epic_inherited_speed_6",
    name: "이동속도 +6",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "top_addi_epic_inherited_jump_6",
    name: "점프력 +6",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "top_addi_epic_inherited_att_10",
    name: "공격력 +10",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "top_addi_epic_inherited_matt_10",
    name: "마력 +10",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "top_addi_epic_inherited_def_100",
    name: "방어력 +100",
    grade: "epic",
    probability: { line1: 0, line2: 6.07903, line3: 6.07903 },
  },
  {
    id: "top_addi_epic_inherited_str_2p",
    name: "STR +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "top_addi_epic_inherited_dex_2p",
    name: "DEX +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "top_addi_epic_inherited_int_2p",
    name: "INT +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "top_addi_epic_inherited_luk_2p",
    name: "LUK +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "top_addi_epic_inherited_hp_2p",
    name: "최대 HP +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "top_addi_epic_inherited_mp_2p",
    name: "최대 MP +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "top_addi_epic_inherited_def_2p",
    name: "방어력 +2%",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },
  {
    id: "top_addi_epic_inherited_allstat_3",
    name: "올스탯 +3",
    grade: "epic",
    probability: { line1: 0, line2: 4.05268, line3: 4.05268 },
  },

  // === 유니크 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "top_addi_unique_str_18",
    name: "STR +18",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "top_addi_unique_dex_18",
    name: "DEX +18",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "top_addi_unique_int_18",
    name: "INT +18",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "top_addi_unique_luk_18",
    name: "LUK +18",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "top_addi_unique_hp_300",
    name: "최대 HP +300",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "top_addi_unique_mp_300",
    name: "최대 MP +300",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "top_addi_unique_att_14",
    name: "공격력 +14",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "top_addi_unique_matt_14",
    name: "마력 +14",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "top_addi_unique_str_6p",
    name: "STR +6%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "top_addi_unique_dex_6p",
    name: "DEX +6%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "top_addi_unique_int_6p",
    name: "INT +6%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "top_addi_unique_luk_6p",
    name: "LUK +6%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "top_addi_unique_hp_8p",
    name: "최대 HP +8%",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "top_addi_unique_mp_8p",
    name: "최대 MP +8%",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  {
    id: "top_addi_unique_allstat_5p",
    name: "올스탯 +5%",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "top_addi_unique_str_lv9_1",
    name: "캐릭터 기준 9레벨 당 STR +1",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "top_addi_unique_dex_lv9_1",
    name: "캐릭터 기준 9레벨 당 DEX +1",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "top_addi_unique_int_lv9_1",
    name: "캐릭터 기준 9레벨 당 INT +1",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "top_addi_unique_luk_lv9_1",
    name: "캐릭터 기준 9레벨 당 LUK +1",
    grade: "unique",
    probability: { line1: 4.08163, line2: 0.08003, line3: 0.08003 },
  },
  {
    id: "top_addi_unique_hp_recovery_20p",
    name: "HP 회복 아이템 및 회복 스킬 효율 +20%",
    grade: "unique",
    probability: { line1: 6.1224, line2: 0.12, line3: 0.12 },
  },
  // 2-3번째 라인 상속 옵션들 (에픽 등급)
  {
    id: "top_addi_unique_inherited_str_14",
    name: "STR +14",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "top_addi_unique_inherited_dex_14",
    name: "DEX +14",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "top_addi_unique_inherited_int_14",
    name: "INT +14",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "top_addi_unique_inherited_luk_14",
    name: "LUK +14",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "top_addi_unique_inherited_hp_180",
    name: "최대 HP +180",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "top_addi_unique_inherited_mp_180",
    name: "최대 MP +180",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "top_addi_unique_inherited_speed_8",
    name: "이동속도 +8",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "top_addi_unique_inherited_jump_8",
    name: "점프력 +8",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "top_addi_unique_inherited_att_11",
    name: "공격력 +11",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "top_addi_unique_inherited_matt_11",
    name: "마력 +11",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "top_addi_unique_inherited_def_120",
    name: "방어력 +120",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "top_addi_unique_inherited_str_4p",
    name: "STR +4%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "top_addi_unique_inherited_dex_4p",
    name: "DEX +4%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "top_addi_unique_inherited_int_4p",
    name: "INT +4%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "top_addi_unique_inherited_luk_4p",
    name: "LUK +4%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },
  {
    id: "top_addi_unique_inherited_hp_5p",
    name: "최대 HP +5%",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "top_addi_unique_inherited_mp_5p",
    name: "최대 MP +5%",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "top_addi_unique_inherited_def_4p",
    name: "방어력 +4%",
    grade: "unique",
    probability: { line1: 0, line2: 5.8824, line3: 5.8824 },
  },
  {
    id: "top_addi_unique_inherited_allstat_2p",
    name: "올스탯 +2%",
    grade: "unique",
    probability: { line1: 0, line2: 3.9216, line3: 3.9216 },
  },

  // === 레전드리 등급 옵션 ===
  // 1번째 라인 옵션들
  {
    id: "top_addi_legendary_str_20",
    name: "STR +20",
    grade: "legendary",
    probability: { line1: 5.2632, line2: 0.02618, line3: 0.02618 },
  },
  {
    id: "top_addi_legendary_dex_20",
    name: "DEX +20",
    grade: "legendary",
    probability: { line1: 5.2632, line2: 0.02618, line3: 0.02618 },
  },
  {
    id: "top_addi_legendary_int_20",
    name: "INT +20",
    grade: "legendary",
    probability: { line1: 5.2632, line2: 0.02618, line3: 0.02618 },
  },
  {
    id: "top_addi_legendary_luk_20",
    name: "LUK +20",
    grade: "legendary",
    probability: { line1: 5.2632, line2: 0.02618, line3: 0.02618 },
  },
  {
    id: "top_addi_legendary_hp_360",
    name: "최대 HP +360",
    grade: "legendary",
    probability: { line1: 5.2632, line2: 0.02618, line3: 0.02618 },
  },
  {
    id: "top_addi_legendary_mp_360",
    name: "최대 MP +360",
    grade: "legendary",
    probability: { line1: 5.2632, line2: 0.02618, line3: 0.02618 },
  },
  {
    id: "top_addi_legendary_att_16",
    name: "공격력 +16",
    grade: "legendary",
    probability: { line1: 3.5088, line2: 0.01746, line3: 0.01746 },
  },
  {
    id: "top_addi_legendary_matt_16",
    name: "마력 +16",
    grade: "legendary",
    probability: { line1: 3.5088, line2: 0.01746, line3: 0.01746 },
  },
  {
    id: "top_addi_legendary_str_8p",
    name: "STR +8%",
    grade: "legendary",
    probability: { line1: 3.5088, line2: 0.01746, line3: 0.01746 },
  },
  {
    id: "top_addi_legendary_dex_8p",
    name: "DEX +8%",
    grade: "legendary",
    probability: { line1: 3.5088, line2: 0.01746, line3: 0.01746 },
  },
  {
    id: "top_addi_legendary_int_8p",
    name: "INT +8%",
    grade: "legendary",
    probability: { line1: 3.5088, line2: 0.01746, line3: 0.01746 },
  },
  {
    id: "top_addi_legendary_luk_8p",
    name: "LUK +8%",
    grade: "legendary",
    probability: { line1: 3.5088, line2: 0.01746, line3: 0.01746 },
  },
  {
    id: "top_addi_legendary_hp_11p",
    name: "최대 HP +11%",
    grade: "legendary",
    probability: { line1: 5.2632, line2: 0.02618, line3: 0.02618 },
  },
  {
    id: "top_addi_legendary_mp_11p",
    name: "최대 MP +11%",
    grade: "legendary",
    probability: { line1: 5.2632, line2: 0.02618, line3: 0.02618 },
  },
  {
    id: "top_addi_legendary_crit_damage_1p",
    name: "크리티컬 데미지 +1%",
    grade: "legendary",
    probability: { line1: 3.5088, line2: 0.01746, line3: 0.01746 },
  },
  {
    id: "top_addi_legendary_allstat_6p",
    name: "올스탯 +6%",
    grade: "legendary",
    probability: { line1: 3.5088, line2: 0.01746, line3: 0.01746 },
  },
  {
    id: "top_addi_legendary_str_lv9_2",
    name: "캐릭터 기준 9레벨 당 STR +2",
    grade: "legendary",
    probability: { line1: 3.5088, line2: 0.01746, line3: 0.01746 },
  },
  {
    id: "top_addi_legendary_dex_lv9_2",
    name: "캐릭터 기준 9레벨 당 DEX +2",
    grade: "legendary",
    probability: { line1: 3.5088, line2: 0.01746, line3: 0.01746 },
  },
  {
    id: "top_addi_legendary_int_lv9_2",
    name: "캐릭터 기준 9레벨 당 INT +2",
    grade: "legendary",
    probability: { line1: 3.5088, line2: 0.01746, line3: 0.01746 },
  },
  {
    id: "top_addi_legendary_luk_lv9_2",
    name: "캐릭터 기준 9레벨 당 LUK +2",
    grade: "legendary",
    probability: { line1: 3.5088, line2: 0.01746, line3: 0.01746 },
  },
  {
    id: "top_addi_legendary_hp_recovery_30p",
    name: "HP 회복 아이템 및 회복 스킬 효율 +30%",
    grade: "legendary",
    probability: { line1: 5.2632, line2: 0.02618, line3: 0.02618 },
  },
  {
    id: "top_addi_legendary_meso_5p",
    name: "메소 획득량 +5%",
    grade: "legendary",
    probability: { line1: 5.2632, line2: 0.02618, line3: 0.02618 },
  },
  {
    id: "top_addi_legendary_drop_5p",
    name: "아이템 드롭률 +5%",
    grade: "legendary",
    probability: { line1: 5.2632, line2: 0.02618, line3: 0.02618 },
  },
  // 2-3번째 라인 상속 옵션들 (유니크 등급)
  {
    id: "top_addi_legendary_inherited_str_18",
    name: "STR +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "top_addi_legendary_inherited_dex_18",
    name: "DEX +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "top_addi_legendary_inherited_int_18",
    name: "INT +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "top_addi_legendary_inherited_luk_18",
    name: "LUK +18",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "top_addi_legendary_inherited_hp_300",
    name: "최대 HP +300",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "top_addi_legendary_inherited_mp_300",
    name: "최대 MP +300",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "top_addi_legendary_inherited_att_14",
    name: "공격력 +14",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_addi_legendary_inherited_matt_14",
    name: "마력 +14",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_addi_legendary_inherited_str_6p",
    name: "STR +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_addi_legendary_inherited_dex_6p",
    name: "DEX +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_addi_legendary_inherited_int_6p",
    name: "INT +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_addi_legendary_inherited_luk_6p",
    name: "LUK +6%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_addi_legendary_inherited_hp_8p",
    name: "최대 HP +8%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "top_addi_legendary_inherited_mp_8p",
    name: "최대 MP +8%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
  {
    id: "top_addi_legendary_inherited_allstat_5p",
    name: "올스탯 +5%",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_addi_legendary_inherited_str_lv9_1",
    name: "캐릭터 기준 9레벨 당 STR +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_addi_legendary_inherited_dex_lv9_1",
    name: "캐릭터 기준 9레벨 당 DEX +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_addi_legendary_inherited_int_lv9_1",
    name: "캐릭터 기준 9레벨 당 INT +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_addi_legendary_inherited_luk_lv9_1",
    name: "캐릭터 기준 9레벨 당 LUK +1",
    grade: "legendary",
    probability: { line1: 0, line2: 4.06133, line3: 4.06133 },
  },
  {
    id: "top_addi_legendary_inherited_hp_recovery_20p",
    name: "HP 회복 아이템 및 회복 스킬 효율 +20%",
    grade: "legendary",
    probability: { line1: 0, line2: 6.09199, line3: 6.09199 },
  },
];

// 하위 호환성을 위한 기본 옵션 (무기 옵션을 기본으로 사용)
export const ADDITIONAL_OPTIONS = WEAPON_ADDITIONAL_OPTIONS;

// 카테고리별 에디셔널 잠재능력 옵션 조회 함수
export const getAdditionalOptionsByCategory = (
  category: ItemCategory
): PotentialOptionData[] => {
  switch (category) {
    case "weapon":
      return WEAPON_ADDITIONAL_OPTIONS;
    case "hat":
      return HAT_ADDITIONAL_OPTIONS;
    case "glove":
      return GLOVE_ADDITIONAL_OPTIONS;
    case "accessory":
      return ACCESSORY_ADDITIONAL_OPTIONS;
    case "top":
      return TOP_ADDITIONAL_OPTIONS;
    default:
      // 기본값으로 무기 옵션 사용
      return WEAPON_ADDITIONAL_OPTIONS;
  }
};

// 등급별 에디셔널 옵션 필터링 함수 (기존 방식)
export const getAdditionalOptionsByGrade = (
  grade: string,
  category?: ItemCategory
) => {
  const options = category
    ? getAdditionalOptionsByCategory(category)
    : ADDITIONAL_OPTIONS;
  return options.filter((option) => option.grade === grade);
};

// line1 확률 기준으로 현재 등급/하위 등급 옵션 구분 함수
export const getAdditionalOptionsByGradeAndType = (
  grade: string,
  includeInheritedOptions: boolean = true,
  category?: ItemCategory
) => {
  const options = category
    ? getAdditionalOptionsByCategory(category)
    : ADDITIONAL_OPTIONS;
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
export const getCurrentGradeAdditionalOptions = (
  grade: string,
  category?: ItemCategory
) => {
  return getAdditionalOptionsByGradeAndType(grade, false, category);
};

// 하위 등급에서 상속된 옵션만 가져오는 함수
export const getInheritedAdditionalOptions = (
  grade: string,
  category?: ItemCategory
) => {
  const options = category
    ? getAdditionalOptionsByCategory(category)
    : ADDITIONAL_OPTIONS;
  return options.filter(
    (option) => option.grade === grade && option.probability.line1 === 0
  );
};

// 라인별 가중치 적용 함수 (기존 방식)
export const getWeightedAdditionalOptions = (
  grade: string,
  lineNumber: 1 | 2 | 3,
  category?: ItemCategory
) => {
  const options = getAdditionalOptionsByGrade(grade, category);
  const lineKey =
    `line${lineNumber}` as keyof PotentialOptionData["probability"];

  return options
    .map((option) => ({
      ...option,
      weight: option.probability[lineKey],
    }))
    .filter((option) => option.weight > 0); // 가중치가 0인 옵션 제외
};

// 라인별 가중치 적용 함수 (옵션 타입 구분 방식)
export const getWeightedAdditionalOptionsByType = (
  grade: string,
  lineNumber: 1 | 2 | 3,
  includeInheritedOptions: boolean = true
) => {
  const options = getAdditionalOptionsByGradeAndType(
    grade,
    includeInheritedOptions
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
export const isAdditionalCurrentGradeOption = (
  option: PotentialOptionData
): boolean => {
  return option.probability.line1 > 0;
};

// 옵션이 하위 등급에서 상속된 옵션인지 확인하는 헬퍼 함수 (UI 색상 구분용)
export const isAdditionalInheritedOption = (
  option: PotentialOptionData
): boolean => {
  return option.probability.line1 === 0;
};

export default ADDITIONAL_OPTIONS;
