import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import QrScreen from "./screens/QrScreen";
import HistoryScreen from "./screens/HistoryScreen";
import ButtonHome from "./components/ButtonHome";
import ButtonQR from "./components/ButtonQR";
import ButtonHistory from "./components/ButtonHistory";
import { colors } from "./components/colors";
import { ScreenHeight, ScreenWidth } from "./components/shared";

export type RootStackParams = {
  Home: undefined;
  QR: undefined;
  History: undefined;
};

const RootStack = createBottomTabNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          // headerShown: false,
          // tabBarShowLabel: false,
          tabBarStyle: {
            // position: "absolute",
            // left: 0,
            // right: 0,
            // bottom: 0,
            // borderRadius: 10,
            backgroundColor: colors.graylight,
            height: 80,
          },
        }}
      >
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <ButtonHome />,
          }}
        />
        <RootStack.Screen
          name="QR"
          component={QrScreen}
          options={{
            tabBarButton: (props) => <ButtonQR {...props} />,
          }}
        />
        <RootStack.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarIcon: () => <ButtonHistory />,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
