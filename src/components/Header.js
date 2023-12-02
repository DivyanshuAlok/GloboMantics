import { StyleSheet, Text, View, Alert, Image } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState("");
  const navigation = useNavigation();

  const toggleUser = () => {
    console.log("toggle");
    if (isLoggedIn) {
      AsyncStorage.setItem("userLoggedIn", "none", (error, result) => {
        setIsLoggedIn(false);
        setLoggedUser("");
        Alert.alert("user Logged out");
      });
    } else {
      navigation.navigate("Login");
    }
  };

  useEffect(() => {
    AsyncStorage.getItem("userLoggedIn", (error, result) => {
      if (result === "none") {
        console.log("NONE");
      } else if (result === null) {
        console.log("First log in");
        AsyncStorage.setItem("userLoggedIn", "none", (error, result) => {
          console.log("set user to none");
        });
      } else {
        setIsLoggedIn(true);
        setLoggedUser(result);
      }
    });
  });

  let display = isLoggedIn ? loggedUser : "Tap to log in";
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri: "https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design-1068x974.png",
        }}
        style={styles.logo}
      />
      <Text style={styles.headText} onPress={toggleUser}>
        {display}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#35605a",
    justifyContent: "space-between",
    height: 70,
    padding: 10,
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  headText: {
    flex: 4,
    fontSize: 18,
    textAlignVertical: "center",
    textAlign: "right",
    paddingRight: 15,
  },
});
