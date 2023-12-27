import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
//import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import { StyleSheet } from "react-native";

import About from "./src/views/About";
import HomeScreen from "./src/views/HomeScreen";
import Register from "./src/views/Register";
import Login from "./src/views/Login";
import Header from "./src/components/Header";
import Blog from "./src/views/Blog";
import BlogDetail from "./src/views/BlogDetail";
import Quiz from "./src/views/Quiz";
import QuizFinish from "./src/views/QuizFinish";

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen //
          name="About"
          component={About}
          options={{ title: "About US" }}
        />
        <stack.Screen //
          name="Blog"
          component={Blog}
          options={{ title: "Blog" }}
        />
        <stack.Screen //
          name="Quiz"
          component={Quiz}
          options={{ title: "Quiz" }}
        />
        <stack.Screen //
          name="QuizFinish"
          component={QuizFinish}
          options={{ title: "QuizFinish" }}
        />
        <stack.Screen //
          name="BlogDetail"
          component={BlogDetail}
          options={{ title: "BlogDetails" }}
        />
        <stack.Screen //
          name="Home"
          component={HomeScreen}
          options={{ header: () => <Header /> }}
        />
        <stack.Screen //
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <stack.Screen //
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
