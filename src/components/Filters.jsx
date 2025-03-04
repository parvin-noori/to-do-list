import React, { useContext } from "react";
import { ToDoContext } from "../contexts/Todo/ToDo-contenxt";

export default function Filters() {
  const filters = ["all", "active", "completed"];
  const { clearCompletedTasks, setCurrentFilter, currentFilter, tasks } =
    useContext(ToDoContext);

  let remainingItems = tasks.filter((task) => !task.completed).length;

  return (
    <div className="flex items-center justify-between capitalize gap-x-10 text-sm">
      <p>{remainingItems} item left</p>
      <ul className="flex items-center gap-x-4 [&>li:hover]:font-semibold [&>li]:cursor-pointer">
        {filters.map((filter) => {
          return (
            <li
              key={filter}
              onClick={() => setCurrentFilter(filter)}
              className={`${
                currentFilter === filter ? "font-semibold text-orange-500" : ""
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
        onClick={clearCompletedTasks}
      >
        clear completed
      </button>
    </div>
  );
}
