import { toast } from "react-toastify";

export function toDoReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      if (state.tasks.some((task) => task.title === action.payload.trim())) {
        toast.error("Task already exists");
        return state;
      }

      if (action.payload.trim() === "") {
        toast.error("Task title cannot be empty");
        return state;
      }

      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), title: action.payload, completed: false },
        ],
      };

    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((item, i) => i !== action.payload),
      };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "CLEAR_COMPLETED":
      return { ...state, tasks: state.tasks.filter((task) => !task.completed) };

    case "CLEAR_ALL":
      return { ...state, tasks: [] };

    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, title: action.payload.title } : task
        ),
      };

    default:
      return initialState;
  }
}
