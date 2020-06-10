import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./../pages/Login";

const AuthRoutes: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </>
  );
};

export default AuthRoutes;
