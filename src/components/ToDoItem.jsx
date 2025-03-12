import { useContext } from "react";
import { ToDoContext } from "../contexts/Todo/Use-todo";

export default function ToDoItem({ task, index }) {
  const { handleRemoveTask, handleToggleTask, handleEditTask } = useContext(ToDoContext);
  return (
    <li className="flex items-center space-x-2 " key={index}>
      <input
        type="checkbox"
        id={`task-${index}`}
        className="peer hidden"
        onChange={() => handleToggleTask(task.id)}
        checked={task.completed}
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
        onClick={() => handleRemoveTask(index)}
      >
        X
      </button>
    </li>
  );
}
