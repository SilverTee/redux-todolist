import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import "./style.css";
import { useDispatch } from "react-redux";
import { TodoState, addTodo, toggleTodo } from "../state/todo/todoSlice";

function TodoList() {
  const todos = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const todoInput = event.currentTarget.todo;

    const todoTitle = todoInput.value.trim();
    if (todoTitle) {
      dispatch(
        addTodo({ title: todoTitle, completed: false, id: Math.random() })
      );
      todoInput.value = "";
    }
  }

  const handleSetDone = (todo: TodoState) => {
    console.log(todo);
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div>
      <h1>Add Todo:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todo">Todo</label>
          <input type="text" id="todo" />
        </div>
        <button type="submit" className="btn">
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <>
            <li key={todo.id + todo.title}>
              {todo.title} | Completed:{" "}
              {todo.completed ? <span>&#10004;</span> : <span>&#10008;</span>}
            </li>
            <button onClick={() => handleSetDone(todo)} className="btn">
              {todo.completed ? "Undo" : "Done"}
            </button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
