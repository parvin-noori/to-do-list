import {
  toggleTask,
  removeTask,
  setShowModal,
  setNewTask,
  setTaskToEdit,
} from "../features/todo/TodoSlice";
import { useDispatch } from "react-redux";

export default function ToDoItem({ task, index }) {
  const dispatch = useDispatch();

  function handleEditTask(task) {
    dispatch(setShowModal(true));
    dispatch(setNewTask(task.title));
    dispatch(setTaskToEdit(task));
  }
  return (
    <li className="flex items-center space-x-2 " key={index}>
      <input
        type="checkbox"
        id={`task-${index}`}
        className="peer hidden"
        checked={task.completed}
        onChange={() => dispatch(toggleTask({ id: task.id }))}
      />
      <span className="size-5 border-2 border-orange-500 rounded-full peer-checked:bg-orange-500"></span>
      <label
        htmlFor={`task-${index}`}
        className={`peer-checked:!text-gray-400 peer-checked:line-through  hover:text-orange-500 flex-grow cursor-pointer`}
      >
        {task.title}
      </label>
      {!task.completed && (
        <button
          className="cursor-pointer hover:text-orange-500"
          onClick={() => handleEditTask(task)}
        >
          edit
        </button>
      )}
      <button
        className="btn ms-auto cursor-pointer checked  size-8 rounded-full hover:bg-gray-100 "
        onClick={() => dispatch(removeTask({ id: task.id }))}
      >
        X
      </button>
    </li>
  );
}
