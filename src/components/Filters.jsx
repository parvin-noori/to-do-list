import React, { useContext } from "react";
import { ToDoContext } from "../contexts/Todo/toDo-context";

export default function Filters() {
  const filters = ["all", "active", "completed"];

  return (
    <div className="flex items-center justify-between capitalize gap-x-10 text-sm">
      <p>1 item left</p>
      <ul className="flex items-center gap-x-4 [&>li:hover]:font-semibold [&>li]:cursor-pointer">
        {filters.map((filter) => {
          return (
            <li
              key={filter}
            >
              {filter}
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className=" cursor-pointer hover:font-semibold"
      >
        clear completed
      </button>
    </div>
  );
}
