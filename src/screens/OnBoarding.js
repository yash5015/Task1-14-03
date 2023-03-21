import { StyleSheet, Text, View, Image } from "react-native";
import React, { useRef } from "react";

import Onboarding from "react-native-onboarding-swiper";
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.jpeg";
import step4 from "../../assets/step4.jpeg";

const Slider_pages = [
  {
    backgroundColor: "#fff",
    image: <Image source={step1} />,
    title: "STEP 1",
    subtitle:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
  },
  {
    backgroundColor: "#fff",
    image: <Image source={step2} />,
    title: "STEP 2",
    subtitle:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
  },
  {
    backgroundColor: "#fff",
    image: <Image source={step3} />,
    title: "STEP 3",
    subtitle:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
  },
  {
    backgroundColor: "#fff",
    image: <Image source={step4} />,
    title: "STEP 4",
    subtitle:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
  },
];
const OnBoarding = ({ navigation }) => {
  return (
    <Onboarding
      pages={Slider_pages}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
    />
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
