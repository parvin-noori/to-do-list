import React, { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { ToDoContext } from "../contexts/Todo/toDo-context";

export default function ToDoList() {
  const { filterdTask } = useContext(ToDoContext);
  return (
    <ul className="tasks space-y-3 max-h-96 overflow-y-auto">
      {filterdTask.map((task, index) => (
        <ToDoItem task={task} key={index} index={index} />
      ))}
    </ul>
  );
}
