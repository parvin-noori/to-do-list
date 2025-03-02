import { useRef, useState } from "react";

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
    setTasks(
      tasks.map((task) => {
        return task.id === editedTextId ? { ...task, title: editedText } : task;
      })
    );
    setEditedTextId(null);
  };
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
