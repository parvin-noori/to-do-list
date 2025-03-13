import { createContext, useReducer } from "react";
import { toDoReducer } from "./ToDo-reducer";

export const ToDoContext = createContext();

const initialState = {
  tasks: localStorage.getItem("tasks") || [],
};

export const TodoProvider = ({ children }) => {
  const { state, dispatch } = useReducer(toDoReducer, initialState);
  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
};
