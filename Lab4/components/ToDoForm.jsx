import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState(''); // Local state for input

  // Add a new task to the tasks list
  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText); 
      setTaskText(''); 
    }
  };

  // Form for adding a new task
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={taskText}
        onChangeText={(text) => setTaskText(text)} 
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}

// Styles for the ToDoForm component
const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#007bff',
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ToDoForm;
