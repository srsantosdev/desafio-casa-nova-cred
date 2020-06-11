import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
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
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{ alignItems: "flex-end", paddingRight: 20, marginBottom: 10 }}
      >
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
        >
          <Ionicons name="ios-close" size={35} color="black" />
        </TouchableOpacity>
      </View>

      <DrawerItemList {...props} />
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
          <MaterialIcons name="person-outline" size={20} color="black" />
        )}
        label="Perfil"
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
    <Stack.Navigator headerMode="none">
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
      drawerContentOptions={{
        activeBackgroundColor: "#F8E4D4",
        activeTintColor: "#F59019",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeRouter}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={20}
              color={focused ? "#F59019" : "#000"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Request"
        component={RequestsRouter}
        options={{
          drawerLabel: "Minhas Solicitações",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="credit-card-multiple-outline"
              size={20}
              color={focused ? "#F59019" : "#000"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default App;
