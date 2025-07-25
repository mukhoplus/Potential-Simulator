import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
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
  // 큐브 이미지
  const cubeImages = {
    poten: require("../../../assets/images/poten_cube.webp"),
    addi: require("../../../assets/images/addi_cube.webp"),
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.resetButton, styles.potenButton]}
        onPress={onPotenReset}
        activeOpacity={0.8}
      >
        <View style={styles.buttonContent}>
          <Image source={cubeImages.poten} style={styles.cubeImage} />
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>잠재능력 재설정</Text>
            <Text style={styles.buttonCost}>({potenCost})</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.resetButton, styles.addiButton]}
        onPress={onAddiReset}
        activeOpacity={0.8}
      >
        <View style={styles.buttonContent}>
          <Image source={cubeImages.addi} style={styles.cubeImage} />
          <View style={styles.textContainer}>
            <Text style={[styles.buttonText, { color: "#000" }]}>
              에디셔널 재설정
            </Text>
            <Text style={[styles.buttonCost, { color: "#000" }]}>
              ({addiCost})
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  resetButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: MAPLE_COLORS.buttonBorder,
    margin: 8,
    shadowColor: MAPLE_COLORS.shadowColor,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.8,
    elevation: 6,
    flex: 1,
    alignItems: "center",
    minHeight: 60,
    justifyContent: "center",
  },
  potenButton: {
    backgroundColor: MAPLE_COLORS.potenButton,
  },
  addiButton: {
    backgroundColor: MAPLE_COLORS.addiButton,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cubeImage: {
    width: 40,
    height: 40,
    marginRight: 8,
    resizeMode: "contain",
  },
  textContainer: {
    alignItems: "center",
  },
  buttonText: {
    color: MAPLE_COLORS.primaryText,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: MAPLE_COLORS.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  buttonCost: {
    color: MAPLE_COLORS.primaryText,
    fontSize: 12,
    marginTop: 4,
    opacity: 0.9,
    textAlign: "center",
  },
});
