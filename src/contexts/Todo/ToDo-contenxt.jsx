import { createContext } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react";

export const ToDoContext = createContext();

export function ToDoProvider({ children }) {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [currentFilter, setCurrentFilter] = useState("all");
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
    if (currentFilter === "active") return !task.completed;
    if (currentFilter === "completed") return task.completed;

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
    <ToDoContext.Provider
      value={{
        clearAllTasks,
        setShowModal,
        searchTerms,
        setSearchTerms,
        filterTasks,
        handleRemoveTask,
        toggleTask,
        setTasks,
        editingText,
        clearCompletedTasks,
        setCurrentFilter,
        currentFilter,
        tasks,
        newTask,
        handleInputChange,
        addTask,
        setShowModal,
        showModal,
        handleOutsideClick,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}
