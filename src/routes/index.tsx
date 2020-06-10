import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Stack = createStackNavigator();

const Routes = () => {
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {authenticate ? (
          <Stack.Screen name="App" component={AppRoutes} />
        ) : (
          <Stack.Screen name="Auth" component={AuthRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
