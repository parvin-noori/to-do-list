import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainLayout from "./layout/MainLayout";
import IdentityLayout from "./layout/IdentityLayout";
import { useContext } from "react";
import { UserContext } from "./contexts/user/user-context";

// const isAuthunticated = () => {
//   return localStorage.getItem("token") !== null;
// };

function ProtectedRoute({ element }) {
  const { isAuthunticated } = useContext(UserContext);
  return isAuthunticated ? element : <Navigate to="/login" />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<MainLayout />} />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
