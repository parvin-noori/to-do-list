import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({
  tasks,
  handleRemoveTask,
  toggleTask,
  setTasks,
}) {
  return (
    <ul className="tasks space-y-3 max-h-96 overflow-y-auto">
      {tasks.map((task, index) => (
        <ToDoItem
          task={task}
          handleRemoveTask={handleRemoveTask}
          index={index}
          toggleTask={toggleTask}
          key={index}
          setTasks={setTasks}
          tasks={tasks}
        />
      ))}
    </ul>
  );
}
