import { Provider } from "react-redux";
import { store } from "./store";
import ToDoContainer from "../components/ToDoContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-svh grid place-content-center">
      <ToDoContainer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
