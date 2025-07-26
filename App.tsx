import React from "react";
import { AppProvider } from "./src/store/AppContext";
import { PotentialSimulator } from "./src/components/PotentialSimulator";
import { useImagePreloader } from "./src/utils/useImagePreloader";

export default function App() {
  // 앱 시작 시 이미지들을 프리로드
  useImagePreloader();

  return (
    <AppProvider>
      <PotentialSimulator />
    </AppProvider>
  );
}
