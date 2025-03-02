import React from "react";
import Form from "./Form";
import Title from "./Title";
import ToDoList from "./ToDoList";
import { useState } from "react";

export default function ToDoContainer() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask(event) {
    event.preventDefault();

    if (newTask.trim() !== "") {
      setTasks((prev) => [...prev, newTask]);
      setNewTask("");
    }
  }

  function handleRemoveTask(index) {
    const updateTasks = tasks.filter((item, i) => i !== index);

    setTasks(updateTasks);
  }

  return (
    <div className="bg-white rounded-xl p-6 w-full space-y-8">
      <Title />
      <Form
        newTask={newTask}
        handleInputChange={handleInputChange}
        addTask={addTask}
      />
      <ToDoList tasks={tasks} handleRemoveTask={handleRemoveTask} />
    </div>
  );
}
