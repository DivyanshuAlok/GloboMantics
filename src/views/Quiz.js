import { FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useState, useEffect } from "react";
import { GeneralQuiz, HtmlQuiz, JavaScriptQuiz } from "../assets/QuizQuestions";
import Questions from "../components/Questions";

const Quiz = ({ navigation }) => {
  const [questLoaded, setQuestLoaded] = useState(false);
  const [totalScore, setTotalScore] = useState(100);
  const [completedQuiz, setCompletedQuiz] = useState(false);
  const [questionList, setQuestionList] = useState([]);
  const [noOfQuestions, setNoOfQuestions] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(1);
  const [questionWorth, setQuestionWorth] = useState(0);
  const [selectQuiz, setSelectQuiz] = useState("");

  //check waht promise does
  const setupQuiz = async () => {
    let quizData = new Promise((resolve, reject) => {
      const quizzes = [GeneralQuiz, HtmlQuiz, JavaScriptQuiz];
      let selected = quizzes[Math.floor(Math.random() * quizzes.length)];
      let choice = selected;
      resolve(choice);
    });
    let chosenQuiz = await quizData;
    let quizTitle = await chosenQuiz.title[0];
    let quizContent = await chosenQuiz.questions;
    let questionCount = await quizContent.length;
    // set state dosent repond well to await
    // so we add to another variable and then set state
    setSelectQuiz(quizTitle);
    setQuestionList(quizContent);
    setQuestionWorth(Math.floor(100 / questionCount));
    setNoOfQuestions(questionCount);
    setQuestLoaded(true);
  };

  useEffect(() => {
    setupQuiz();
  }, []);

  const updateScore = (penalty) => {
    let tempScore = totalScore;
    let missed = incorrect;
    let questionTotal = noOfQuestions;
    let questionsDone = questionAnswered;
    setTotalScore(tempScore - penalty);
    setIncorrect(penalty ? missed + 1 : missed);
    setQuestionAnswered(questionsDone + 1);
    if (questionAnswered === questionTotal) {
      setCompletedQuiz(true);
    }
  };

  const finishQuiz = () => {
    navigation.navigate("QuizFinish", {
      score: totalScore,
      missed: incorrect,
      questions: noOfQuestions,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, margin: 10, textAlign: "center" }}>{selectQuiz}</Text>
      {questLoaded && (
        <FlatList
          keyExtractor={(item) => item.key.toString()}
          data={questionList}
          renderItem={({ item }) => (
            <Questions
              questions={item.question}
              answer1={item.answer1}
              answer2={item.answer2}
              answer3={item.answer3}
              answer4={item.answer4}
              correctAnswer={item.correctAnswer}
              updateScore={updateScore}
              worth={questionWorth}
            />
          )}
        />
      )}
      {completedQuiz && (
        <TouchableHighlight onPress={finishQuiz} style={styles.enabled}>
          <Text style={{ fontSize: 17 }}> Touch to finish</Text>
        </TouchableHighlight>
      )}
      {!completedQuiz && (
        <TouchableHighlight onPress={finishQuiz} style={styles.disabled}>
          <Text style={{ fontSize: 17 }}> Answer all the questions</Text>
        </TouchableHighlight>
      )}
      {!questLoaded && <Text>Loading</Text>}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  enabled: {
    margin: 10,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: "center",
    backgroundColor: "dimgrey",
  },
  disabled: {
    margin: 10,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: "center",
    backgroundColor: "dimgrey",
  },
});
