import React, { useContext } from "react";
import { ToDoContext } from "../contexts/Todo/Use-todo";

export default function Title() {
  const { setShowModal, searchTerms, setSearchTerms } = useContext(ToDoContext);
  
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-blue-950">To-Do list</h2>
        {/* <button type="button" className="cursor-pointer hover:font-semibold" onClick={clearAllTasks}>
        remove all tasks
      </button> */}
        <button
          className="bg-orange-100 capitalize text-orange-400 px-4 py-2 rounded-lg cursor-pointer hover:bg-white hover:border-orange-400 transition-all duration-300 border border-transparent"
          type="button"
          onClick={() => setShowModal(true)}
        >
          + new task
        </button>
      </div>
      <form
        className="bg-gray-100 flex items-center justify-between  rounded-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="bg-transparent outline-0 grow indent-3"
          placeholder="search task"
          value={searchTerms}
          onChange={(e) => setSearchTerms(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange-400 text-white rounded-full px-8 py-3 cursor-pointer"
        >
          search
        </button>
      </form>
    </div>
  );
}
