import { atom } from "recoil";
import { SettingsState } from "../../types/potential";
import { DEFAULT_SETTINGS } from "../../data/constants";

// 설정 상태 atom
export const settingsAtom = atom<SettingsState>({
  key: "settingsState",
  default: DEFAULT_SETTINGS,
});
