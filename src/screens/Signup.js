import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  StatusBar,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import Home from "./Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Login = ({ navigation }) => {
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  let [Arrayd, setArrayd] = useState([{ name: "empty" }]);

  const handleUpdate = async () => {
    try {
      let Arr = await AsyncStorage.getItem("UserData");
      console.log("Arr", Arr);
      if (Arr != null) {
        let jsonval = JSON.parse(Arr);
        setArrayd((jsonval) => [...jsonval]);
        console.log("Arrayd", Arrayd);
        // await AsyncStorage.setItem("UserData", JSON.stringify(Arrayd));
        await AsyncStorage.setItem("UserData", JSON.stringify(jsonval));
        console.log("saved first");
      } else {
        // setArrayd((User) => [User]);
        // console.log("Arrayd", Arrayd);
        // await AsyncStorage.setItem("UserData", JSON.stringify([User]));
        console.log("Arrayd", Arrayd);
        // await AsyncStorage.setItem("UserData", JSON.stringify(Arrayd));
        await AsyncStorage.setItem("UserData", JSON.stringify([Arrayd]));
        console.log("saved else first");
      }
    } catch (e) {
      console.log("Error in HomeUpdate ", e);
    }
  };
  const handleSubmit = async () => {
    try {
      const User = { name: signupName, email: signupEmail, phone: signupPhone };
      console.log("User", User);
      let Arr = await AsyncStorage.getItem("UserData");
      console.log("Arr", Arr);
      if (Arr != "null") {
        let jsonval = JSON.parse(Arr);
        setArrayd((jsonval) => [...jsonval, User]);
        console.log("Arrayd", Arrayd);
        console.log([...jsonval, User]);
        await AsyncStorage.setItem(
          "UserData",
          JSON.stringify([...jsonval, User])
        );
        console.log("saved updated");
      } else {
        setArrayd((User) => [User]);
        console.log("Arrayd", Arrayd);
        await AsyncStorage.setItem("UserData", JSON.stringify([User]));
        console.log("saved else updated");
      }
    } catch (e) {
      console.log("Error in Home", e);
    }
  };
  useEffect(() => {
    handleUpdate();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="default"> </StatusBar>
      <Text style={{ fontSize: 20 }}>SignUp Page</Text>
      <View style={styles.formOuter}>
        <View style={styles.formInner}>
          <TextInput
            placeholder="Name - JohnDoe "
            value={signupName}
            onChangeText={setSignupName}
          ></TextInput>
        </View>
        <View style={styles.formInner}>
          <TextInput
            value={signupEmail}
            placeholder="Email - JohnDoe@abc.com"
            onChangeText={setSignupEmail}
            keyboardType="email-address"
          ></TextInput>
        </View>
        <View style={styles.formInner}>
          <TextInput
            value={signupPhone}
            placeholder="Phno - 9999XXXXXX"
            onChangeText={setSignupPhone}
            keyboardType="phone-pad"
            maxLength={10}
          ></TextInput>
        </View>
        <View style={styles.formInner}>
          <TextInput
            value={signupPassword}
            placeholder="Password"
            onChangeText={setSignupPassword}
            secureTextEntry={true}
          ></TextInput>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              handleSubmit(),
                /* 1. Navigate to the Details route with params */
                navigation.push("Home", {
                  name: { signupName },
                  email: { signupEmail },
                });
            }}
          >
            <Text style={styles.btn}>Sign Up</Text>
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
              Already Signup?{" "}
              <Text
                style={{ color: "red" }}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                Login
              </Text>
            </Text>
          </View>
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
  btn: {
    marginHorizontal: "auto",
    marginVertical: 20,
    backgroundColor: "#61dafb",
    width: 160,
    padding: 20,
    textAlign: "center",
    borderRadius: 10,
  },
});
