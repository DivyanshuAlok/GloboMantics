import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React, { useState } from "react";

const Questions = (props) => {
  const [selected, setSelected] = useState(false);
  const [correct, setCorrect] = useState(false);

  const chooseAnswer = (ans) => {
    let worth = props.worth;
    if (ans === props.correctAnswer) {
      setSelected(true);
      setCorrect(true);
      props.updateScore(0);
    } else {
      setSelected(true);
      props.updateScore(worth);
    }
  };
  return (
    <View>
      {!selected && (
        <View style={styles.container}>
          <Text style={styles.questionText}>{props.question}</Text>
          <TouchableHighlight underlayColor="#d3d3d3" onPress={() => chooseAnswer("answer1")}>
            <Text style={styles.answerText}>{props.answer1}</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#d3d3d3" onPress={() => chooseAnswer("answer2")}>
            <Text style={styles.answerText}>{props.answer2}</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#d3d3d3" onPress={() => chooseAnswer("answer3")}>
            <Text style={styles.answerText}>{props.answer3}</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#d3d3d3" onPress={() => chooseAnswer("answer4")}>
            <Text style={styles.answerText}>{props.answer4}</Text>
          </TouchableHighlight>
        </View>
      )}
      {selected && correct && (
        <View style={styles.correctContainer}>
          <Text style={styles.questionText}>{props.question}</Text>
          <Text style={styles.answerText}>{props.answer1}</Text>
          <Text style={styles.answerText}>{props.answer2}</Text>
          <Text style={styles.answerText}>{props.answer3}</Text>
          <Text style={styles.answerText}>{props.answer4}</Text>
          <Text style={styles.answerText}>Correct Answer</Text>
        </View>
      )}
      {selected && !correct && (
        <View style={styles.wrongContainer}>
          <Text style={styles.questionText}>{props.question}</Text>
          <Text style={styles.answerText}>{props.answer1}</Text>
          <Text style={styles.answerText}>{props.answer2}</Text>
          <Text style={styles.answerText}>{props.answer3}</Text>
          <Text style={styles.answerText}>{props.answer4}</Text>
          <Text style={styles.answerText}>INCORRECT</Text>
        </View>
      )}
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({});
