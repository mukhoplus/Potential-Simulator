import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
}

export const PotentialPanel: React.FC<PotentialPanelProps> = ({
  title,
  grade,
  options,
}) => {
  const renderOption = (option: PotentialOption, index: number) => (
    <View key={option.id} style={styles.optionRow}>
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
      <Text style={[styles.panelTitle, { color: GRADE_COLORS[grade] }]}>
        {title} ({grade.toUpperCase()})
      </Text>
      {options.map(renderOption)}
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    backgroundColor: MAPLE_COLORS.panelBg,
    borderWidth: 2,
    borderColor: MAPLE_COLORS.borderColor,
    borderRadius: 8,
    margin: 8,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    elevation: 5,
  },
  panelTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginVertical: 2,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 4,
  },
  gradeIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  optionText: {
    fontSize: 14,
    fontWeight: "500",
  },
});
