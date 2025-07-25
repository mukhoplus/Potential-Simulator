import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { MAPLE_COLORS, GRADE_COLORS, PotentialGrade } from "../../types/common";

interface StatusPanelProps {
  totalMeso: string;
  potenMeso: string;
  addiMeso: string;
  ceilingInfo: {
    poten: { current: number; max: number; currentGrade: PotentialGrade };
    addi: { current: number; max: number; currentGrade: PotentialGrade };
  };
}

export const StatusPanel: React.FC<StatusPanelProps> = ({
  totalMeso,
  potenMeso,
  addiMeso,
  ceilingInfo,
}) => {
  const [showMesoDetail, setShowMesoDetail] = useState(false);

  const getNextGradeColor = (currentGrade: PotentialGrade): string => {
    switch (currentGrade) {
      case "rare":
        return GRADE_COLORS.epic;
      case "epic":
        return GRADE_COLORS.unique;
      case "unique":
        return GRADE_COLORS.legendary;
      case "legendary":
        return GRADE_COLORS.legendary; // 이미 최고 등급
      default:
        return MAPLE_COLORS.successColor;
    }
  };

  const renderCeilingStatus = (
    type: "poten" | "addi",
    current: number,
    max: number,
    currentGrade: PotentialGrade
  ) => {
    const percentage = max > 0 ? (current / max) * 100 : 0;
    const isNearCeiling = percentage > 80;
    const typeText = type === "poten" ? "잠재" : "에디";
    const nextGradeColor = getNextGradeColor(currentGrade);

    return (
      <View style={styles.ceilingRow}>
        <Text style={styles.ceilingLabel}>{typeText} 천장:</Text>
        <View style={styles.ceilingBar}>
          <View
            style={[
              styles.ceilingProgress,
              {
                width: `${percentage}%`,
                backgroundColor: nextGradeColor,
              },
            ]}
          />
        </View>
        <Text
          style={[
            styles.ceilingText,
            {
              color: isNearCeiling
                ? MAPLE_COLORS.warningColor
                : MAPLE_COLORS.primaryText,
            },
          ]}
        >
          {current}/{max}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.panel}>
      <Text style={styles.panelTitle}>💰 현황</Text>

      <TouchableOpacity
        style={styles.mesoRow}
        onPress={() => setShowMesoDetail(true)}
        activeOpacity={0.7}
      >
        <Text style={styles.mesoLabel}>총 사용 메소:</Text>
        <View style={styles.mesoValueContainer}>
          <Text style={styles.mesoValue}>{totalMeso}</Text>
          <Text style={styles.tapHint}>👆 자세히</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.ceilingContainer}>
        <Text style={styles.ceilingTitle}>천장 상태</Text>
        {renderCeilingStatus(
          "poten",
          ceilingInfo.poten?.current || 0,
          ceilingInfo.poten?.max || 0,
          ceilingInfo.poten?.currentGrade || "rare"
        )}
        {renderCeilingStatus(
          "addi",
          ceilingInfo.addi?.current || 0,
          ceilingInfo.addi?.max || 0,
          ceilingInfo.addi?.currentGrade || "rare"
        )}
      </View>

      {/* 메소 세부정보 모달 */}
      <Modal
        visible={showMesoDetail}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowMesoDetail(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>💰 사용 메소 세부 정보</Text>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>총 사용 메소:</Text>
              <Text style={styles.detailValue}>{totalMeso}</Text>
            </View>

            <View style={styles.detailSeparator} />

            <View style={styles.detailRow}>
              <Text
                style={[
                  styles.detailLabel,
                  { color: MAPLE_COLORS.potenButton },
                ]}
              >
                잠재능력:
              </Text>
              <Text style={styles.detailValue}>{potenMeso}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text
                style={[styles.detailLabel, { color: MAPLE_COLORS.addiButton }]}
              >
                에디셔널:
              </Text>
              <Text style={styles.detailValue}>{addiMeso}</Text>
            </View>

            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setShowMesoDetail(false)}
            >
              <Text style={styles.modalCloseText}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  panelTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: MAPLE_COLORS.secondaryText,
    marginBottom: 12,
    textAlign: "center",
    textShadowColor: MAPLE_COLORS.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  mesoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "transparent",
  },
  mesoLabel: {
    color: MAPLE_COLORS.primaryText,
    fontSize: 16,
    fontWeight: "500",
  },
  mesoValueContainer: {
    alignItems: "flex-end",
  },
  mesoValue: {
    color: MAPLE_COLORS.secondaryText,
    fontSize: 16,
    fontWeight: "bold",
  },
  tapHint: {
    color: MAPLE_COLORS.primaryText,
    fontSize: 10,
    opacity: 0.7,
    marginTop: 2,
  },
  ceilingContainer: {
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 8,
    padding: 12,
  },
  ceilingTitle: {
    color: MAPLE_COLORS.primaryText,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  ceilingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  ceilingLabel: {
    color: MAPLE_COLORS.primaryText,
    fontSize: 14,
    fontWeight: "500",
    width: 60,
  },
  ceilingBar: {
    flex: 1,
    height: 16,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 8,
    marginHorizontal: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: MAPLE_COLORS.borderColor,
  },
  ceilingProgress: {
    height: "100%",
    borderRadius: 7,
  },
  ceilingText: {
    fontSize: 14,
    fontWeight: "bold",
    width: 50,
    textAlign: "right",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: MAPLE_COLORS.panelBg,
    borderRadius: 12,
    padding: 20,
    margin: 20,
    minWidth: "80%",
    borderWidth: 3,
    borderColor: MAPLE_COLORS.buttonBorder,
  },
  modalTitle: {
    color: MAPLE_COLORS.secondaryText,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  detailLabel: {
    color: MAPLE_COLORS.primaryText,
    fontSize: 16,
    fontWeight: "500",
  },
  detailValue: {
    color: MAPLE_COLORS.secondaryText,
    fontSize: 16,
    fontWeight: "bold",
  },
  detailSeparator: {
    height: 1,
    backgroundColor: MAPLE_COLORS.borderColor,
    marginVertical: 8,
  },
  modalCloseButton: {
    backgroundColor: MAPLE_COLORS.dangerColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignSelf: "center",
    marginTop: 16,
    borderWidth: 2,
    borderColor: MAPLE_COLORS.buttonBorder,
  },
  modalCloseText: {
    color: MAPLE_COLORS.primaryText,
    fontSize: 16,
    fontWeight: "bold",
  },
});
