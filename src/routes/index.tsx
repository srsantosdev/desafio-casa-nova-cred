import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="App" component={AppRoutes} />
        <Stack.Screen name="Auth" component={AuthRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
