import AsyncStorage from "@react-native-community/async-storage";
import { InMemoryCache } from "apollo-cache-inmemory";
import { PresetConfig } from "apollo-boost";

export async function getConfigClient() {
  const token = await AsyncStorage.getItem("@RNAuth:token");

  const apolloConfig: PresetConfig = {
    uri: "https://casanova-backend-staging.herokuapp.com/graphql",
    cache: new InMemoryCache(),
    headers: {
      authorization: token ? `JWT ${token}` : "",
    },
  };

  return apolloConfig;
}
