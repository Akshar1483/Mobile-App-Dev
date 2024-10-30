import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  // Initialize tasks state with three hard-coded tasks
  const [tasks, setTasks] = useState([
    { text: 'Do laundry', completed: false },
    { text: 'Go to gym', completed: false },
    { text: 'Walk dog', completed: false }
  ]);

  // Function to add a new task
  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  return (
    <View style={styles.container}>
      {/* Pass tasks as a prop to ToDoList */}
      <ToDoList tasks={tasks} />
      {/* Pass addTask function to ToDoForm */}
      <ToDoForm addTask={addTask} />
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