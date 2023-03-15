import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ route, navigation }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("UserData");
      const jsonvalue = value != null ? JSON.parse(value) : null;
      console.log(typeof jsonvalue, jsonvalue);

      setUserName(jsonvalue.name);
      setUserEmail(jsonvalue.email);
    } catch (e) {
      console.log("empty");
    }
  };

  const getAllKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      // read key error
      console.log("empty");
    }

    console.log("keys are", keys);
  };

  useEffect(() => {
    getData();
    getAllKeys();
  }, []);
  const { email, name } = route.params;
  const Student = [
    {
      id: "1",
      title: "ABCDEF",
    },
    {
      id: "2",
      title: "ABCDEF",
    },
    {
      id: "3",
      title: "ABCDEF",
    },
    {
      id: "4",
      title: "ABCDEF",
    },
    {
      id: "5",
      title: "ABCDEF",
    },
    {
      id: "6",
      title: "ABCDEF",
    },
    {
      id: "7",
      title: "ABCDEF",
    },
    {
      id: "8",
      title: "ABCDEF",
    },
    {
      id: "9",
      title: "ABCDEF",
    },
    {
      id: "10",
      title: "ABCDEF",
    },
  ];
  return (
    <View>
      <StatusBar barStyle="default" />
      {/* <Text>Hello {name.name} </Text> */}
      <Text>Hello {userName} </Text>
      <Text>Your Email id: {userEmail} </Text>
      <ScrollView style={{ marginVertical: 20, height: 500 }}>
        {Student.map((item) => (
          <View style={styles.item} id={item.id}>
            <AntDesign name="user" size={24} color="black" />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: "center",
    borderRadius: 10,
  },
});
