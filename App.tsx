import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { AppLoading } from "expo";

import { NavigationContainer } from "@react-navigation/native";
import { ApolloProvider } from "@apollo/react-hooks";

import {
  Roboto_400Regular,
  Roboto_300Light,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import client from "./src/services/client";

import Routes from "./src/routes";
import { AuthProvider } from "./src/contexts/auth";

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
