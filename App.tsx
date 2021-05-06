import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Provider } from 'react-redux';
import store from './store'

import {JobPage} from './pages/Jobs'
import {ServicePage} from './pages/ServicePage'
import LoginScreen from './pages/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Post"
            component={JobPage}
          />
        <Stack.Screen
            name="Service"
            component={ServicePage}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>



  );
}
