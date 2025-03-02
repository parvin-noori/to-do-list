import { useState } from "react";

export default function ToDoItem({ task, handleRemoveTask, index }) {
  return (
    <div className="flex items-center space-x-2" key={index}>
      <input type="radio" id={`task-${index}`} className="peer hidden" name="task" />
      <span className="size-5 border-2 border-orange-500 rounded-full peer-checked:bg-orange-500"></span>
      <label
        htmlFor={`task-${index}`}
        className={`peer-checked:text-gray-400 peer-checked:line-through`}
      >
        {task}
      </label>
      <button
        className="btn ms-auto cursor-pointer checked  size-8 rounded-full hover:bg-gray-100 "
        onClick={() => handleRemoveTask(index)}
      >
        X
      </button>
    </div>
  );
}
