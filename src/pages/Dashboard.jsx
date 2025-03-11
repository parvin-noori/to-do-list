import ToDoContainer from "../components/ToDoContainer";
import { ToDoProvider } from "../contexts/Todo/Use-todo";

export default function Dashboard() {
  return (
    <ToDoProvider>
      <ToDoContainer />
    </ToDoProvider>
  );
}
