import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";

const QuizFinish = ({ route, navigaion }) => {
  const { score, missed, questions } = route.params;
  const exitQuiz = () => {
    navigaion.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your total score {score}</Text>
      <Text style={styles.text}>
        You misses on {missed} out of {questions} questions
      </Text>

      <TouchableHighlight onPress={exitQuiz} style={styles.button}>
        <Text style={{ fontSize: 20 }}>Exit Quiz</Text>
      </TouchableHighlight>
    </View>
  );
};

export default QuizFinish;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
    padding: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    marginTop: 30,
    borderRadius: 5,
    borderWidth: 2,
    padding: 5,
    alignItems: "center",
  },
});
