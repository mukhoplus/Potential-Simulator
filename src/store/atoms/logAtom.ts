import { atom } from "recoil";
import { LogEntry } from "../../types/potential";

// 로그 상태 atom
export const logAtom = atom<LogEntry[]>({
  key: "logState",
  default: [],
});
