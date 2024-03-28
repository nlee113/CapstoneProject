import React, {useState} from 'react';
import LoginScreen from './assets/screens/LoginScreen';
import SignUpScreen from './assets/screens/SignUpScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScheduleAssistant from './assets/screens/ScheduleAssistant';
import EditProfile from './assets/screens/EditProfile'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ScheduleAssistant" component={ScheduleAssistant} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
