import { ToastContainer } from "react-toastify";
import Title from "./Title";
import ToDoList from "./ToDoList";
import Filters from "./Filters";
import Modal from "./Modal";
import Overlay from "./Overlay";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ToDoContainer() {
  const { showModal, tasks } = useSelector((state) => state.todo);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <>
      <div className="bg-white rounded-xl p-6 w-full space-y-8 ">
        <Title />
        <ToDoList />
        <Filters />
        <ToastContainer />
      </div>
      <Modal />

      {showModal && (
        <>
          <Overlay />
        </>
      )}
    </>
  );
}
