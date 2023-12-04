import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Lessons</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Quiz")}>
          <Text style={styles.buttonText}>Quiz</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.buttonRow, styles.border]}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Blog")}>
          <Text style={styles.buttonText}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Register")}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("About")}>
          <Text style={styles.buttonText}>About Globomantics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#35605a",
    padding: 5,
    paddingBottom: 15,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonStyle: {
    padding: 5,
    alignItems: "center",
    margin: 5,
    borderWidth: 2,
    flex: 1,
    borderRadius: 5,
  },
});
