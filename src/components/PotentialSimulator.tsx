import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  usePotential,
  useFormattedMeso,
  useCeilingInfo,
  useStatus,
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
  const status = useStatus();
  const { resetPotential } = usePotentialReset();

  const handlePotenReset = () => {
    resetPotential("poten");
  };

  const handleAddiReset = () => {
    resetPotential("addi");
  };

  // 천장 정보에 현재 등급 추가
  const enhancedCeilingInfo = {
    poten: {
      ...ceilingInfo.poten,
      currentGrade: potential.potenGrade,
    },
    addi: {
      ...ceilingInfo.addi,
      currentGrade: potential.addiGrade,
    },
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Header
        title="제네시스 무기 시뮬레이터"
        totalResetCount={status.resetCounts.poten + status.resetCounts.addi}
        totalMeso={formattedMeso.total}
        potenResetCount={status.resetCounts.poten}
        potenMeso={formattedMeso.poten}
        addiResetCount={status.resetCounts.addi}
        addiMeso={formattedMeso.addi}
      />

      <View style={styles.panelContainer}>
        <PotentialPanel
          title="잠재능력"
          grade={potential.potenGrade}
          options={potential.poten}
          type="poten"
        />

        <PotentialPanel
          title="에디셔널 잠재능력"
          grade={potential.addiGrade}
          options={potential.addi}
          type="addi"
        />

        <StatusPanel
          totalMeso={formattedMeso.total}
          potenMeso={formattedMeso.poten}
          addiMeso={formattedMeso.addi}
          ceilingInfo={enhancedCeilingInfo}
        />

        <ResetButtons
          onPotenReset={handlePotenReset}
          onAddiReset={handleAddiReset}
          potenCost={formattedMeso.potenNext}
          addiCost={formattedMeso.addiNext}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAPLE_COLORS.background,
    minWidth: 360,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  panelContainer: {
    paddingHorizontal: 4,
  },
});
