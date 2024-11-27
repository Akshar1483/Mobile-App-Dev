import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import the screen components
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';

// Create a stack navigator
const Stack = createStackNavigator();

export default function App() {
  console.log('Rendering App');
  return (
    // Wrap the entire navigation in the NavigationContainer
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home" 
        screenOptions={{
          headerStyle: { backgroundColor: '#6200ee' }, 
          headerTintColor: '#fff', 
          headerTitleStyle: { fontWeight: 'bold', fontSize: 18 }, 
        }}
      >
        {/* Define screens and associate them with their components */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
