import React from "react";
import { ThemeProvider } from "./theme/theme-context";
import { TodoProvider } from "./Todo/toDo-context";
import { UserProvider } from "./user/user-context";

export default function AppProvider({ children }) {
  return (
    <ThemeProvider>
      <TodoProvider>
        <UserProvider>{children}</UserProvider>
      </TodoProvider>
    </ThemeProvider>
  );
}
