import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Hero from "./../components/Hero";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Hero />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
