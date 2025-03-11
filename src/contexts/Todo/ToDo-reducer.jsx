export const toDoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: action.payload.id,
            title: action.payload.title,
            completed: false,
          },
        ],
      };

    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.filter((task) => !task.completed),
      };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case "CLEAR_ALL":
      return {
        ...state,
        tasks: [],
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, title: action.payload.title }
            : task
        ),
      };
  }
};
