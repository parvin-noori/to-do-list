import { setCurrentFilter, clearAll } from "../features/todo/TodoSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Filters() {
  const dispatch = useDispatch();
  const filters = ["all", "active", "completed"];

  const { currentFilter, tasks } = useSelector((state) => state.todo);

  const remaingItem = tasks.filter((task) => !task.completed).length;

  return (
    <div className="flex items-center justify-between capitalize gap-x-10 text-sm">
      <p>{remaingItem} item left</p>
      <ul className="flex items-center gap-x-4 [&>li:hover]:font-semibold [&>li]:cursor-pointer">
        {filters.map((filter) => {
          return (
            <li
              key={filter}
              onClick={() => dispatch(setCurrentFilter(filter))}
              className={`${
                currentFilter === filter
                  ? "text-orange-500 font-bold"
                  : "font-gray-400"
              }`}
            >
              {filter}
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className=" cursor-pointer hover:font-semibold"
        onClick={() => dispatch(clearAll())}
      >
        clear completed
      </button>
    </div>
  );
}
