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
  const [signupEmail, setSignupEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailLogin = () => {
    console.log("emailid", email);
    console.log("SignupEmailid", signupEmail);
    if (email === signupEmail) {
      navigation.navigate("Home", {
        Loginname: { name },
        Loginemail: { email },
      });
    } else {
      alert("Please Enter correct main id");
    }
  };
  const [Data, setData] = useState("");
  let StudentData = [];
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("UserData");
      const jsonvalue = value != null ? JSON.parse(value) : null;
      StudentData = jsonvalue;
      setData(JSON.stringify(StudentData));
      console.log("Login", jsonvalue, typeof jsonvalue);
      console.log("LoginData", Data);

      setName(jsonvalue.name);
      setSignupEmail(jsonvalue.email);
      // console.log("login username", name);
      // console.log("signup email", signupEmail);
      // console.log("login useremail", email);
    } catch (e) {
      console.log("empty");
    }
  };
  useEffect(() => {
    getData();
  }, []);
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
            /* 1. Navigate to the Details route with params */
            // navigation.navigate("Home", {
            //   Loginname: { name },
            //   Loginemail: { email },
            // });
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
                navigation.push("Signup");
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
