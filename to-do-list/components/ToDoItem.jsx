import { useState } from "react";

export default function ToDoItem({
  task,
  handleRemoveTask,
  index,
  toggleTask,
}) {
  return (
    <li className="flex items-center space-x-2 " key={index}>
      <input
        type="checkbox"
        id={`task-${index}`}
        className="peer hidden"
        onChange={() => toggleTask(task.id)}
        checked={task.completed}
      />
      <span className="size-5 border-2 border-orange-500 rounded-full peer-checked:bg-orange-500"></span>
      <label
        htmlFor={`task-${index}`}
        className={`peer-checked:!text-gray-400 peer-checked:line-through  hover:text-orange-500 flex-grow cursor-pointer`}
      >
        {task.title}
      </label>
      <button
        className="btn ms-auto cursor-pointer checked  size-8 rounded-full hover:bg-gray-100 "
        onClick={() => handleRemoveTask(index)}
      >
        X
      </button>
    </li>
  );
}
