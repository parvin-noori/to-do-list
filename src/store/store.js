import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../features/todo/TodoSlice";
import themeReducer from "../features/theme/ThemeSlice";
import authReducer from "../features/authentication/AuthSlice";

export const store = configureStore({
  reducer: {
    todo: toDoReducer,
    theme: themeReducer,
    auth: authReducer,
  },
});
