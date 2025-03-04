import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Title from "./Title";
import ToDoList from "./ToDoList";
import { useState } from "react";
import Filters from "./Filters";
import Modal from "./Modal";
import Overlay from "./Overlay";

export default function ToDoContainer() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [filters, setFilters] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [searchTerms, setSearchTerms] = useState("");
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Persisting tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Handling changes in the input field
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask(event) {
    event.preventDefault();

    if (tasks.some((task) => task.title === newTask.trim())) {
      toast.error("Task already exists");
      return;
    }

    if (taskToEdit) {
      if (newTask.trim() !== "") {
        setTasks((prev) =>
          prev.map((task) =>
            task.id === taskToEdit.id ? { ...task, title: newTask } : task
          )
        );
        resetForm();
      } else {
        toast.error("Task title cannot be empty");
      }
    } else {
      if (newTask.trim() !== "") {
        setTasks((prev) => [
          ...prev,
          { id: Date.now(), title: newTask, completed: false },
        ]);
        resetForm();
      } else {
        toast.error("Task title cannot be empty");
      }
    }
  }

  function resetForm() {
    setTaskToEdit(null);
    setNewTask("");
    setShowModal(false);
  }

  // Remove a task
  function handleRemoveTask(index) {
    const updateTasks = tasks.filter((item, i) => i !== index);
    setTasks(updateTasks);
  }

  // Clear completed tasks
  function clearCompletedTasks() {
    setTasks(tasks.filter((task) => !task.completed));
  }

  function clearAllTasks() {
    setTasks([]);
  }

  // Filter tasks based on the current filter and search terms
  const filterTasks = tasks.filter((task) => {
    if (filters === "active") return !task.completed;
    if (filters === "completed") return task.completed;

    if (
      searchTerms &&
      !task.title.toLowerCase().includes(searchTerms.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const handleOutsideClick = (e) => {
    if (e.target.id === "overlay") {
      setShowModal(false);
    }
  };

  const editingText = (task) => {
    setShowModal(true);
    setNewTask(task.title);
    setTaskToEdit(task);
  };

  return (
    <>
      <div className="bg-white rounded-xl p-6 w-full space-y-8 ">
        <Title
          clearAllTasks={clearAllTasks}
          setShowModal={setShowModal}
          searchTerms={searchTerms}
          setSearchTerms={setSearchTerms}
        />

        <ToDoList
          tasks={filterTasks}
          handleRemoveTask={handleRemoveTask}
          toggleTask={toggleTask}
          setTasks={setTasks}
          editingText={editingText}
        />
        <Filters
          clearCompletedTasks={clearCompletedTasks}
          setFilters={setFilters}
          currentFilter={filters}
          remainingItems={tasks.filter((task) => !task.completed).length}
        />
        <ToastContainer />
      </div>
      <Modal
        newTask={newTask}
        handleInputChange={handleInputChange}
        addTask={addTask}
        setShowModal={setShowModal}
        showModal={showModal}
      />

      {showModal && (
        <>
          <Overlay handleOutsideClick={handleOutsideClick} />
        </>
      )}
    </>
  );
}
