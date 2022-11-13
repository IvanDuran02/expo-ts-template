import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { TRPCProvider } from "./utils/trpc";

import HomeScreen from "./screens/home";

// uncomment if using tRPC
export const App = () => {
  return (
    // <TRPCProvider>
    <SafeAreaProvider>
      <HomeScreen />
      <StatusBar />
    </SafeAreaProvider>
    // </TRPCProvider>
  );
};
