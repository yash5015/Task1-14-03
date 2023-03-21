import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Animated,
  Image,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import logo from "../../assets/welcome_logo.jpg";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

const Splashscreen2 = () => {
  return (
    <View style={styles.splassh}>
      <Animated.View style={styles.centerlogo}>
        <Image source={logo} style={styles.logo}></Image>
      </Animated.View>
    </View>
  );
};

export default Splashscreen2;

const styles = StyleSheet.create({
  splassh: {
    flex: 1,
  },
  centerlogo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    // height: 100,
    resizeMode: "contain",
  },
});
