import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";

import OnBoarding from "./OnBoarding";
import RootNavigator from "../RootNavigator";

const Stack = createNativeStackNavigator();

const OnBoard_Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Root"
          component={RootNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default OnBoard_Nav;

const styles = StyleSheet.create({});
