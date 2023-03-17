import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ route, navigation }) => {
  const { Loginname, Loginemail, Loginphone } = route.params;

  console.log("into the home");

  const [AllKeys, setAllKeys] = useState([]);
  const [data, setdata] = useState([]);

  let Emailkeys = [];
  const getKeys = async () => {
    try {
      Emailkeys = await AsyncStorage.getAllKeys();
    } catch (e) {
      // read key error
      console.log("Read key error", e);
    }

    console.log("Home wali", Emailkeys);
    setAllKeys(Emailkeys);
    console.log("after set allkeys", AllKeys);
  };

  // Get all data logic

  let UserData = [];
  // const getMultiple = async () => {
  //   let values;
  //   try {
  //     values = await AsyncStorage.multiGet(AllKeys);
  //   } catch (e) {
  //     // read error
  //     console.log("error at multi get", e);
  //   }
  //   console.log("values", JSON.parse(values[0][1]));

  //   // example console.log output:
  //   // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
  // };
  useMemo(() => {
    getKeys();
    // getMultiple();
    console.log("Under useEffect", AllKeys);
  }, []);

  return (
    <View>
      <StatusBar barStyle="default" />
      {/* <Text>Hello {JSON.stringify(route.params)} </Text> */}
      <Text>Hello {Loginname} </Text>
      <Text>Your Email id: {Loginemail} </Text>
      <Text>Your Phone number is: {Loginphone} </Text>
      <Text>{JSON.stringify(AllKeys)}</Text>
      {console.log("inside length", AllKeys.length)}
      {AllKeys
        ? (console.log("inside return", JSON.stringify(AllKeys)),
          (
            <ScrollView style={{ marginVertical: 20, height: 500 }}>
              {AllKeys.length != 0 ? (
                AllKeys.map((itemdata, id) => (
                  // console.log(itemdata),

                  // (console.log(await AsyncStorage.getItem("item")),
                  // (data = await AsyncStorage.getItem(itemdata)),
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
                ))
              ) : (
                <Text>Student list Empty</Text>
              )}
            </ScrollView>
          ))
        : (console.log("loding data", AllKeys.length),
          (<Text>Loading...</Text>))}
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
