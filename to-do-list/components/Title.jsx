import React from "react";

export default function Title({ clearAllTasks }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-semibold text-blue-950">To-Do list</h2>
      <button type="button" className="cursor-pointer hover:font-semibold" onClick={clearAllTasks}>
        remove all tasks
      </button>
    </div>
  );
}
