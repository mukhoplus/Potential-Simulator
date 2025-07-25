import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MAPLE_COLORS } from "../../types/common";

interface ResetButtonsProps {
  onPotenReset: () => void;
  onAddiReset: () => void;
  potenCost: string;
  addiCost: string;
}

export const ResetButtons: React.FC<ResetButtonsProps> = ({
  onPotenReset,
  onAddiReset,
  potenCost,
  addiCost,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[
          styles.resetButton,
          { backgroundColor: MAPLE_COLORS.potenButton },
        ]}
        onPress={onPotenReset}
      >
        <Text style={styles.buttonText}>잠재능력 재설정</Text>
        <Text style={styles.buttonCost}>({potenCost})</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.resetButton,
          { backgroundColor: MAPLE_COLORS.addiButton },
        ]}
        onPress={onAddiReset}
      >
        <Text style={[styles.buttonText, { color: "#000" }]}>
          에디셔널 재설정
        </Text>
        <Text style={[styles.buttonCost, { color: "#000" }]}>({addiCost})</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 40,
  },
  resetButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: MAPLE_COLORS.secondaryText,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    elevation: 3,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: MAPLE_COLORS.primaryText,
    fontSize: 14,
    fontWeight: "bold",
  },
  buttonCost: {
    color: MAPLE_COLORS.primaryText,
    fontSize: 12,
    marginTop: 2,
  },
});
