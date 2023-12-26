import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React, { useEffect, useState } from "react";

let broderColor = "back";

const Questions = (props) => {
  const [selected, setSelected] = useState(false);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    console.log(props);
  }, []);

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
    <View style={styles.outer}>
      {!selected && (
        <View style={styles.container}>
          <Text style={styles.questionText}>{props.questions}</Text>

          <View style={styles.makeRow}>
            <TouchableHighlight style={styles.button} underlayColor="#d3d3d3" onPress={() => chooseAnswer("answer1")}>
              <Text style={styles.answerText}>{props.answer1}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor="#d3d3d3" onPress={() => chooseAnswer("answer2")}>
              <Text style={styles.answerText}>{props.answer2}</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.makeRow}>
            <TouchableHighlight underlayColor="#d3d3d3" style={styles.button} onPress={() => chooseAnswer("answer3")}>
              <Text style={styles.answerText}>{props.answer3}</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#d3d3d3" style={styles.button} onPress={() => chooseAnswer("answer4")}>
              <Text style={styles.answerText}>{props.answer4}</Text>
            </TouchableHighlight>
          </View>
        </View>
      )}
      {selected && correct && (
        <View style={[styles.container, styles.correctContainer]}>
          <Text style={styles.questionText}>{props.questions}</Text>
          <View style={styles.makeRow}>
            <Text style={styles.answerText}>{props.answer1}</Text>
            <Text style={styles.answerText}>{props.answer2}</Text>
          </View>
          <View style={styles.makeRow}>
            <Text style={styles.answerText}>{props.answer3}</Text>
            <Text style={styles.answerText}>{props.answer4}</Text>
          </View>
          <Text style={[styles.answerText, styles.answerResult, styles.correct]}>Correct Answer</Text>
        </View>
      )}
      {selected && !correct && (
        <View style={[styles.container, styles.wrongContainer]}>
          <Text style={styles.questionText}>{props.questions}</Text>
          <View style={styles.makeRow}>
            <Text style={styles.answerText}>{props.answer1}</Text>
            <Text style={styles.answerText}>{props.answer2}</Text>
          </View>
          <View style={styles.makeRow}>
            <Text style={styles.answerText}>{props.answer3}</Text>
            <Text style={styles.answerText}>{props.answer4}</Text>
          </View>
          <Text style={[styles.answerText, styles.answerResult, styles.incorrect]}>INCORRECT</Text>
        </View>
      )}
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "dimgrey",
    padding: 5,
    paddingHorizontal: 10,
  },
  correctContainer: {
    backgroundColor: "black",
  },
  wrongContainer: {
    backgroundColor: "black",
  },
  questionText: {
    fontSize: 17,
    marginBottom: 5,
  },
  answerText: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    padding: 5,
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
  },
  makeRow: {
    flexDirection: "row",
    marginHorizontal: -5,
  },
  answerResult: {
    marginHorizontal: 0,
  },
  correct: {
    backgroundColor: "green",
  },
  incorrect: {
    backgroundColor: "red",
  },
});
