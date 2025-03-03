import React from "react";

export default function Title({ clearAllTasks, setShowModal }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-semibold text-blue-950">To-Do list</h2>
      {/* <button type="button" className="cursor-pointer hover:font-semibold" onClick={clearAllTasks}>
        remove all tasks
      </button> */}
      <button
        className="bg-orange-100 capitalize text-orange-400 px-4 py-2 rounded-lg cursor-pointer hover:bg-white hover:border-orange-400 transition-all duration-300 border border-transparent"
        type="button"
        onClick={()=>setShowModal(true)}
      >
        + new task
      </button>
    </div>
  );
}
