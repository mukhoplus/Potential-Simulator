import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <View style={styles.container}>
        <Text>메이플스토리 잠재능력 시뮬레이터</Text>
        <Text>준비 중...</Text>
        <StatusBar style="auto" />
      </View>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C1810", // 메이플 스타일 배경색
    alignItems: "center",
    justifyContent: "center",
  },
});
