import React from "react";
import { AppProvider } from "./src/store/AppContext";
import { PotentialSimulator } from "./src/components/PotentialSimulator";

export default function App() {
  return (
    <AppProvider>
      <PotentialSimulator />
    </AppProvider>
  );
}
