import AsyncStorage from "@react-native-community/async-storage";

export async function getConfigClient() {
  const token = await AsyncStorage.getItem("@RNAuth:token");

  const apolloConfig = {
    uri: "https://casanova-backend-staging.herokuapp.com/graphql",
    headers: {
      authorization: token ? `JWT ${token}` : "",
    },
  };

  return apolloConfig;
}
