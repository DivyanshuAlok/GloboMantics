import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Hero = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.heroImage}
        source={require('./../assets/images.jpg')}
        resizeMode='cover'
		  />
    </View>
  );
}

export default Hero

const styles = StyleSheet.create({
  heroImage:{
    height: '100%',
    width: '100%',
    flex:6
  },
  container:{
    flex:1
  }
})