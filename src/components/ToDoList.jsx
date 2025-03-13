import React, { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";

export default function ToDoList() {
  const { currentFilter, tasks, searchTerms } = useSelector(
    (state) => state.todo
  );
  const filterTasks = tasks.filter((task) => {
    if (currentFilter === "active") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    if (
      searchTerms &&
      !task.title.toLowerCase().includes(searchTerms.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <ul className="tasks space-y-3 max-h-96 overflow-y-auto">
      {filterTasks.map((task, index) => (
        <ToDoItem task={task} key={index} index={index} />
      ))}
    </ul>
  );
}
