import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks") || []),
  showModal: false,
  newTask: "",
  taskToEdit: null,
  currentFilter: "all",
  searchTerms: "",
};

const TodoSlice = createSlice({
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
    clearCompleted: (state, action) => {
      state.tasks = state.tasks.filter((task) => !task.completed);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);

      if (task) {
        task.completed = !task.completed;
      }
    },
    clearAll: (state, action) => {
      state.tasks = [];
    },
    editTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);

      if (task) {
        task.title = action.payload.title;
      }
    },
    
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setNewTask: (state, action) => {
      state.newTask = action.payload;
    },
    setTaskToEdit: (state, action) => {
      state.taskToEdit = action.payload;
    },
    setCurrentFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
    setSearchTerms: (state, action) => {
      state.searchTerms = action.payload;
    },
  },
});

export const {
  addTask,
  removeTask,
  clearCompleted,
  toggleTask,
  clearAll,
  editTask,
  setShowModal,
  setNewTask,
  setTaskToEdit,
  setCurrentFilter,
  setSearchTerms,
} = TodoSlice.actions;

export default TodoSlice.reducer;
