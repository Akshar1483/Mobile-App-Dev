import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const [easterEgg, setEasterEgg] = useState(false);

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.text}>Hey! How are you</Text>
        <TouchableOpacity onPress={() => setEasterEgg(!easterEgg)}>
          <Text style={styles.text}>Akshar Patel</Text>
        </TouchableOpacity>
        {easterEgg && (
          <Text style={styles.easterEgg}>
            Surprise! You found the Easter Egg! 🎉
          </Text>
        )}
        <Text style={styles.text}>Current Date: {new Date().toLocaleDateString()}</Text>
        
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  easterEgg: {
    marginTop: 20,
    fontSize: 18,
    color: 'purple',
    fontWeight: 'bold',
  },
});

export default AboutScreen;
