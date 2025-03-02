import React from "react";
import Form from "./Form";
import Title from "./Title";
import ToDoList from "./ToDoList";
import { useState } from "react";
import Filters from "./Filters";

export default function ToDoContainer() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState("all");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask(event) {
    event.preventDefault();

    if (newTask.trim() !== "") {
      setTasks((prev) => [
        ...prev,
        { id: Date.now(), title: newTask, completed: false },
      ]);
      setNewTask("");
    }
  }

  function handleRemoveTask(index) {
    const updateTasks = tasks.filter((item, i) => i !== index);

    setTasks(updateTasks);
  }

  function clearCompletedTasks() {
    setTasks(tasks.filter((task) => !task.completed));
  }

  const filterTasks = tasks.filter((task) => {
    if (filters === "active") return !task.completed;
    if (filters === "completed") return task.completed;
    return true;
  });

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 w-full space-y-8">
      <Title />
      <Form
        newTask={newTask}
        handleInputChange={handleInputChange}
        addTask={addTask}
      />
      <ToDoList
        tasks={filterTasks}
        handleRemoveTask={handleRemoveTask}
        toggleTask={toggleTask}
        setTasks={setTasks}
      />
      <Filters
        clearCompletedTasks={clearCompletedTasks}
        setFilters={setFilters}
        currentFilter={filters}
        remainingItems={tasks.filter((task) => !task.completed).length}
      />
    </div>
  );
}
