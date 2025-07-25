import { useAppState } from "../store/AppContext";
import { resetPotentialWithDuplicatePrevention } from "./resetLogic";
import { PotentialType, PotentialGrade } from "../types/common";
import { LogEntry, CeilingState } from "../types/potential";

// 잠재능력 재설정 훅
export const usePotentialReset = () => {
  const { state, dispatch } = useAppState();

  const resetPotential = (type: PotentialType) => {
    const currentGrade =
      type === "poten" ? state.potential.potenGrade : state.potential.addiGrade;
    const currentCeilingCount = getCeilingCount(
      type,
      currentGrade,
      state.ceiling
    );

    const currentState = {
      grade: currentGrade,
      ceilingCount: currentCeilingCount,
      options: type === "poten" ? state.potential.poten : state.potential.addi,
    };

    // 재설정 실행
    const result = resetPotentialWithDuplicatePrevention(type, currentState);

    // 잠재능력 상태 업데이트
    const newPotential = { ...state.potential };
    if (type === "poten") {
      newPotential.poten = result.newOptions;
      newPotential.potenGrade = result.newGrade;
    } else {
      newPotential.addi = result.newOptions;
      newPotential.addiGrade = result.newGrade;
    }
    dispatch({ type: "SET_POTENTIAL", payload: newPotential });

    // 천장 카운터 업데이트
    const newCeiling = updateCeilingState(
      state.ceiling,
      type,
      currentGrade,
      result.newGrade,
      result.newCeilingCount,
      result.isGradeUp
    );
    dispatch({ type: "SET_CEILING", payload: newCeiling });

    // 통계 업데이트
    const newStatus = {
      ...state.status,
      totalMeso: state.status.totalMeso + result.cost,
      resetCounts: {
        ...state.status.resetCounts,
        [type]: state.status.resetCounts[type] + 1,
      },
      currentMeso: {
        ...state.status.currentMeso,
        [type]: state.status.currentMeso[type] + result.cost,
      },
    };
    dispatch({ type: "SET_STATUS", payload: newStatus });

    // 로그 추가
    const logEntry: LogEntry = {
      id: `log_${type}_${Date.now()}_${Math.random()
        .toString(36)
        .substr(2, 9)}`,
      timestamp: Date.now(),
      type,
      resetCount: state.status.resetCounts[type] + 1,
      cost: result.cost,
      options: result.newOptions,
      grade: result.newGrade,
      isGradeUp: result.isGradeUp,
      ceilingCount: result.newCeilingCount,
    };

    dispatch({ type: "ADD_LOG", payload: logEntry });

    return result;
  };

  return { resetPotential };
};

// 현재 등급에 해당하는 천장 카운트 가져오기
const getCeilingCount = (
  type: PotentialType,
  currentGrade: PotentialGrade,
  ceiling: CeilingState
): number => {
  const typeKey = type === "poten" ? "poten" : "addi";

  switch (currentGrade) {
    case "rare":
      return ceiling[typeKey].rareToEpic;
    case "epic":
      return ceiling[typeKey].epicToUnique;
    case "unique":
      return ceiling[typeKey].uniqueToLegendary;
    case "legendary":
      return 0; // 레전드리는 더 이상 등급업 불가
    default:
      return 0;
  }
};

// 천장 상태 업데이트
const updateCeilingState = (
  currentCeiling: CeilingState,
  type: PotentialType,
  oldGrade: PotentialGrade,
  newGrade: PotentialGrade,
  newCeilingCount: number,
  isGradeUp: boolean
): CeilingState => {
  const typeKey = type === "poten" ? "poten" : "addi";
  const updated = { ...currentCeiling };

  if (isGradeUp) {
    // 등급업 성공 시 해당 카운터 리셋
    switch (oldGrade) {
      case "rare":
        updated[typeKey] = { ...updated[typeKey], rareToEpic: 0 };
        break;
      case "epic":
        updated[typeKey] = { ...updated[typeKey], epicToUnique: 0 };
        break;
      case "unique":
        updated[typeKey] = { ...updated[typeKey], uniqueToLegendary: 0 };
        break;
    }
  } else {
    // 등급업 실패 시 해당 카운터 증가
    switch (oldGrade) {
      case "rare":
        updated[typeKey] = { ...updated[typeKey], rareToEpic: newCeilingCount };
        break;
      case "epic":
        updated[typeKey] = {
          ...updated[typeKey],
          epicToUnique: newCeilingCount,
        };
        break;
      case "unique":
        updated[typeKey] = {
          ...updated[typeKey],
          uniqueToLegendary: newCeilingCount,
        };
        break;
    }
  }

  return updated;
};
