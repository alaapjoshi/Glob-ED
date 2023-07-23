// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import SignUpScreen from './signup';
import Check from './check';
import Humanscreen from './humanScreen'
import ChatPage from './ChatPage';
const Stack = createStackNavigator();

const Human = () => {
  return (
    <PaperProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Humanscreen} />
          <Stack.Screen name="Sign up as a teacher!" component={SignUpScreen} />
          <Stack.Screen name="Get Teaching help!" component={Check} />
          <Stack.Screen name="Chat" component={ChatPage} />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Human;
