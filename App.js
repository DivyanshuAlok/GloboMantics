
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

import HomeScreen from './src/views/HomeScreen'

const stack = createNativeStackNavigator();


const App = (props) => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen 
          name='Home'
          component={HomeScreen}
          options={{title:'Globalmantics'}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});