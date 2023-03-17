import {
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  Button,
  ScrollView,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Login = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const emailLogin = async () => {
    console.log("emailid", email);
    let inputEmail = await AsyncStorage.getItem(email);
    console.log("inputEmail", inputEmail);
    if (inputEmail) {
      navigation.navigate("Home", {
        Loginname: JSON.parse(inputEmail).name,
        Loginemail: email,
        Loginphone: JSON.parse(inputEmail).phone,
      });
    } else {
      alert("User Not Found");
    }
  };

  return (
    // <KeyboardAvoidingView></KeyboardAvoidingView>
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="default"> </StatusBar>
      <Text style={{ fontSize: 20 }}>Login Page</Text>
      <View style={styles.formOuter}>
        <View style={styles.formInner}>
          <TextInput
            value={email}
            placeholder="Email - JohnDoe@abc.com"
            onChangeText={setEmail}
          ></TextInput>
        </View>
        <View style={styles.formInner}>
          <TextInput
            value={password}
            placeholder="Password"
            onChangeText={setPassword}
            secureTextEntry={true}
          ></TextInput>
        </View>

        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => {
            emailLogin();
          }}
        >
          <Text style={styles.btn}>Sign In</Text>
        </TouchableOpacity>
        <View style={{ borderBottomWidth: 2, borderColor: "#e2e2e2" }}></View>

        <View
          style={{
            alignItems: "center",
            marginVertical: 30,
          }}
        >
          <Text>OR</Text>
          <Text>
            New User?{" "}
            <Text
              style={{ color: "red" }}
              onPress={() => {
                navigation.navigate("Signup");
              }}
            >
              Sign Up
            </Text>
          </Text>
          <Text
            style={{ color: "red" }}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            Home
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formInner: {
    borderWidth: 1,
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    marginHorizontal: "auto",
    marginVertical: 20,
    backgroundColor: "#61dafb",
    width: 90,
    padding: 20,
    textAlign: "center",
    borderRadius: 10,
  },
});
