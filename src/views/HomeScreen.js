import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Hero from './../components/Hero'

const App = (props) => {
    return (
      <View>
        <Text>App {props.name}</Text>
      </View>
    );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <App name = 'div'/>
        <Hero/>
      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})