import React, { useContext } from "react";
import { ToDoContext } from "../contexts/Todo/toDo-context";

export default function Filters() {
  const filters = ["all", "active", "completed"];

  const { setCurrentFilter, currentFilter, handleClearAll, tasks } =
    useContext(ToDoContext);
  const remaingItem = tasks.filter((task) => !task.completed).length;

  return (
    <div className="flex items-center justify-between capitalize gap-x-10 text-sm">
      <p>{remaingItem} item left</p>
      <ul className="flex items-center gap-x-4 [&>li:hover]:font-semibold [&>li]:cursor-pointer">
        {filters.map((filter) => {
          return (
            <li
              key={filter}
              onClick={() => setCurrentFilter(filter)}
              className={`${
                currentFilter === filter
                  ? "text-orange-500 font-bold"
                  : "font-gray-400"
              }`}
            >
              {filter}
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className=" cursor-pointer hover:font-semibold"
        onClick={handleClearAll}
      >
        clear completed
      </button>
    </div>
  );
}
