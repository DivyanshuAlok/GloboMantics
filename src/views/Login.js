import { Alert, StyleSheet, Text, View, TextInput, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const cancelLogin = () => {
    Alert.alert("login canclelled");
    navigation.navigate("Home");
  };

  const createAccount = () => {
    navigation.navigate("Register");
  };

  const loginUser = () => {
    if (!userName) {
      Alert.alert("Enter usename");
    } else if (!password) {
      Alert.alert("Enter password");
    } else {
      AsyncStorage.getItem("userLoggedIn", (error, result) => {
        if (result !== "none") {
          console.log("someone is logged in");
          Alert.alert("Someone has logged in");
          navigation.navigate("Home");
        } else {
          console.log("no one has logged in ");
          AsyncStorage.getItem(userName, (error, result) => {
            if (result === null) {
              Alert.alert("user dosent exist");
              Alert.alert("Create Account");
              navigation.navigate("Home");
            } else {
              console.log("User exists");
              if (password === result) {
                console.log("coreect password");
                AsyncStorage.setItem("userLoggedIn", userName, (error, result) => {
                  Alert.alert("User logged in");
                  navigation.navigate("Home");
                });
              } else {
                Alert.alert("password incorrect");
              }
            }
          });
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log in</Text>
      <TextInput //
        style={styles.input}
        onChangeText={setUserName}
        value={userName}
      />
      <Text style={styles.label}>Enter User Name</Text>
      <TextInput //
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Text style={styles.label}>Enter password</Text>

      <View style={{ flexDirection: "row", width: "100%", height: 40 }}>
        <TouchableHighlight onPress={loginUser} underlayColor="#000000">
          <Text style={styles.button}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={cancelLogin} underlayColor="#HH0000">
          <Text style={styles.button}>Cancel</Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight onPress={createAccount} underlayColor="#HH0000">
        <Text style={styles.button}>Register Account</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  heading: {
    height: 200,
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 2,
    borderRadius: 5,
  },
  label: {
    paddingBottom: 20,
  },
  button: {
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    textAlignVertical: "center",
    textAlign: "center",
    marginVertical: 10,
    alignSelf: "stretch",
    width: "100%",
  },
});
