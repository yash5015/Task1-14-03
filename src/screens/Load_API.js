import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const Load_API = ({ navigation }) => {
  const [APIData, setAPIData] = useState([]);
  const [Loading, setLoading] = useState(true);
  let Data = [];
  const fetchAPI = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setAPIData(json);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.btn}> Back to Login</Text>
      </TouchableOpacity>
      {Loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <ScrollView style={{ marginVertical: 20, height: 500 }}>
          {APIData.length != 0 ? (
            APIData.map((itemdata, id) => (
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
                    <Text>Title: </Text> {itemdata.title}
                  </Text>
                  <Text style={styles.title}>
                    <Text>Body: </Text> {itemdata.Body}
                  </Text>
                  <Text style={styles.title}>
                    <Text>UserId: </Text>
                    {itemdata.userId}
                  </Text>
                </View>
              </View>
            ))
          ) : (
            <Text>No Data Found</Text>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default Load_API;

const styles = StyleSheet.create({
  btn: {
    marginHorizontal: "auto",
    marginVertical: 20,
    backgroundColor: "#61dafb",
    width: 90,
    padding: 20,
    textAlign: "center",
    borderRadius: 10,
  },
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
