import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import {
  usePotential,
  useFormattedMeso,
  useCeilingInfo,
} from "../store/AppContext";
import { usePotentialReset } from "../utils/potentialHooks";
import { MAPLE_COLORS } from "../types/common";
import { Header } from "./potential/Header";
import { PotentialPanel } from "./potential/PotentialPanel";
import { StatusPanel } from "./potential/StatusPanel";
import { ResetButtons } from "./potential/ResetButtons";

export const PotentialSimulator: React.FC = () => {
  const potential = usePotential();
  const formattedMeso = useFormattedMeso();
  const ceilingInfo = useCeilingInfo();
  const { resetPotential } = usePotentialReset();

  const handlePotenReset = () => {
    resetPotential("poten");
  };

  const handleAddiReset = () => {
    resetPotential("addi");
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="제네시스 무기 시뮬레이터" />

      <PotentialPanel
        title="잠재능력"
        grade={potential.potenGrade}
        options={potential.poten}
      />

      <PotentialPanel
        title="에디셔널 잠재능력"
        grade={potential.addiGrade}
        options={potential.addi}
      />

      <StatusPanel totalMeso={formattedMeso.total} ceilingInfo={ceilingInfo} />

      <ResetButtons
        onPotenReset={handlePotenReset}
        onAddiReset={handleAddiReset}
        potenCost={formattedMeso.potenNext}
        addiCost={formattedMeso.addiNext}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAPLE_COLORS.background,
  },
});
