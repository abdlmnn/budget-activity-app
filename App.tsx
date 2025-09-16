/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import BudgetForm from './app/screens/BudgetForm';
import StackNavigation from './app/navigation/StackNavigation';

function App() {
  return (
    <SafeAreaProvider>
      <StackNavigation />
    </SafeAreaProvider>
  );
}

export default App;
