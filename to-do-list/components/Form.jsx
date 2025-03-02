import React from "react";

export default function Form({ handleInputChange, newTask, addTask }) {
  return (
    <form className="bg-gray-200  rounded-full flex justify-between" onSubmit={addTask}>
      <input
        type="text"
        placeholder="add your task"
        className="bg-transparent indent-2 outline-0"
        value={newTask}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="bg-orange-400 text-white px-10 py-3 rounded-full hover:contrast-200 cursor-pointer "
      >
        add
      </button>
    </form>
  );
}
