import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BudgetForm from '../screens/BudgetForm';
import DisplayExpenses from '../screens/DisplayExpenses';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Budget" component={BudgetForm} />
        <Stack.Screen name="Expenses" component={DisplayExpenses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
