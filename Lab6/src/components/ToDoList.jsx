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
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 16,
    fontWeight: '500',
  },
});


export default ToDoList;
