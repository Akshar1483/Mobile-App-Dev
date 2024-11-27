import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import tasksData from "../data/tasks.json";

const TodoForm = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [jsonTasks, setJsonTasks] = useState([]);

  useEffect(() => {
    try {
      setJsonTasks(tasksData.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }, []);

  const handleGenerateRandomTask = () => {
    if (jsonTasks.length === 0) {
      console.error("No tasks available in the JSON file.");
      return;
    }
    const randomTask = jsonTasks[Math.floor(Math.random() * jsonTasks.length)];
    setTaskText(randomTask);
  };

  const handleAddTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText("");
    } else {
      console.error("Task text is empty. Cannot add task.");
    }
  };

  const toggleTaskCompletion = (index) => {
    setTasks(tasks.map((task, idx) =>
      idx === index ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List with Random Task Generator</Text>
      
      <TextInput
        style={styles.input}
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
        placeholder="Type a task or generate one..."
      />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleGenerateRandomTask}>
          <Text style={styles.buttonText}>Generate Random Task</Text>
        </TouchableOpacity>
      </View>

      {tasks.length > 0 && (
        <View style={styles.taskContainer}>
          <Text style={styles.subtitle}>Current Tasks</Text>
          {tasks.map((task, index) => (
            <TouchableOpacity key={index} onPress={() => toggleTaskCompletion(index)}>
              <Text
                style={[
                  styles.taskText,
                  task.completed ? styles.completedTaskText : null
                ]}
              >
                {task.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginRight: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  taskContainer: {
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
    marginBottom: 5,
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default TodoForm;
