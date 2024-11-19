import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    { text: 'Do laundry', completed: false },
    { text: 'Go to gym', completed: false },
    { text: 'Walk dog', completed: false }
  ]);

  // Add a new task to the tasks list
  const addTask = (taskText) => {
    if (taskText.trim()) {
      const taskExists = tasks.some(task => task.text.toLowerCase() === taskText.toLowerCase());
      if (!taskExists) {
        setTasks([...tasks, { text: taskText, completed: false }]);
      } else {
        alert('Task already exists!'); // Notify user about duplicate task
      }
    }
  };

  return (
    <View style={styles.container}>
      <ToDoList tasks={tasks} /> {/* Pass tasks to ToDoList */}
      <ToDoForm addTask={addTask} /> {/* Pass addTask function to ToDoForm */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default App;
