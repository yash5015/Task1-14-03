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
  const [isSaved, setIsSaved] = useState(false);
  // const Arrayd = [];
  let [Arrayd, setArrayd] = useState([]);

  const Arry = Arrayd;
  const handleSave = async () => {
    try {
      const User = { name: signupName, email: signupEmail, phone: signupPhone };

      await AsyncStorage.setItem(
        User.email,
        JSON.stringify({ name: User.name, phone: User.phone })
      );
      await AsyncStorage.removeItem("UserData");
      setIsSaved(true);
      let check = await AsyncStorage.getItem(User.email);

      console.log("saved", User.email, check, typeof check);
    } catch (e) {
      console.log("Error in Home", e);
    }
  };

  useEffect(() => {
    // update();
    // handleSubmit();
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
          {isSaved === true ? (
            <TouchableOpacity
              onPress={() => {
                // handleSave(),
                /* 1. Navigate to the Details route with params */
                navigation.navigate("Home", {
                  name: { signupName },
                  email: { signupEmail },
                });
              }}
            >
              <Text style={styles.btn}>Go to Home Page</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                handleSave();
              }}
            >
              <Text style={styles.btn}>Save</Text>
            </TouchableOpacity>
          )}

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
