import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import router from "./router.jsx";
import { UserProvider } from "./contexts/user/user-context.jsx";
import { ThemeProvider } from "./contexts/theme/theme-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
