import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnBoarding from "./screens/OnBoarding";
import Load_API from "./screens/Load_API";
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [isFirstLaunched, setIsFirstLauched] = useState(null);
  const launch = () => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLauched(true);
      } else {
        setIsFirstLauched(false);
      }
    });
  };

  useEffect(() => {
    launch();
  }, []);

  return isFirstLaunched == null ? null : (
    <NavigationContainer>
      {/* {console.log(isFirstLaunched)} */}
      <Stack.Navigator initialRouteName={isFirstLaunched ? "OnBoard" : "Login"}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoard"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerTitle: "Welcome",
            headerStyle: {
              backgroundColor: "#61dafb",
            },

            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("Login")}
                title="Logout"
                color="#2196F3"
              />
            ),
          })}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoadAPI"
          component={Load_API}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    backgroundColor: "red",
  },
});
