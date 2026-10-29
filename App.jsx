import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './src/screens/HomeScreen';
import AiTutorScreen from './src/screens/AiTutorScreen';
import TeachersNavigator from './src/screens/teachers/TeachersNavigator';

const Tab = createMaterialBottomTabNavigator();
LogBox.ignoreAllLogs(); // Ignore all log notifications

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator>
      <Tab.Screen name="Home" 
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={"#007bff"} size={26} />
        ),
      }} />

      <Tab.Screen name="Ai" 
      component={AiTutorScreen}
      options={{
          tabBarLabel: 'Ai',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="robot-happy" color={"#8a2be2"} size={26} />
          ),
        }} />
        <Tab.Screen name="Human" 
        component={TeachersNavigator}
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
