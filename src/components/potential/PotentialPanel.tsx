import React, { useCallback, useMemo } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { PotentialOption } from "../../types/potential";
import {
  GRADE_COLORS,
  GRADE_ICONS,
  MAPLE_COLORS,
  PotentialGrade,
} from "../../types/common";

interface PotentialPanelProps {
  title: string;
  grade: PotentialGrade;
  options: PotentialOption[];
  type?: "poten" | "addi"; // 큐브 타입 구분용
}

// 화면 크기에 따른 폰트 스케일링
const { width, height } = Dimensions.get("window");
const isSmallScreen = width < 380;
const isShortScreen = height < 700;
const fontScale = isSmallScreen ? 0.9 : 1;
const heightScale = isShortScreen ? 0.8 : 1;
const scaledFontSize = (size: number) => Math.round(size * fontScale);
const scaledHeight = (size: number) => Math.round(size * heightScale);

export const PotentialPanel: React.FC<PotentialPanelProps> = ({
  title,
  grade,
  options,
  type = "poten", // 기본값
}) => {
  // 큐브 이미지 선택 - useMemo로 최적화
  const cubeImages = useMemo(
    () => ({
      poten: require("../../../assets/images/poten_cube.webp"),
      addi: require("../../../assets/images/addi_cube.webp"),
    }),
    []
  );

  const renderOption = useCallback(
    (option: PotentialOption, index: number) => (
      <View
        key={option.id}
        style={[
          styles.optionRow,
          { borderLeftColor: GRADE_COLORS[option.grade as PotentialGrade] },
        ]}
      >
        <Text
          style={[
            styles.gradeIcon,
            { color: GRADE_COLORS[option.grade as PotentialGrade] },
          ]}
        >
          {GRADE_ICONS[option.grade as PotentialGrade]}
        </Text>
        <Text
          style={[
            styles.optionText,
            { color: GRADE_COLORS[option.grade as PotentialGrade] },
          ]}
        >
          {option.name}
        </Text>
      </View>
    ),
    []
  );

  return (
    <View style={styles.panel}>
      <View style={styles.titleContainer}>
        <Image source={cubeImages[type]} style={styles.cubeImage} />
        <Text style={[styles.panelTitle, { color: GRADE_COLORS[grade] }]}>
          {title} ({grade.toUpperCase()})
        </Text>
      </View>
      {options.map(renderOption)}
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    backgroundColor: MAPLE_COLORS.panelBg,
    borderWidth: 3,
    borderColor: MAPLE_COLORS.buttonBorder,
    borderRadius: 12,
    margin: isSmallScreen || isShortScreen ? 4 : 8,
    padding: isSmallScreen || isShortScreen ? 10 : 16,
    shadowColor: MAPLE_COLORS.shadowColor,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    elevation: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: scaledHeight(8),
  },
  cubeImage: {
    width: isSmallScreen ? 20 : 24,
    height: isSmallScreen ? 20 : 24,
    marginRight: 8,
    resizeMode: "contain",
  },
  panelTitle: {
    fontSize: scaledFontSize(18),
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: MAPLE_COLORS.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: isSmallScreen || isShortScreen ? 4 : 8,
    paddingHorizontal: isSmallScreen || isShortScreen ? 8 : 12,
    marginVertical: isShortScreen ? 2 : 3,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "transparent",
  },
  gradeIcon: {
    fontSize: scaledFontSize(18),
    marginRight: isSmallScreen ? 10 : 12,
    textShadowColor: MAPLE_COLORS.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  optionText: {
    fontSize: scaledFontSize(15),
    fontWeight: "600",
    flex: 1,
    textShadowColor: MAPLE_COLORS.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});
