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

  // const Arrayd = [];
  let [Arrayd, setArrayd] = useState([]);
  const update = async () => {
    console.log("Run update");
    const value = await AsyncStorage.getItem("UserData");

    const jsonvalue = value != null ? JSON.parse(value) : null;
    console.log("json value", jsonvalue);
    let temp = [...jsonvalue];
    console.log("temp", temp);
    setArrayd(temp);
    console.log("Arrayd", Arrayd);
    // if (jsonvalue != null) setArrayd(temp);

    // try {
    //   const jsonData = JSON.stringify(newData); // convert object to string
    //   let existingTransactions = await getTransaction(newData.category);
    //   const updatedTransactions = [...existingTransactions, jsonData]; // you're having array of string, not array of object
    //   await AsyncStorage.setItem(
    //     newData.category,
    //     JSON.stringify(updatedTransactions)
    //   );
    // }
  };
  // update();
  console.log("outside", Arrayd);
  const Arry = Arrayd;
  const handleSubmit = async () => {
    console.log("hello");
    // const arr = [];
    try {
      const User = { name: signupName, email: signupEmail, phone: signupPhone };
      let temp1 = [...Arrayd, User];
      console.log("temp onsignup", temp1);
      // setArrayd(temp1);
      setArrayd(temp1);

      // Arrayd.push(User);
      console.log("Arrayd onsignup", Arrayd);

      await AsyncStorage.setItem("UserData", JSON.stringify(Arry));
      console.log("saved");
    } catch (e) {
      console.log("Error in Home", e);
    }
  };
  useEffect(() => {
    update();
    handleSubmit();
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
                navigation.navigate("Home", {
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
