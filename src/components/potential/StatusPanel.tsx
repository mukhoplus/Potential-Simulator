import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MAPLE_COLORS } from "../../types/common";

interface StatusPanelProps {
  totalMeso: string;
  ceilingInfo: {
    poten: { current: number; max: number };
    addi: { current: number; max: number };
  };
}

export const StatusPanel: React.FC<StatusPanelProps> = ({
  totalMeso,
  ceilingInfo,
}) => {
  return (
    <View style={styles.panel}>
      <Text style={styles.panelTitle}>💰 현황</Text>
      <Text style={styles.statusText}>총 사용 메소: {totalMeso}</Text>
      <Text style={styles.statusText}>
        천장 상태: 잠재 {ceilingInfo.poten?.current || 0}/
        {ceilingInfo.poten?.max || 0} | 에디 {ceilingInfo.addi?.current || 0}/
        {ceilingInfo.addi?.max || 0}
      </Text>
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
    color: MAPLE_COLORS.secondaryText,
    marginBottom: 8,
  },
  statusText: {
    color: MAPLE_COLORS.primaryText,
    fontSize: 14,
    marginVertical: 2,
  },
});
