import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks, handleRemoveTask,toggleTask }) {
  return (
    <ul className="tasks space-y-3">
      {tasks.map((task, index) => (
        <ToDoItem
          task={task}
          handleRemoveTask={handleRemoveTask}
          index={index}
          toggleTask={toggleTask}
          key={index}
        />
      ))}
    </ul>
  );
}
