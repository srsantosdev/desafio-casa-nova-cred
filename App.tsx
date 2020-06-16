import "intl";
import "intl/locale-data/jsonp/pt-BR";
import "react-native-gesture-handler";

import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { AppLoading } from "expo";
import AsyncStorage from "@react-native-community/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, HttpLink, ApolloLink } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

import {
  Roboto_400Regular,
  Roboto_300Light,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import { AuthProvider } from "./src/contexts/auth";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_300Light,
    Roboto_700Bold,
  });

  const [token, setToken] = useState<string>();

  useEffect(() => {
    async function getToken() {
      const storagedToken = await AsyncStorage.getItem("@RNAuth:token");
      setToken(String(storagedToken));
    }
    getToken();
  }, []);

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization: token ? `JWT ${token}` : "",
      },
    });
    return forward(operation);
  });

  const httpLink = new HttpLink({
    uri: "https://casanova-backend-staging.herokuapp.com/graphql",
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
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
