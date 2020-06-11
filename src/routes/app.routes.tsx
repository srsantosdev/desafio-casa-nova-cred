import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./../pages/Home";

import Requests from "./../pages/Requests";
import Details from "./../pages/Details";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        icon={() => (
          <MaterialCommunityIcons name="home-outline" size={20} color="black" />
        )}
        label="Home"
        onPress={() => {}}
      />
      <DrawerItem
        icon={() => (
          <MaterialIcons name="person-outline" size={20} color="black" />
        )}
        label="Perfil"
        onPress={() => {}}
      />
      <DrawerItem
        icon={() => (
          <MaterialCommunityIcons
            name="credit-card-multiple-outline"
            size={20}
            color="black"
          />
        )}
        label="Minhas Solicitações"
        onPress={() => {}}
      />
      <DrawerItem
        icon={() => (
          <MaterialCommunityIcons
            name="credit-card-plus-outline"
            size={20}
            color="black"
          />
        )}
        label="Solicitar Empréstimo"
        onPress={() => {}}
      />
      <DrawerItem
        icon={() => (
          <MaterialCommunityIcons
            name="logout-variant"
            size={20}
            color="black"
          />
        )}
        label="Sair"
        onPress={() => {}}
      />
    </DrawerContentScrollView>
  );
};

const HomeRouter: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const RequestsRouter: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Requests" component={Requests} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      initialRouteName="Home"
      keyboardDismissMode="none"
      drawerStyle={{
        backgroundColor: "#FBEBDD",
        width: 260,
        paddingTop: 30,
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeRouter} />
      <Drawer.Screen name="Request" component={RequestsRouter} />
    </Drawer.Navigator>
  );
};

export default App;
