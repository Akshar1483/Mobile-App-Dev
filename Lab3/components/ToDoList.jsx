import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <View>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={[styles.task, task.completed && styles.completed]}>
            <Text style={styles.taskText}>{task.text}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
