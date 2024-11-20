import React, { useState, useEffect } from "react";
import tasksData from "../data/tasks.json";

const TodoForm = () => {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [taskText, setTaskText] = useState(""); // State for the shared input box
  const [jsonTasks, setJsonTasks] = useState([]); // State for JSON tasks (hidden initially)

  // Load tasks from JSON file
  useEffect(() => {
    try {
      setJsonTasks(tasksData.tasks); // Load tasks from JSON but do not show them initially
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }, []);

  // Function to randomly select a task and show it in the input box
  const handleGenerateRandomTask = () => {
    if (jsonTasks.length === 0) {
      console.error("No tasks available in the JSON file.");
      return;
    }
    const randomTask = jsonTasks[Math.floor(Math.random() * jsonTasks.length)];
    setTaskText(randomTask); // Update the shared input with the random task
  };

  // Function to add a new task (from input or random task)
  const handleAddTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, taskText]); // Add the task to the displayed list
      setTaskText(""); // Clear the input field
    } else {
      console.error("Task text is empty. Cannot add task.");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Todo List with Random Task Generator</h1>
      
      {/* Shared Input Field for Adding New Task and Displaying Random Task */}
      <div className="flex flex-col mb-6">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)} // Update input state
          placeholder="Type a task or generate one..."
          className="border p-2 mb-4 w-full"
        />
        <div className="flex space-x-4">
          <button
            onClick={handleAddTask}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Task
          </button>
          <button
            onClick={handleGenerateRandomTask}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Generate Random Task
          </button>
        </div>
      </div>

      {/* Display the List of Added Tasks */}
      {tasks.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Current Tasks</h2>
          <ul className="list-disc pl-6">
            {tasks.map((task, index) => (
              <li key={index} className="mb-2">
                {task}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoForm;
  