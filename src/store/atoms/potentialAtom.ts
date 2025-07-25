import { atom } from "recoil";
import { PotentialState } from "../../types/potential";
import { DEFAULT_SETTINGS } from "../../data/constants";
import { generateRandomInitialOptions } from "../../utils/potentialLogic";

// 랜덤 초기 잠재능력 상태 생성
const getInitialPotentialState = (): PotentialState => {
  const potenGrade = DEFAULT_SETTINGS.initialPotenGrade;
  const addiGrade = DEFAULT_SETTINGS.initialAddiGrade;

  return {
    poten: generateRandomInitialOptions(potenGrade, "poten"),
    addi: generateRandomInitialOptions(addiGrade, "addi"),
    potenGrade: potenGrade,
    addiGrade: addiGrade,
  };
};

// 잠재능력 상태 atom
export const potentialAtom = atom<PotentialState>({
  key: "potentialState",
  default: getInitialPotentialState(),
});
