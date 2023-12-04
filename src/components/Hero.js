import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Hero = () => {
  return (
    <Image
      style={styles.heroImage}
      source={{
        uri: "https://image.freepik.com/free-photo/tablet-office-desk_23-2147647838.jpg",
      }}
      resizeMode="cover"
    />
  );
};

export default Hero;

const styles = StyleSheet.create({
  heroImage: {
    height: "100%",
    width: "100%",
    flex: 7,
  },
});
