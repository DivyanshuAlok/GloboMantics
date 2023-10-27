import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const cancelRegister = () => {
    Alert.alert("Registration cancelled");
    nagivation.navigate("Home");
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
    <View style={styles.conatiner}>
      <Text style={styles.heading}>Register Account</Text>
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
      <Text style={styles.label}>confirm password</Text>

      <TouchableHighlight onPress={registerAccount} underlayColor="#000000">
        <Text style={styles.button}>Register</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={cancelRegister} underlayColor="#HH0000">
        <Text stle={style.button}>Cancel</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  heading: {
    fontSize: 26,
    textShadowRadius: 5,
  },
});
