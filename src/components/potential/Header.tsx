import React, { useState, useCallback, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  Dimensions,
  Image,
  Linking,
} from "react-native";
import {
  MAPLE_COLORS,
  GRADE_COLORS,
  PotentialGrade,
  ITEM_INFO,
  ItemType,
} from "../../types/common";
import { useLog, useSelectedItem, useItemChange } from "../../store/AppContext";
import { LogEntry } from "../../types/potential";

interface HeaderProps {
  title: string;
  totalResetCount: number;
  totalMeso: string;
  potenResetCount: number;
  potenMeso: string;
  addiResetCount: number;
  addiMeso: string;
}

// 화면 크기에 따른 폰트 스케일링
const { width, height } = Dimensions.get("window");
const isSmallScreen = width < 380; // 작은 화면 기준
const isShortScreen = height < 700; // 짧은 화면 기준
const fontScale = isSmallScreen ? 0.9 : 1; // 작은 화면에서 10% 축소
const heightScale = isShortScreen ? 0.8 : 1; // 짧은 화면에서 20% 축소

const scaledFontSize = (size: number) => Math.round(size * fontScale);
const scaledHeight = (size: number) => Math.round(size * heightScale);

// 아이템 이미지 리소스
const ITEM_IMAGES = {
  gene_wep: require("../../../assets/images/gene_wep.webp"),
  glove: require("../../../assets/images/glove.png"),
  hat: require("../../../assets/images/hat.png"),
  accessory: require("../../../assets/images/accessory.png"),
  topwear: require("../../../assets/images/topwear.png"),
} as const;

export const Header: React.FC<HeaderProps> = ({
  title,
  totalResetCount,
  totalMeso,
  potenResetCount,
  potenMeso,
  addiResetCount,
  addiMeso,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogModal, setShowLogModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "poten" | "addi">("all");
  const log = useLog();
  const selectedItem = useSelectedItem();
  const { changeItem } = useItemChange();

  const renderLogEntry = useCallback((entry: LogEntry) => {
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
  }, []);

  // 탭에 따라 필터링된 로그 가져오기 - useMemo로 최적화
  const filteredLogs = useMemo(() => {
    switch (activeTab) {
      case "poten":
        return log.filter((entry) => entry.type === "poten");
      case "addi":
        return log.filter((entry) => entry.type === "addi");
      default:
        return log;
    }
  }, [log, activeTab]);

  // 탭 렌더링
  const renderTabButton = (
    tabType: "all" | "poten" | "addi",
    label: string
  ) => {
    const isActive = activeTab === tabType;
    const tabColor =
      tabType === "poten"
        ? MAPLE_COLORS.potenButton
        : tabType === "addi"
        ? MAPLE_COLORS.addiButton
        : MAPLE_COLORS.primaryText;

    return (
      <TouchableOpacity
        key={tabType}
        style={[
          styles.tabButton,
          isActive && styles.tabButtonActive,
          isActive && { borderBottomColor: tabColor },
        ]}
        onPress={() => setActiveTab(tabType)}
      >
        <Text
          style={[
            styles.tabButtonText,
            isActive && styles.tabButtonTextActive,
            isActive && { color: tabColor },
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.header}>
        <View style={styles.placeholder} />

        <View style={styles.titleContainer}>
          <Image
            source={ITEM_IMAGES[selectedItem]}
            style={styles.titleItemIcon}
            resizeMode="contain"
          />
          <Text style={styles.title}>{title}</Text>
        </View>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setShowMenu(!showMenu)}
        >
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* 햄버거 메뉴 */}
      {showMenu && (
        <View style={styles.menuOverlay}>
          <View style={styles.menu}>
            {/* 아이템 선택 메뉴 */}
            {(Object.keys(ITEM_INFO) as ItemType[]).map((itemType) => (
              <TouchableOpacity
                key={itemType}
                style={[
                  styles.menuItem,
                  selectedItem === itemType && styles.selectedMenuItem,
                ]}
                onPress={() => {
                  changeItem(itemType);
                  setShowMenu(false);
                }}
              >
                <View style={styles.menuItemContent}>
                  <Image
                    source={ITEM_IMAGES[itemType]}
                    style={styles.itemIcon}
                  />
                  <Text
                    style={[
                      styles.menuItemText,
                      selectedItem === itemType && styles.selectedMenuItemText,
                    ]}
                  >
                    {ITEM_INFO[itemType].name}
                    {selectedItem === itemType && " ✓"}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}

            {/* 구분선 */}
            <View style={styles.menuSeparator} />

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
              onPress={async () => {
                try {
                  await Linking.openURL("https://made-by-mukho.github.io");
                } catch (error) {
                  console.warn("링크를 열 수 없습니다:", error);
                }
                setShowMenu(false);
              }}
            >
              <Text style={styles.menuItemText}>👨‍💻 개발자 정보</Text>
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

            {/* 통계 섹션 */}
            <View style={styles.statisticsSection}>
              <Text style={styles.statisticsTitle}>📊 통계</Text>

              <View style={styles.statisticsContainer}>
                <View style={styles.statisticsRow}>
                  <Text style={styles.statisticsLabel}>총 재설정:</Text>
                  <Text style={styles.statisticsValue}>
                    {totalResetCount}회
                  </Text>
                </View>
                <View style={styles.statisticsRow}>
                  <Text style={styles.statisticsLabel}>총 사용 메소:</Text>
                  <Text style={styles.statisticsValue}>{totalMeso}</Text>
                </View>

                <View style={styles.statisticsSeparator} />

                <View style={styles.statisticsRow}>
                  <Text
                    style={[
                      styles.statisticsLabel,
                      { color: MAPLE_COLORS.potenButton },
                    ]}
                  >
                    잠재능력:
                  </Text>
                  <Text style={styles.statisticsValue}>
                    {potenResetCount}회 / {potenMeso}
                  </Text>
                </View>

                <View style={styles.statisticsRow}>
                  <Text
                    style={[
                      styles.statisticsLabel,
                      { color: MAPLE_COLORS.addiButton },
                    ]}
                  >
                    에디셔널:
                  </Text>
                  <Text style={styles.statisticsValue}>
                    {addiResetCount}회 / {addiMeso}
                  </Text>
                </View>
              </View>
            </View>

            {/* 탭 버튼들 */}
            <View style={styles.tabContainer}>
              {renderTabButton("all", "전체")}
              {renderTabButton("poten", "잠재능력")}
              {renderTabButton("addi", "에디셔널")}
            </View>

            <ScrollView style={styles.logScroll}>
              {filteredLogs.length === 0 ? (
                <Text style={styles.noLogText}>
                  {activeTab === "all"
                    ? "아직 재설정 기록이 없습니다."
                    : `${
                        activeTab === "poten" ? "잠재능력" : "에디셔널"
                      } 재설정 기록이 없습니다.`}
                </Text>
              ) : (
                filteredLogs.map(renderLogEntry)
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
    paddingTop: isSmallScreen ? scaledHeight(4) : scaledHeight(6),
    paddingHorizontal: isSmallScreen ? 12 : 16,
    paddingBottom: isSmallScreen ? scaledHeight(6) : scaledHeight(8),
    backgroundColor: MAPLE_COLORS.headerBg,
    borderBottomWidth: 3,
    borderBottomColor: MAPLE_COLORS.secondaryText,
    shadowColor: MAPLE_COLORS.shadowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 8,
  },
  menuButton: {
    padding: 8,
  },
  menuIcon: {
    fontSize: scaledFontSize(20),
    color: MAPLE_COLORS.primaryText,
  },
  title: {
    fontSize: scaledFontSize(18),
    fontWeight: "bold",
    color: MAPLE_COLORS.primaryText,
    textAlign: "center",
    marginLeft: 8,
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titleItemIcon: {
    width: scaledHeight(24),
    height: scaledHeight(24),
  },
  placeholder: {
    width: 36,
  },
  menuOverlay: {
    position: "absolute",
    top: 80,
    right: 16,
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
  selectedMenuItem: {
    backgroundColor: MAPLE_COLORS.borderColor,
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  menuItemText: {
    color: MAPLE_COLORS.primaryText,
    fontSize: scaledFontSize(14),
    fontWeight: "500",
  },
  selectedMenuItemText: {
    color: MAPLE_COLORS.secondaryText,
    fontWeight: "bold",
  },
  menuSeparator: {
    height: 1,
    backgroundColor: MAPLE_COLORS.borderColor,
    marginVertical: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    height: isShortScreen ? "85%" : "80%",
    maxHeight: height * 0.9,
    backgroundColor: MAPLE_COLORS.background,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: MAPLE_COLORS.borderColor,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: isShortScreen ? 12 : 16,
    borderBottomWidth: 1,
    borderBottomColor: MAPLE_COLORS.borderColor,
  },
  modalTitle: {
    fontSize: scaledFontSize(18),
    fontWeight: "bold",
    color: MAPLE_COLORS.primaryText,
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    fontSize: scaledFontSize(18),
    color: MAPLE_COLORS.primaryText,
  },
  logScroll: {
    flex: 1,
    padding: isSmallScreen || isShortScreen ? 10 : 16,
  },
  logEntry: {
    backgroundColor: MAPLE_COLORS.panelBg,
    padding: isSmallScreen || isShortScreen ? 8 : 12,
    marginBottom: isSmallScreen || isShortScreen ? 4 : 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: MAPLE_COLORS.borderColor,
  },
  logTime: {
    color: MAPLE_COLORS.secondaryText,
    fontSize: scaledFontSize(12),
    marginBottom: 4,
  },
  logText: {
    color: MAPLE_COLORS.primaryText,
    fontSize: scaledFontSize(14),
    fontWeight: "500",
  },
  logGrade: {
    color: MAPLE_COLORS.primaryText,
    fontSize: scaledFontSize(12),
    marginTop: 4,
  },
  logOption: {
    color: MAPLE_COLORS.secondaryText,
    fontSize: scaledFontSize(12),
    marginLeft: 8,
  },
  noLogText: {
    color: MAPLE_COLORS.secondaryText,
    fontSize: scaledFontSize(14),
    textAlign: "center",
    marginTop: 32,
  },
  statisticsSection: {
    borderBottomWidth: 1,
    borderBottomColor: MAPLE_COLORS.borderColor,
    paddingBottom: scaledHeight(12),
    marginBottom: scaledHeight(12),
  },
  statisticsTitle: {
    color: MAPLE_COLORS.secondaryText,
    fontSize: scaledFontSize(16),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: scaledHeight(8),
  },
  statisticsContainer: {
    paddingHorizontal: isSmallScreen || isShortScreen ? 10 : 16,
  },
  statisticsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: isShortScreen ? 2 : 4,
  },
  statisticsLabel: {
    color: MAPLE_COLORS.primaryText,
    fontSize: scaledFontSize(14),
    fontWeight: "500",
  },
  statisticsValue: {
    color: MAPLE_COLORS.secondaryText,
    fontSize: scaledFontSize(14),
    fontWeight: "bold",
  },
  statisticsSeparator: {
    height: 1,
    backgroundColor: MAPLE_COLORS.borderColor,
    marginVertical: 8,
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: MAPLE_COLORS.borderColor,
    marginBottom: 0,
  },
  tabButton: {
    flex: 1,
    paddingVertical: isSmallScreen || isShortScreen ? 8 : 12,
    paddingHorizontal: isSmallScreen || isShortScreen ? 10 : 16,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  tabButtonActive: {
    borderBottomWidth: 2,
  },
  tabButtonText: {
    color: MAPLE_COLORS.secondaryText,
    fontSize: scaledFontSize(14),
    fontWeight: "500",
  },
  tabButtonTextActive: {
    fontWeight: "bold",
  },
});
