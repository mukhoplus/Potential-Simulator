import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
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

export const PotentialPanel: React.FC<PotentialPanelProps> = ({
  title,
  grade,
  options,
  type = "poten", // 기본값
}) => {
  // 큐브 이미지 선택
  const cubeImages = {
    poten: require('../../../assets/images/poten_cube.webp'),
    addi: require('../../../assets/images/addi_cube.webp'),
  };

  const renderOption = (option: PotentialOption, index: number) => (
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
    margin: 8,
    padding: 16,
    shadowColor: MAPLE_COLORS.shadowColor,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    elevation: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  cubeImage: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: 'contain',
  },
  panelTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: MAPLE_COLORS.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 3,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "transparent",
  },
  gradeIcon: {
    fontSize: 18,
    marginRight: 12,
    textShadowColor: MAPLE_COLORS.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  optionText: {
    fontSize: 15,
    fontWeight: "600",
    flex: 1,
    textShadowColor: MAPLE_COLORS.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});
