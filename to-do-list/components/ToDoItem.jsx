import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function ToDoItem({
  task,
  handleRemoveTask,
  index,
  toggleTask,
  setTasks,
  tasks,
}) {
  const [editedTextId, setEditedTextId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const inputRef = useRef(null);

  const editingText = (task) => {
    setEditedTextId(task.id);
    setEditedText(task.title);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const saveEdit = () => {
    const taskToUpdate = tasks.find((task) => task.id === editedTextId);

    if (taskToUpdate && taskToUpdate.title === editedText) {
      setEditedTextId(null);
      return;
    }

    if (editedText.trim() === "") {
      toast.error("Task title cannot be empty");
      return;
    }

    if (tasks.some((task) => task.title === editedText.trim())) {
      toast.error("Task title must be unique");
      return;
    }

    setTasks(
      tasks.map((task) =>
        task.id === editedTextId ? { ...task, title: editedText } : task
      )
    );

    setEditedTextId(null);
  };

  useEffect(() => {
    if (editedTextId !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editedTextId]);

  return (
    <li className="flex items-center space-x-2 " key={index}>
      <input
        type="checkbox"
        id={`task-${index}`}
        className="peer hidden"
        onChange={() => toggleTask(task.id)}
        checked={task.completed}
      />
      <span className="size-5 border-2 border-orange-500 rounded-full peer-checked:bg-orange-500"></span>
      <label
        htmlFor={`task-${index}`}
        className={`peer-checked:!text-gray-400 peer-checked:line-through  hover:text-orange-500 flex-grow cursor-pointer`}
      >
        {editedTextId === task.id ? (
          <input
            className="bg-gray-200 rounded-full outline-0 p-2"
            ref={inputRef}
            onBlur={saveEdit}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            onChange={(e) => setEditedText(e.target.value)}
            value={editedText}
          />
        ) : (
          task.title
        )}
      </label>
      {!task.completed && (
        <button
          className="cursor-pointer hover:text-orange-500"
          onClick={() => editingText(task)}
        >
          edit
        </button>
      )}
      <button
        className="btn ms-auto cursor-pointer checked  size-8 rounded-full hover:bg-gray-100 "
        onClick={() => handleRemoveTask(index)}
      >
        X
      </button>
    </li>
  );
}
