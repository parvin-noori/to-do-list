// import { createContext, useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";

// export const ToDoContext = createContext();

// export function ToDoProvider({ children }) {
//   // State management
//   const [newTask, setNewTask] = useState("");
//   const [currentFilter, setCurrentFilter] = useState("all");
//   const [showModal, setShowModal] = useState(false);
//   const [searchTerms, setSearchTerms] = useState("");
//   const [taskToEdit, setTaskToEdit] = useState(null);

//   const contextValue = {
//     // State
//     // tasks,
//     newTask,
//     currentFilter,
//     showModal,
//     searchTerms,
//     // filteredTasks,

//     // Setters
//     setShowModal,
//     setSearchTerms,
//     setCurrentFilter,
//   };

//   return (
//     <ToDoContext.Provider value={contextValue}>{children}</ToDoContext.Provider>
//   );
// }
