import { useContext } from "react";
import { ToDoContext } from "../contexts/Todo/toDo-context";

export default function ToDoItem({ index }) {
  return (
    <li className="flex items-center space-x-2 " key={index}>
      <input type="checkbox" id={`task-${index}`} className="peer hidden" />
      <span className="size-5 border-2 border-orange-500 rounded-full peer-checked:bg-orange-500"></span>
      <label
        htmlFor={`task-${index}`}
        className={`peer-checked:!text-gray-400 peer-checked:line-through  hover:text-orange-500 flex-grow cursor-pointer`}
      ></label>
      {!task.completed && (
        <button className="cursor-pointer hover:text-orange-500">edit</button>
      )}
      <button className="btn ms-auto cursor-pointer checked  size-8 rounded-full hover:bg-gray-100 ">
        X
      </button>
    </li>
  );
}
