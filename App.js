import { StyleSheet, Text, View, StatusBar } from "react-native";

import React, { useState, useEffect } from "react";

import Splashscreen2 from "./src/screens/Splashscreen2";
import RootNavigator from "./src/RootNavigator";
const App = () => {
  const [isSplash, setIsSplash] = useState(true);
  const SetTimer = () => {
    setTimeout(() => {
      setIsSplash(false);
    }, 3500);
  };
  useEffect(() => {
    SetTimer();
  });

  return isSplash ? <Splashscreen2 /> : <RootNavigator />;
};

export default App;

const styles = StyleSheet.create({});
