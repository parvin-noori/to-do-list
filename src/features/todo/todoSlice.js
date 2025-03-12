import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: action.payload.id,
        title: action.payload.title,
        completed: false,
      });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);

      if (task) {
        task.completed = !task.completed;
      }
    },
    clearCompleted: (state, action) => {
      state.tasks = state.tasks.filter((task) => !task.completed);
    },
    clearAll: (state, action) => {
      state.tasks = [];
    },
    editTask: (state, action) => {
      const task = state.tasks.map((task) => task.id === action.payload.id);

      if (task) {
        task.title = action.payload.title;
      }
    },
  },
});

export const {
  addTask,
  removeTask,
  toggleTask,
  clearCompleted,
  clearAll,
  editTask,
} = todoSlice.actions;
