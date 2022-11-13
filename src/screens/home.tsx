import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex justify-center items-center w-screen h-screen">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
