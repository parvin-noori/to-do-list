import React, { useEffect, useRef } from "react";

export default function Form({ newTask, setShowModal, showModal }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (showModal) {
      inputRef.current.focus();
    }
  }, [showModal]);

  return (
    <form className="space-y-4">
      <div className="input-group flex flex-col space-y-2">
        <label htmlFor="taskName" className="capitalize">
          title task
        </label>
        <input
          type="text"
          placeholder="add task name"
          className="bg-gray-100 indent-2 outline-0 p-4 rounded-md"
          value={newTask}
          id="taskName"
          ref={inputRef}
        />
      </div>
      {/* <div className="input-group flex flex-col space-y-2">
        <label htmlFor="description" className="capitalize">
          description
        </label>
        <textarea
          type="text"
          placeholder="description"
          className="bg-gray-100 indent-2 outline-0 p-2 rounded-md"
          id="description"
        ></textarea>
      </div>
      <div className="grid grid-cols-2 gap-x-3">
        <div className="input-group flex flex-col space-y-2">
          <label htmlFor="date" className="capitalize">
            date
          </label>
          <input
            type="date"
            placeholder="description"
            className="bg-gray-100 indent-2 outline-0 p-2 rounded-md"
            id="date"
          />
        </div>
        <div className="input-group flex flex-col space-y-2">
          <label htmlFor="time" className="capitalize">
            time
          </label>
          <input
            type="time"
            placeholder="description"
            className="bg-gray-100 indent-2 outline-0 p-2 rounded-md"
            id="time"
          />
        </div>
      </div> */}
      <div className="grid grid-cols-2 gap-x-2">
        <button
          type="button"
          onClick={() => setShowModal(false)}
          className="border border-orange-400 text-orange-400 px-10 py-3 rounded-md hover:contrast-200 cursor-pointer "
        >
          cancel
        </button>
        <button
          type="submit"
          className="bg-orange-400 text-white px-10 py-3 rounded-md hover:contrast-200 cursor-pointer "
        >
          create
        </button>
      </div>
    </form>
  );
}
