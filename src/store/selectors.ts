import { selector } from "recoil";
import { potentialAtom } from "./atoms/potentialAtom";
import { ceilingAtom } from "./atoms/ceilingAtom";
import { statusAtom } from "./atoms/statusAtom";
import { settingsAtom } from "./atoms/settingsAtom";
import { getCost, getCeilingCount, CEILING_COUNTS } from "../data/constants";
import { PotentialGrade, PotentialType } from "../types/common";

// 현재 재설정 비용 계산
export const currentCostSelector = selector({
  key: "currentCost",
  get: ({ get }) => {
    const potential = get(potentialAtom);

    return {
      poten: getCost("poten", potential.potenGrade),
      addi: getCost("addi", potential.addiGrade),
    };
  },
});

// 천장 정보 계산
export const ceilingInfoSelector = selector({
  key: "ceilingInfo",
  get: ({ get }) => {
    const potential = get(potentialAtom);
    const ceiling = get(ceilingAtom);

    const getNextGrade = (grade: PotentialGrade): PotentialGrade | null => {
      switch (grade) {
        case "rare":
          return "epic";
        case "epic":
          return "unique";
        case "unique":
          return "legendary";
        case "legendary":
          return null;
        default:
          return null;
      }
    };

    const getCeilingInfo = (
      type: PotentialType,
      currentGrade: PotentialGrade
    ) => {
      const nextGrade = getNextGrade(currentGrade);
      if (!nextGrade) return null;

      const ceilingKey = `${currentGrade}To${
        nextGrade.charAt(0).toUpperCase() + nextGrade.slice(1)
      }` as keyof (typeof CEILING_COUNTS)[typeof type];
      const maxCeiling = CEILING_COUNTS[type][ceilingKey];
      const currentCount = ceiling[type][ceilingKey];

      return {
        current: currentCount,
        max: maxCeiling,
        isMaxed: currentCount >= maxCeiling,
        remaining: Math.max(0, maxCeiling - currentCount),
      };
    };

    return {
      poten: getCeilingInfo("poten", potential.potenGrade),
      addi: getCeilingInfo("addi", potential.addiGrade),
    };
  },
});

// 총 통계 정보
export const totalStatsSelector = selector({
  key: "totalStats",
  get: ({ get }) => {
    const status = get(statusAtom);
    const currentCost = get(currentCostSelector);

    return {
      totalMeso: status.totalMeso,
      totalResets: status.resetCounts.poten + status.resetCounts.addi,
      averageCostPerReset:
        status.totalMeso > 0
          ? Math.floor(
              status.totalMeso /
                (status.resetCounts.poten + status.resetCounts.addi || 1)
            )
          : 0,
      nextResetCost: currentCost,
    };
  },
});

// 메이플 스타일 포맷팅
export const formattedMesoSelector = selector({
  key: "formattedMeso",
  get: ({ get }) => {
    const stats = get(totalStatsSelector);

    const formatMeso = (meso: number): string => {
      if (meso >= 100000000) {
        return `${(meso / 100000000).toFixed(1)}억`;
      } else if (meso >= 10000) {
        return `${(meso / 10000).toFixed(0)}만`;
      } else {
        return meso.toLocaleString();
      }
    };

    return {
      total: formatMeso(stats.totalMeso),
      potenNext: formatMeso(stats.nextResetCost.poten),
      addiNext: formatMeso(stats.nextResetCost.addi),
    };
  },
});
