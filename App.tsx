import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
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

  useEffect(() => {
    async function getConfig() {
      const config = await getConfigClient();
      setConfig(config);
    }
    getConfig();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ApolloProvider client={new ApolloClient(config)}>
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
