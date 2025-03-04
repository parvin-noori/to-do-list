import { ToastContainer } from "react-toastify";
import Title from "./Title";
import ToDoList from "./ToDoList";
import Filters from "./Filters";
import Modal from "./Modal";
import Overlay from "./Overlay";
import { useContext } from "react";
import { ToDoContext } from "../contexts/Todo/ToDo-contenxt";

export default function ToDoContainer() {
  const { showModal } = useContext(ToDoContext);
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
