import { toast } from "react-toastify";
import {
  setShowModal,
  setTaskToEdit,
  setNewTask,
  addTask,
  editTask,
} from "./TodoSlice";

export const handleSubmitTasks = (tasks, newTask, taskToEdit, dispatch) => {
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
    dispatch(editTask({ id: taskToEdit.id, title: newTask }));
    setTaskToEdit(null);

    toast.success("task updated");
  } else {
    dispatch(addTask({ id: Date.now(), title: newTask }));
    toast.success(`${newTask} added`);
  }
  dispatch(setShowModal(false));
  dispatch(setNewTask(""));
};
