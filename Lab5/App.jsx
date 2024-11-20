import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Update this line
import { View, Text, Button, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  console.log('Rendering HomeScreen');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This lab is wrong as everything is written inside app.jsx</Text>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </View>
  );
}

function AboutScreen() {
  console.log('Rendering AboutScreen');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>What the hell i told you lab is wrong fix it</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default function App() {
  console.log('Rendering App');
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#6200ee' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
