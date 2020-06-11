import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { AppLoading } from "expo";
import {
  Roboto_400Regular,
  Roboto_300Light,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_300Light,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
