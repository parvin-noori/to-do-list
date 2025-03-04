import { useContext } from "react";
import Form from "./Form";
import { ToDoContext } from "../contexts/Todo/ToDo-contenxt";

export default function Modal() {
  const { newTask, handleInputChange, addTask, setShowModal, showModal } =
    useContext(ToDoContext);
  return (
    <div
      className={`bg-white fixed lg:top-1/2 z-20 lg:min-w-4/12 lg:left-1/2 transform divide-y divide-gray-200 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-lg rounded-t-lg shadow-lg inset-x-0 lg:scale-0 top-full lg:opacity-0 transition-all duration-300 ${
        showModal ? "lg:scale-100 lg:opacity-100 -translate-y-full" : ""
      }`}
    >
      <div className="modal-header p-5">
        <span className="font-semibold text-xl capitalize">new task to do</span>
      </div>
      <div className="modal-body p-5">
        <Form
          newTask={newTask}
          handleInputChange={handleInputChange}
          addTask={addTask}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      </div>
    </div>
  );
}
