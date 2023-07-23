import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home/home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
import Ai2 from './Ai/ai';
import Human from './human/human';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator>
      <Tab.Screen name="Home" 
      component={Home} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={"#007bff"} size={26} />
        ),
      }} />

      <Tab.Screen name="Ai" 
      component={Ai2} 
      options={{
          tabBarLabel: 'Ai',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="robot-happy" color={"#8a2be2"} size={26} />
          ),
        }} />
        <Tab.Screen name="Human" 
        component={Human} 
        options={{
          tabBarLabel: 'Human',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="human-greeting" color={"#FFA500"} size={26} />
          ),
        }}/>

    </Tab.Navigator>
    
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
