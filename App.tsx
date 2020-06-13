import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import ApolloClient, { PresetConfig } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import {
  Roboto_400Regular,
  Roboto_300Light,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import { AuthProvider } from "./src/contexts/auth";

import { getConfigClient } from "./src/services/client";

import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_300Light,
    Roboto_700Bold,
  });

  const [config, setConfig] = useState<PresetConfig>();

  const client = new ApolloClient(config);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  async function getConfig() {
    const config = await getConfigClient();
    setConfig(config);
  }

  getConfig();

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </ApolloProvider>
  );
}
