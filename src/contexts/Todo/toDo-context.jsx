import { createContext, useEffect, useReducer, useState } from "react";
import { toDoReducer } from "./ToDo-reducer";
import { toast } from "react-toastify";

export const ToDoContext = createContext();

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

export const TodoProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  const [newTask, setNewTask] = useState("");
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [searchTerms, setSearchTerms] = useState("");
  const { tasks } = state;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleSubmit(event) {
    event.preventDefault();

    const isDuplicated = tasks.some(
      (task) => task.title.trim().toLowerCase() === newTask.trim().toLowerCase()
    );

    if (isDuplicated) {
      toast.error("task is exist");
      return;
    }

    if (newTask.trim() === "") {
      toast.error("Please enter a task");
      return;
    }

    if (taskToEdit) {
      dispatch({
        type: "EDIT_TASK",
        payload: { id: taskToEdit.id, title: newTask },
      });
      setTaskToEdit(null);
      console.log(newTask);

      toast.success("task updated");
    } else {
      dispatch({
        type: "ADD_TASK",
        payload: { id: Date.now(), title: newTask },
      });
      toast.success(`${newTask} added`);
    }
    setShowModal(false);
    setNewTask("");
  }

  function handleOutsideClick(event) {
    if (event.target.id === "overlay") {
      setShowModal(false);
      setNewTask("");
    }
  }

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleToggleTask(id) {
    dispatch({ type: "TOGGLE_TASK", payload: { id } });
  }

  function handleRemoveTask(id) {
    dispatch({ type: "REMOVE_TASK", payload: { id } });
  }

  function handleEditTask(task) {
    setShowModal(true);
    console.log(task.title);
    setNewTask(task.title);
    setTaskToEdit(task);
  }

  function handleClearAll() {
    dispatch({ type: "CLEAR_ALL" });
  }

  const filterdTask = tasks.filter((task) => {
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

  return (
    <ToDoContext.Provider
      value={{
        showModal,
        setShowModal,
        newTask,
        setShowModal,
        handleSubmit,
        handleOutsideClick,
        handleInputChange,
        handleRemoveTask,
        handleToggleTask,
        handleClearAll,
        handleEditTask,
        filterdTask,
        setCurrentFilter,
        currentFilter,
        searchTerms,
        setSearchTerms,
        tasks
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
