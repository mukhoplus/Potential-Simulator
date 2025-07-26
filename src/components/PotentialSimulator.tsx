import React, { useMemo } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Platform,
} from "react-native";
import {
  usePotential,
  useFormattedMeso,
  useCeilingInfo,
  useStatus,
  useSelectedItem,
} from "../store/AppContext";
import { usePotentialReset } from "../utils/potentialHooks";
import { MAPLE_COLORS, ITEM_INFO } from "../types/common";
import { Header } from "./potential/Header";
import { PotentialPanel } from "./potential/PotentialPanel";
import { StatusPanel } from "./potential/StatusPanel";
import { ResetButtons } from "./potential/ResetButtons";

export const PotentialSimulator: React.FC = () => {
  const potential = usePotential();
  const formattedMeso = useFormattedMeso();
  const ceilingInfo = useCeilingInfo();
  const status = useStatus();
  const selectedItem = useSelectedItem();
  const { resetPotential } = usePotentialReset();

  const handlePotenReset = () => {
    resetPotential("poten");
  };

  const handleAddiReset = () => {
    resetPotential("addi");
  };

  // 천장 정보에 현재 등급 추가 - useMemo로 최적화
  const enhancedCeilingInfo = useMemo(
    () => ({
      poten: {
        ...ceilingInfo.poten,
        currentGrade: potential.potenGrade,
      },
      addi: {
        ...ceilingInfo.addi,
        currentGrade: potential.addiGrade,
      },
    }),
    [
      ceilingInfo.poten,
      ceilingInfo.addi,
      potential.potenGrade,
      potential.addiGrade,
    ]
  );

  // 헤더 높이 계산 (동적 크기 고려) - useMemo로 최적화
  const headerHeight = useMemo(() => {
    const { height } = Dimensions.get("window");
    const isShortScreen = height < 700;
    return isShortScreen ? 60 : 70;
  }, []);

  // 하단 버튼 높이 계산
  const bottomButtonHeight = useMemo(() => {
    const { width } = Dimensions.get("window");
    const isSmallScreen = width < 380;
    // 버튼 높이 + 패딩 + 보더 + 안전 영역 고려
    const baseHeight = isSmallScreen ? 70 : 80;
    // iOS의 경우 하단 여백 추가 (홈 인디케이터 영역)
    const safeAreaBottom = Platform.OS === "ios" ? 24 : 12;
    return baseHeight + safeAreaBottom;
  }, []);

  return (
    <View style={styles.container}>
      {/* 고정 헤더 */}
      <View style={styles.headerContainer}>
        <Header
          title={`${ITEM_INFO[selectedItem].name} 시뮬레이터`}
          totalResetCount={status.resetCounts.poten + status.resetCounts.addi}
          totalMeso={formattedMeso.total}
          potenResetCount={status.resetCounts.poten}
          potenMeso={formattedMeso.poten}
          addiResetCount={status.resetCounts.addi}
          addiMeso={formattedMeso.addi}
        />
      </View>

      {/* 스크롤 가능한 콘텐츠 */}
      <ScrollView
        style={[
          styles.scrollContainer,
          {
            marginTop: headerHeight,
            marginBottom: bottomButtonHeight,
          },
        ]}
        contentContainerStyle={styles.contentContainer}
      >
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
        </View>
      </ScrollView>

      {/* 하단 고정 버튼 */}
      <View
        style={[styles.bottomButtonContainer, { height: bottomButtonHeight }]}
      >
        <ResetButtons
          onPotenReset={handlePotenReset}
          onAddiReset={handleAddiReset}
          potenCost={formattedMeso.potenNext}
          addiCost={formattedMeso.addiNext}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAPLE_COLORS.background,
    minWidth: 360,
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: MAPLE_COLORS.background,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: MAPLE_COLORS.background,
  },
  contentContainer: {
    paddingBottom: 8,
  },
  panelContainer: {
    paddingHorizontal: 4,
  },
  bottomButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: MAPLE_COLORS.background,
    borderTopWidth: 2,
    borderTopColor: MAPLE_COLORS.borderColor,
    // paddingBottom: Platform.OS === "ios" ? 24 : 12,
    paddingHorizontal: 4,
    shadowColor: MAPLE_COLORS.shadowColor,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    elevation: 8,
  },
});
