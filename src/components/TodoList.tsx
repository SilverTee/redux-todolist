import { useSelector } from "react-redux";
import { RootState } from "../state/store";

function TodoList() {
  const todos = useSelector((state: RootState) => state.todo);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} | Completed:{" "}
            {todo.completed ? <span>&#10004;</span> : <span>&#10008;</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
