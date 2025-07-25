import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";
import { MAPLE_COLORS, GRADE_COLORS, PotentialGrade } from "../../types/common";
import { useLog } from "../../store/AppContext";
import { LogEntry } from "../../types/potential";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogModal, setShowLogModal] = useState(false);
  const log = useLog();

  const renderLogEntry = (entry: LogEntry) => {
    const date = new Date(entry.timestamp).toLocaleTimeString();
    const gradeUpText = entry.isGradeUp ? " (등급업!)" : "";

    return (
      <View key={entry.id} style={styles.logEntry}>
        <Text style={styles.logTime}>{date}</Text>
        <Text style={styles.logText}>
          {entry.type === "poten" ? "잠재" : "에디"} #{entry.resetCount} -{" "}
          {entry.cost.toLocaleString()}메소
        </Text>
        <Text
          style={[
            styles.logGrade,
            { color: GRADE_COLORS[entry.grade as PotentialGrade] },
          ]}
        >
          {entry.grade.toUpperCase()}
          {gradeUpText}
        </Text>
        {entry.options.map((option, index) => (
          <Text
            key={index}
            style={[
              styles.logOption,
              { color: GRADE_COLORS[option.grade as PotentialGrade] },
            ]}
          >
            • {option.name}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setShowMenu(!showMenu)}
        >
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.placeholder} />
      </View>

      {/* 햄버거 메뉴 */}
      {showMenu && (
        <View style={styles.menuOverlay}>
          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setShowLogModal(true);
                setShowMenu(false);
              }}
            >
              <Text style={styles.menuItemText}>📜 로그 보기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => setShowMenu(false)}
            >
              <Text style={styles.menuItemText}>❌ 닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* 로그 모달 */}
      <Modal
        visible={showLogModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowLogModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>재설정 로그</Text>
              <TouchableOpacity
                onPress={() => setShowLogModal(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.logScroll}>
              {log.length === 0 ? (
                <Text style={styles.noLogText}>
                  아직 재설정 기록이 없습니다.
                </Text>
              ) : (
                log.map(renderLogEntry)
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 20,
    backgroundColor: MAPLE_COLORS.panelBg,
    borderBottomWidth: 2,
    borderBottomColor: MAPLE_COLORS.borderColor,
  },
  menuButton: {
    padding: 8,
  },
  menuIcon: {
    fontSize: 20,
    color: MAPLE_COLORS.primaryText,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: MAPLE_COLORS.primaryText,
    flex: 1,
    textAlign: "center",
  },
  placeholder: {
    width: 36,
  },
  menuOverlay: {
    position: "absolute",
    top: 80,
    left: 16,
    zIndex: 1000,
  },
  menu: {
    backgroundColor: MAPLE_COLORS.panelBg,
    borderWidth: 2,
    borderColor: MAPLE_COLORS.borderColor,
    borderRadius: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  menuItemText: {
    color: MAPLE_COLORS.primaryText,
    fontSize: 14,
    fontWeight: "500",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    height: "80%",
    backgroundColor: MAPLE_COLORS.background,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: MAPLE_COLORS.borderColor,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: MAPLE_COLORS.borderColor,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: MAPLE_COLORS.primaryText,
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    fontSize: 18,
    color: MAPLE_COLORS.primaryText,
  },
  logScroll: {
    flex: 1,
    padding: 16,
  },
  logEntry: {
    backgroundColor: MAPLE_COLORS.panelBg,
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: MAPLE_COLORS.borderColor,
  },
  logTime: {
    color: MAPLE_COLORS.secondaryText,
    fontSize: 12,
    marginBottom: 4,
  },
  logText: {
    color: MAPLE_COLORS.primaryText,
    fontSize: 14,
    fontWeight: "500",
  },
  logGrade: {
    color: MAPLE_COLORS.primaryText,
    fontSize: 12,
    marginTop: 4,
  },
  logOption: {
    color: MAPLE_COLORS.secondaryText,
    fontSize: 12,
    marginLeft: 8,
  },
  noLogText: {
    color: MAPLE_COLORS.secondaryText,
    fontSize: 14,
    textAlign: "center",
    marginTop: 32,
  },
});
