import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RootStackScreen from '../screens/RootStackScreen';
import SignInScreen from '../screens/SignInScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Root" component={RootStackScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
