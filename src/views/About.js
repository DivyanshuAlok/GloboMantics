import { StyleSheet, Text, ScrollView, View, Image, Dimensions  } from 'react-native'

const width1 = Dimensions.get('window').width;

const aboutglobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const whatglobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const About = () => {

  
  
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.pics}
        source={require('./../assets/images.jpg')}
        resizeMode='cover'
		  />
      <Text style={styles.aboutTitle}>Who we are?</Text>
      <Text style={styles.aboutText}>{aboutglobo}</Text>
      <Image style={styles.pics} source={require('./../assets/images.jpg')}/>
      <Text style={styles.aboutTitle}>What we do?</Text>
      <Text style={styles.aboutText}>{whatglobo}</Text>
    </ScrollView>
  )
}

export default About

const styles = StyleSheet.create({
  container:{
    paddingTop:20
  },
  pics:{
    width : width1
  },
  aboutTitle:{
    paddingTop:10,
    textAlign:'center'
  },
  aboutText:{
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:20
  }
})