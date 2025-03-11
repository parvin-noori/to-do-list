import { useReducer, useEffect, useState } from "react";
import { toDoReducer } from "../contexts/Todo/ToDo-reducer";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

export function useTodo() {
  const [newTask, setNewTask] = useState("");
  const [currentFilter, setCurrentFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [searchTerms, setSearchTerms] = useState("");
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  const { tasks } = state;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = (event) => {
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
  };

  const resetForm = () => {
    setTaskToEdit(null);
    setNewTask("");
    setShowModal(false);
  };

  const handleRemoveTask = (index) => {
    dispatch({ type: "REMOVE_TASK", payload: index });
  };

  const clearCompletedTasks = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  const clearAllTasks = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

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

  const toggleTask = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

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

  return {
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
    showModal,
    handleOutsideClick,
  };
}
