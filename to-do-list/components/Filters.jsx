import React from "react";

export default function Filters({
  clearCompletedTasks,
  setFilters,
  currentFilter,
  remainingItems
}) {
  const filters = ["all", "active", "completed"];

  return (
    <div className="flex items-center justify-between capitalize gap-x-10 text-sm">
      <p>{remainingItems} item left</p>
      <ul className="flex items-center gap-x-4 [&>li:hover]:font-semibold [&>li]:cursor-pointer">
        {filters.map((filter) => {
          return (
            <li
              key={filter}
              onClick={() => setFilters(filter)}
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
