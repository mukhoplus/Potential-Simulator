import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { clearImageCache } from "../../utils/imageCache";

interface ImageCacheManagerProps {
  showControls?: boolean; // 개발 모드에서만 표시할지 여부
}

export const ImageCacheManager: React.FC<ImageCacheManagerProps> = ({
  showControls = false,
}) => {
  const [cacheCleared, setCacheCleared] = useState(false);

  const handleClearCache = async () => {
    try {
      await clearImageCache();
      setCacheCleared(true);
      Alert.alert(
        "캐시 정리 완료",
        "이미지 캐시가 성공적으로 정리되었습니다.",
        [{ text: "확인", onPress: () => setCacheCleared(false) }]
      );
    } catch (error) {
      Alert.alert(
        "캐시 정리 실패",
        "이미지 캐시 정리 중 오류가 발생했습니다.",
        [{ text: "확인" }]
      );
    }
  };

  if (!showControls) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>이미지 캐시 관리</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleClearCache}
        disabled={cacheCleared}
      >
        <Text style={styles.buttonText}>
          {cacheCleared ? "캐시 정리됨" : "캐시 정리"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    margin: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
});
