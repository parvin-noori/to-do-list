import React, { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { ToDoContext } from "../contexts/Todo/ToDo-contenxt";

export default function ToDoList() {
  const { filterTasks } = useContext(ToDoContext);
  return (
    <ul className="tasks space-y-3 max-h-96 overflow-y-auto">
      {filterTasks.map((task, index) => (
        <ToDoItem task={task} index={index} key={index} />
      ))}
    </ul>
  );
}
