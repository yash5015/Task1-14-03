import { StyleSheet, Text, View, Animated, Image } from "react-native";
import React from "react";
// import {useSafeAfreaInsets} from 'react-native-safe-area-context'
import Entypo from "@expo/vector-icons/Entypo";
import logo from "../../assets/favicon.png";
const BGcolor = "#4D4A95";
const Splashscreen2 = () => {
  // const edges = useSafeAreaInsets();
  return (
    <View style={styles.splassh}>
      <Animated.View style={styles.centerlogo}>
        <Entypo name="rocket" size={30} />
        <Image source={{ logo }} style={styles.logo}></Image>
      </Animated.View>
    </View>
  );
};

export default Splashscreen2;

const styles = StyleSheet.create({
  splassh: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: BGcolor,
  },
  centerlogo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
