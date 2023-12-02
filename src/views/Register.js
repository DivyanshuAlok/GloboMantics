import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const cancelRegister = () => {
    Alert.alert("Registration cancelled");
    navigation.navigate("Home");
  };

  const registerAccount = () => {
    if (!userName) {
      Alert.alert("Username filed is empty");
    } else if (password !== passwordConfirm) {
      Alert.alert("Passwords do not match");
    } else {
      AsyncStorage.getItem(userName, (error, result) => {
        if (result !== null) {
          Alert.alert(`${userName} exists`);
        } else {
          AsyncStorage.setItem(userName, password, (error, result) => {
            Alert.alert(`${userName} created`);
            navigation.navigate("Home");
          });
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register Account</Text>

      <View style={{ flex: 2, justifyContent: "center" }}>
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
        <TextInput //
          style={styles.input}
          onChangeText={setPasswordConfirm}
          value={passwordConfirm}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Confirm password</Text>
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-end" }}>
        <TouchableHighlight onPress={registerAccount} underlayColor="#000000" style={{ flex: 1 }}>
          <Text style={styles.button}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={cancelRegister} underlayColor="#HH0000" style={{ flex: 1 }}>
          <Text style={styles.button}>Cancel</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  heading: {
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    flex: 1,
  },
  input: {
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    padding: 5,
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
    flexBasis: "auto",
  },
});
