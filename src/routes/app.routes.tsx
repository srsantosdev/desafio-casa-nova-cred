import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./../pages/Home";

import Requests from "./../pages/Requests";
import Details from "./../pages/Details";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeRouter: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const RequestsRouter: React.FC = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Requests" component={Requests} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeRouter} />
      <Drawer.Screen name="Request" component={RequestsRouter} />
    </Drawer.Navigator>
  );
};

export default App;
