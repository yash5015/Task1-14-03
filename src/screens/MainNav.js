import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnBoarding from "./OnBoarding";
import RootNavigator from "../RootNavigator";
const Stack = createNativeStackNavigator();

const MainNav = () => {
  const [isFirstLaunched, setIsFirstLauched] = useState(null);
  const launch = () => {
    {
      AsyncStorage.getItem("alreadyLaunched").then((value) => {
        if (value == null) {
          AsyncStorage.setItem("alreadyLaunched", "true");
          setIsFirstLauched(true);
        } else {
          setIsFirstLauched(false);
        }
      });
    }
  };

  useEffect(() => {
    launch();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isFirstLaunched ? "OnBoard" : "RootNavigator"}
      >
        <Stack.Screen
          name="OnBoard"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RootNavigator"
          component={RootNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
