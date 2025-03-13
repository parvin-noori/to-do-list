import React from "react";
import { ThemeProvider } from "./theme/theme-context";
import { UserProvider } from "./user/user-context";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function AppProvider({ children }) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <UserProvider>{children}</UserProvider>
      </Provider>
    </ThemeProvider>
  );
}
