import React, { useContext } from "react";
import { ToDoContext } from "../contexts/Todo/toDo-context";

export default function Overlay() {
  const { handleOutsideClick } = useContext(ToDoContext);

  return (
    <div
      className="overlay bg-black/50 inset-0 fixed backdrop-blur-sm z-10"
      id="overlay"
      onClick={handleOutsideClick}
    ></div>
  );
}
