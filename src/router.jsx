import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainLayout from "./layout/MainLayout";
import IdentityLayout from "./layout/IdentityLayout";
import { useSelector } from "react-redux";

// const isAuthunticated = () => {
//   return localStorage.getItem("token") !== null;
// };

function ProtectedRoute({ element }) {
 
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? element : <Navigate to="/login" />;
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
