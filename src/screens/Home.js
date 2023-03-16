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
  // const { name,email } = route.params;

  console.log("into the home");

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [Student, setStudent] = useState([]);
  const [Data, setData] = useState("");
  let StudentData = [];
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("UserData");
      const jsonvalue = value != null ? JSON.parse(value) : null;
      StudentData = jsonvalue;
      setData(JSON.stringify(StudentData));
      console.log("Home", jsonvalue, typeof jsonvalue);
      // setStudent([...Arrayd, jsonvalue]);
      console.log("studentdata", Data);
    } catch (e) {
      console.log("empty data");
    }
  };

  // const getAllKeys = async () => {
  //   let keys = [];
  //   try {
  //     keys = await AsyncStorage.getAllKeys();
  //   } catch (e) {
  //     // read key error
  //     console.log("empty");
  //   }

  //   console.log("keys are", keys);
  // };

  useEffect(() => {
    getData();
    // console.log("StudentData via state", JSON.stringify(StudentData));
    // getData();

    // getAllKeys();
  }, []);

  return (
    <View>
      <StatusBar barStyle="default" />
      {/* <Text>Hello {name.name} </Text> */}
      <Text>Hello {userName} </Text>
      <Text>Your Email id: {userEmail} </Text>
      {/* <Text>{Data}</Text> */}
      <ScrollView style={{ marginVertical: 20, height: 500 }}>
        {Data.length != 0 ? (
          JSON.parse(Data).map((item) => (
            <View style={styles.item} id={item.id}>
              <AntDesign
                name="user"
                size={24}
                style={{ marginHorizontal: 10 }}
                color="black"
              />
              <View>
                <Text style={styles.title}>
                  {" "}
                  <Text>Name: </Text> {item.name}
                </Text>
                <Text style={styles.title}>
                  <Text>Email: </Text> {item.email}
                </Text>
                <Text style={styles.title}>
                  <Text>Phone: </Text> {item.phone}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Text>Student list Empty</Text>
        )}
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
