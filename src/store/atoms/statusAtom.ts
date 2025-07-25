import { atom } from "recoil";
import { StatusState } from "../../types/potential";

// 초기 통계 상태
const getInitialStatusState = (): StatusState => ({
  totalMeso: 0,
  resetCounts: {
    poten: 0,
    addi: 0,
  },
  currentMeso: {
    poten: 0,
    addi: 0,
  },
});

// 통계 상태 atom
export const statusAtom = atom<StatusState>({
  key: "statusState",
  default: getInitialStatusState(),
});
