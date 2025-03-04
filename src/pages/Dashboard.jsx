import ToDoContainer from "../components/ToDoContainer";
import { ToDoProvider } from "../contexts/Todo/ToDo-contenxt";

export default function Dashboard() {
  return (
    <ToDoProvider>
      <ToDoContainer />
    </ToDoProvider>
  );
}
