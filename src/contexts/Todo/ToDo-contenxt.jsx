import { createContext, useReducer, useEffect, useState } from "react";
import { toDoReducer } from "./ToDo-reducer";

export const ToDoContext = createContext();

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

export function ToDoProvider({ children }) {
  const [newTask, setNewTask] = useState("");
  // const [tasks, setTasks] = useState(
  //   () => JSON.parse(localStorage.getItem("tasks")) || []
  // );
  const [currentFilter, setCurrentFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [searchTerms, setSearchTerms] = useState("");
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  const { tasks } = state;

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

    if (taskToEdit) {
      dispatch({
        type: "EDIT_TASK",
        payload: { id: taskToEdit.id, title: newTask.trim() },
      });
      resetForm();
    } else {
      dispatch({ type: "ADD_TASK", payload: newTask.trim() });

      setNewTask("");
    }
  }

  function resetForm() {
    setTaskToEdit(null);
    setNewTask("");
    setShowModal(false);
  }

  // Remove a task
  function handleRemoveTask(index) {
    dispatch({ type: "REMOVE_TASK", payload: index });
  }

  // Clear completed tasks
  function clearCompletedTasks() {
    dispatch({ type: "CLEAR_COMPLETED" });
  }

  function clearAllTasks() {
    dispatch({ type: "CLEAR_ALL" });
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
    dispatch({ type: "TOGGLE_TASK", payload: id });
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
