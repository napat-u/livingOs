import React from 'react';
import {
  StatusBar,
  useColorScheme
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import FullScreenImage from './src/screens/FullScreenImage';
import ListView from './src/screens/ListView';

const Stack = createStackNavigator()


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerLeft: null }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerLeft: null}} />
          <Stack.Screen name="FullScreenImage" component={FullScreenImage} options={{ headerTransparent: true, title: '', headerBackTitle: ' ' }} />
          <Stack.Screen name="ListView" component={ListView} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};


export default App;
