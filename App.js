// Example: Switch from One Screen to another using React Navigation //
// https://aboutreact.com/react-native-stack-navigation //
//import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';
import ThirdPage from './screens/ThirdPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: 'First Page', //Set Header Title
            headerStyle: {
              backgroundColor: 'dodgerblue', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            title: 'Second Page', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="ThirdPage"
          component={ThirdPage}
          options={{
            title: 'Third Page', //Set Header Title
            headerStyle: {
              backgroundColor: 'dodgerblue', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
