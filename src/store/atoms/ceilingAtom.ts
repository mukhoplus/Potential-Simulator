import { atom } from "recoil";
import { CeilingState } from "../../types/potential";

// 초기 천장 상태
const getInitialCeilingState = (): CeilingState => ({
  poten: {
    rareToEpic: 0,
    epicToUnique: 0,
    uniqueToLegendary: 0,
  },
  addi: {
    rareToEpic: 0,
    epicToUnique: 0,
    uniqueToLegendary: 0,
  },
});

// 천장 카운터 상태 atom
export const ceilingAtom = atom<CeilingState>({
  key: "ceilingState",
  default: getInitialCeilingState(),
});
