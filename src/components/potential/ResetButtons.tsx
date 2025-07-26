import React, { useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Image } from "expo-image";
import { MAPLE_COLORS } from "../../types/common";
import { getImageCacheProps } from "../../utils/imageCache";

interface ResetButtonsProps {
  onPotenReset: () => void;
  onAddiReset: () => void;
  potenCost: string;
  addiCost: string;
}

// 화면 크기에 따른 스케일링
const { width, height } = Dimensions.get("window");
const isSmallScreen = width < 380;
const isShortScreen = height < 700;
const fontScale = isSmallScreen ? 0.9 : 1;
const heightScale = isShortScreen ? 0.8 : 1;
const scaledFontSize = (size: number) => Math.round(size * fontScale);
const scaledHeight = (size: number) => Math.round(size * heightScale);

export const ResetButtons: React.FC<ResetButtonsProps> = ({
  onPotenReset,
  onAddiReset,
  potenCost,
  addiCost,
}) => {
  // 큐브 이미지 - useMemo로 메모이제이션하여 불필요한 재생성 방지
  const cubeImages = useMemo(
    () => ({
      poten: require("../../../assets/images/poten_cube.webp"),
      addi: require("../../../assets/images/addi_cube.webp"),
    }),
    []
  );

  // 이미지 캐시 설정
  const imageCacheProps = useMemo(() => getImageCacheProps(), []);

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.resetButton, styles.potenButton]}
        onPress={onPotenReset}
        activeOpacity={0.8}
      >
        <View style={styles.buttonContent}>
          <Image
            source={cubeImages.poten}
            style={styles.cubeImage}
            {...imageCacheProps}
          />
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
          <Image
            source={cubeImages.addi}
            style={styles.cubeImage}
            {...imageCacheProps}
          />
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
    marginTop: 0,
    marginBottom: 0,
    paddingHorizontal: isSmallScreen || isShortScreen ? 4 : 8,
    paddingVertical: isSmallScreen || isShortScreen ? 4 : 8,
  },
  resetButton: {
    paddingHorizontal: isSmallScreen || isShortScreen ? 12 : 20,
    paddingVertical: isSmallScreen || isShortScreen ? 8 : 12,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: MAPLE_COLORS.buttonBorder,
    margin: isSmallScreen || isShortScreen ? 2 : 4,
    shadowColor: MAPLE_COLORS.shadowColor,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.8,
    elevation: 6,
    flex: 1,
    alignItems: "center",
    minHeight: isSmallScreen || isShortScreen ? 45 : 60,
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
    width: isSmallScreen || isShortScreen ? 28 : 40,
    height: isSmallScreen || isShortScreen ? 28 : 40,
    marginRight: isSmallScreen || isShortScreen ? 4 : 8,
    resizeMode: "contain",
  },
  textContainer: {
    alignItems: "center",
  },
  buttonText: {
    color: MAPLE_COLORS.primaryText,
    fontSize: scaledFontSize(15),
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: MAPLE_COLORS.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  buttonCost: {
    color: MAPLE_COLORS.primaryText,
    fontSize: scaledFontSize(12),
    marginTop: 4,
    opacity: 0.9,
    textAlign: "center",
  },
});
