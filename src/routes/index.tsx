import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes = () => {
  const authenticate = false;

  return (
    <NavigationContainer >
      {authenticate ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
