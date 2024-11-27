import React from 'react';
import { View, Text, Pressable, Button, StyleSheet } from 'react-native';

function ToDoList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <View>
      {tasks.map((task, index) => (
        <Pressable key={index} onPress={() => toggleTaskCompletion(index)}>
          <View style={[styles.task, task.completed && styles.completed]}>
            <Text style={styles.taskText}>{task.text}</Text>
            <Button title="Delete" onPress={() => deleteTask(index)} />
          </View>
        </Pressable>
      ))}
    </View>
  );
}
//Styles for the ToDoList component
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
  //Completed tasks will have a green background and a strikethrough
  completed: {
    backgroundColor: '#d1ffd7', 
    textDecorationLine: 'line-through', 
  },
  taskText: {
    fontSize: 16,
    fontWeight: '500',
  },
});


export default ToDoList;
