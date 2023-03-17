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
  const { Loginname, Loginemail, Loginphone } = route.params;

  console.log("into the home");

  const [AllKeys, setAllKeys] = useState([]);
  const [data, setdata] = useState([]);
  let Emailkeys = [];
  let UserData = [];
  const getKeys = async () => {
    try {
      Emailkeys = await AsyncStorage.getAllKeys();
    } catch (e) {
      // read key error
      console.log("Read key error", e);
    }

    console.log(Emailkeys);
    setAllKeys(Emailkeys);
  };

  // Get all data logic

  const getAllData = async (Emailkeys) => {
    if (Emailkeys) {
      try {
        for (const key of AllKeys) {
          UserData = await AsyncStorage.getItem(key);
          console.log(UserData);
        }
      } catch (error) {
        console.log("Error in getting all values of keys", error);
      }
    } else {
      console.log("Empty EmailKeys");
    }
  };

  let Emailvalues;
  const getMultiple = async () => {
    try {
      Emailvalues = await AsyncStorage.multiGet(Emailkeys);
    } catch (e) {
      // read error
      console.log("At Multiple error", e);
    }
    console.log(Emailvalues);

    // example console.log output:
    // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
  };

  const getData = async (keyitem) => {
    try {
      return await AsyncStorage.getItem(keyitem);
    } catch (e) {
      // read error
      console.log("getting error", e);
    }

    console.log("Done.");
  };

  useEffect(() => {
    getKeys();
    // getMultiple();
    getAllData();
  }, []);

  return (
    <View>
      <StatusBar barStyle="default" />
      {/* <Text>Hello {JSON.stringify(route.params)} </Text> */}
      <Text>Hello {Loginname} </Text>
      <Text>Your Email id: {Loginemail} </Text>
      <Text>Your Phone number is: {Loginphone} </Text>
      <Text>{AllKeys}</Text>
      {/* fetching Details with keys */}
      {/* {AllKeys.map(async (keys, id) =>
        console.log(await AsyncStorage.getItem("keys"))
      )} */}
      {/* fetching Details with keys */}
      <ScrollView style={{ marginVertical: 20, height: 500 }}>
        {{ AllKeys }.length != 0 ? (
          AllKeys.map(
            (itemdata, id) => (
              console.log(itemdata),
              (
                // console.log(getData(item)),
                // (console.log(await AsyncStorage.getItem("item")),

                <View style={styles.item} key={id}>
                  <AntDesign
                    name="user"
                    size={24}
                    style={{ marginHorizontal: 10 }}
                    color="black"
                  />
                  <View>
                    <Text style={styles.title}>
                      {" "}
                      <Text>Name: </Text> {data.name}
                    </Text>
                    <Text style={styles.title}>
                      <Text>Email: </Text> {itemdata}
                    </Text>
                    <Text style={styles.title}>
                      <Text>Phone: </Text> {data.phone}
                    </Text>
                  </View>
                </View>
              )
            )
          )
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
