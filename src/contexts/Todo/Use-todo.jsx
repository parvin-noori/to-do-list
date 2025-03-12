import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  removeTask,
  toggleTask,
  clearCompleted,
  clearAll,
  editTask,
} from "../../features/todo/todoSlice";

export const ToDoContext = createContext();

export function ToDoProvider({ children }) {
  // State management
  const [newTask, setNewTask] = useState("");
  const [currentFilter, setCurrentFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [searchTerms, setSearchTerms] = useState("");
  const [taskToEdit, setTaskToEdit] = useState(null);

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);

  // Persist tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Form handlers
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTask = newTask.trim();

    if (trimmedTask === "") {
      toast.error("Please enter a task");
      return;
    }

    const isDuplicate = tasks.some(
      (task) => task.title.trim().toLowerCase() === trimmedTask.toLowerCase()
    );

    if (isDuplicate) {
      toast.error("Task already exists");
      return;
    }

    if (taskToEdit) {
      dispatch(editTask({ id: taskToEdit.id, title: trimmedTask }));
      setTaskToEdit(null);
      toast.success("Task updated");
    } else {
      dispatch(addTask({ id: Date.now(), title: trimmedTask }));
      toast.success("Task added");
    }

    setShowModal(false);
    setNewTask("");
  };

  // Task operations
  const handleRemoveTask = (index) => {
    dispatch(removeTask({ id: tasks[index].id }));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask({ id }));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const handleClearAll = () => {
    dispatch(clearAll());
  };

  const handleEditTask = (task) => {
    setShowModal(true);
    setNewTask(task.title);
    setTaskToEdit(task);
  };

  // Modal handlers
  const handleOutsideClick = (e) => {
    if (e.target.id === "overlay") {
      setShowModal(false);
      setNewTask("");
    }
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (
      searchTerms &&
      !task.title.toLowerCase().includes(searchTerms.toLowerCase())
    ) {
      return false;
    }

    switch (currentFilter) {
      case "active":
        return !task.completed;
      case "completed":
        return task.completed;
      default:
        return true;
    }
  });

  const contextValue = {
    // State
    tasks,
    newTask,
    currentFilter,
    showModal,
    searchTerms,
    filteredTasks,

    // Setters
    setShowModal,
    setSearchTerms,
    setCurrentFilter,

    // Handlers
    handleSubmit,
    handleInputChange,
    handleRemoveTask,
    handleToggleTask,
    handleEditTask,
    handleClearCompleted,
    handleClearAll,
    handleOutsideClick,
  };

  return (
    <ToDoContext.Provider value={contextValue}>{children}</ToDoContext.Provider>
  );
}
