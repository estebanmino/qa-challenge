import React from 'react';
import Onboarding from './src/Onboarding';
import SignUp from './src/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{title: 'Welcome'}}
        />

        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
