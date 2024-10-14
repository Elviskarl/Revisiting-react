import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function Form() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  function add(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const todoTrimmed = todo.trim();
    if (todoTrimmed) {
      addTodo({ isCompleted: false, todo: todoTrimmed, id: 0 });
      setTodo("");
    }
  }
  return (
    <>
      <section className="todo--form">
        <h1>Todo project</h1>
        <h3>Schedule a todo item</h3>
        <form onSubmit={(e) => add(e)}>
          <label htmlFor="todos">Add Todo: </label>
          <input
            type="text"
            name="todos"
            id="todos"
            placeholder="Add todo..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </section>
    </>
  );
}

export default Form;
