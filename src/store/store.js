import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../features/todo/TodoSlice";

export const store = configureStore({
  reducer: {
    todo: toDoReducer,
  },
});
