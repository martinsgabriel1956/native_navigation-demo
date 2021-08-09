import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn, CreateAccount } from './Screens';

import { View, Text, StyleSheet } from 'react-native';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="SignIn" component={SignIn} options={{ title: 'Sign In' }} />
        <Screen name="CreateAccount" component={CreateAccount} options={{ title: 'Create Account' }} />
      </Navigator>
    </NavigationContainer>
  );
}

