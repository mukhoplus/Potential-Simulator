import React, { createContext, useContext, useReducer, ReactNode } from "react";
import {
  PotentialState,
  CeilingState,
  StatusState,
  LogEntry,
} from "../types/potential";
import { PotentialGrade, ItemType } from "../types/common";
import { DEFAULT_SETTINGS } from "../data/constants";
import { generateRandomInitialOptions } from "../utils/potentialLogic";

// 전체 앱 상태 타입
interface AppState {
  potential: PotentialState;
  ceiling: CeilingState;
  status: StatusState;
  log: LogEntry[];
  selectedItem: ItemType;
}

// 액션 타입들
type AppAction =
  | { type: "SET_POTENTIAL"; payload: PotentialState }
  | { type: "SET_CEILING"; payload: CeilingState }
  | { type: "SET_STATUS"; payload: StatusState }
  | { type: "ADD_LOG"; payload: LogEntry }
  | { type: "CLEAR_LOG" }
  | { type: "RESET_ALL" }
  | { type: "SET_SELECTED_ITEM"; payload: ItemType }
  | { type: "RESET_WITH_ITEM"; payload: ItemType };

// 초기 상태 생성
const createInitialState = (): AppState => {
  const potenGrade = DEFAULT_SETTINGS.initialPotenGrade;
  const addiGrade = DEFAULT_SETTINGS.initialAddiGrade;

  return {
    potential: {
      poten: generateRandomInitialOptions(potenGrade, "poten"),
      addi: generateRandomInitialOptions(addiGrade, "addi"),
      potenGrade: potenGrade,
      addiGrade: addiGrade,
    },
    ceiling: {
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
    },
    status: {
      totalMeso: 0,
      resetCounts: {
        poten: 0,
        addi: 0,
      },
      currentMeso: {
        poten: 0,
        addi: 0,
      },
    },
    log: [],
    selectedItem: "gene_wep",
  };
};

// 리듀서 함수
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "SET_POTENTIAL":
      return { ...state, potential: action.payload };
    case "SET_CEILING":
      return { ...state, ceiling: action.payload };
    case "SET_STATUS":
      return { ...state, status: action.payload };
    case "ADD_LOG":
      return { ...state, log: [action.payload, ...state.log] };
    case "CLEAR_LOG":
      return { ...state, log: [] };
    case "SET_SELECTED_ITEM":
      return { ...state, selectedItem: action.payload };
    case "RESET_WITH_ITEM":
      return { ...createInitialState(), selectedItem: action.payload };
    case "RESET_ALL":
      return createInitialState();
    default:
      return state;
  }
};

// Context 생성
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

// Provider 컴포넌트
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(appReducer, null, createInitialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// 커스텀 훅
export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used within AppProvider");
  }
  return context;
};

// 개별 상태 접근 훅들
export const usePotential = () => {
  const { state } = useAppState();
  return state.potential;
};

export const useCeiling = () => {
  const { state } = useAppState();
  return state.ceiling;
};

export const useStatus = () => {
  const { state } = useAppState();
  return state.status;
};

export const useLog = () => {
  const { state } = useAppState();
  return state.log;
};

export const useSelectedItem = () => {
  const { state } = useAppState();
  return state.selectedItem;
};

// 아이템 변경 훅
export const useItemChange = () => {
  const { dispatch } = useAppState();

  const changeItem = (newItem: ItemType) => {
    // 모든 상태를 초기화하고 새로운 아이템을 설정
    dispatch({
      type: "RESET_WITH_ITEM",
      payload: newItem,
    });
  };

  return { changeItem };
};

// 계산된 값들
export const useFormattedMeso = () => {
  const status = useStatus();
  const potential = usePotential();

  const formatMeso = (amount: number): string => {
    if (amount >= 100000000) {
      const billions = amount / 100000000;
      return billions % 1 === 0 ? `${billions}억` : `${billions.toFixed(1)}억`;
    } else if (amount >= 10000) {
      const tenThousands = amount / 10000;
      return tenThousands % 1 === 0
        ? `${tenThousands}만`
        : `${tenThousands.toFixed(1)}만`;
    }
    return amount.toLocaleString();
  };

  // 다음 재설정 비용 계산 (현재 등급에 따른 실제 비용)
  const getNextCost = (type: "poten" | "addi"): string => {
    const { RESET_COSTS } = require("../data/constants");
    const currentGrade =
      type === "poten" ? potential.potenGrade : potential.addiGrade;
    const cost = RESET_COSTS[type][currentGrade];
    return formatMeso(cost);
  };

  return {
    total: formatMeso(status.totalMeso),
    poten: formatMeso(status.currentMeso.poten),
    addi: formatMeso(status.currentMeso.addi),
    potenNext: getNextCost("poten"),
    addiNext: getNextCost("addi"),
    raw: status,
  };
};

// 천장 정보 계산
export const useCeilingInfo = () => {
  const potential = usePotential();
  const ceiling = useCeiling();

  const getCeilingInfo = (type: "poten" | "addi") => {
    const { CEILING_COUNTS } = require("../data/constants");
    const grade = type === "poten" ? potential.potenGrade : potential.addiGrade;
    const ceilingData = ceiling[type];

    switch (grade) {
      case "rare":
        return {
          current: ceilingData.rareToEpic,
          max: CEILING_COUNTS[type].rareToEpic,
        };
      case "epic":
        return {
          current: ceilingData.epicToUnique,
          max: CEILING_COUNTS[type].epicToUnique,
        };
      case "unique":
        return {
          current: ceilingData.uniqueToLegendary,
          max: CEILING_COUNTS[type].uniqueToLegendary,
        };
      case "legendary":
        return { current: 0, max: 0 };
      default:
        return { current: 0, max: 0 };
    }
  };

  return {
    poten: getCeilingInfo("poten"),
    addi: getCeilingInfo("addi"),
  };
};
