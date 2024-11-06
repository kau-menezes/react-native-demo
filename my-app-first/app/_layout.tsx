import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import { Stack } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Nunitinho: require("../assets/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} ></Stack.Screen>
        <Stack.Screen name="register" options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}></Stack.Screen>
      </Stack>
    </>
  );
}
