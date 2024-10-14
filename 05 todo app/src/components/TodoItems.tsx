import { useState } from "react";
import { Todo, useTodo } from "../context/TodoContext";

interface TodoItemsProps {
  todo: Todo;
}
export default function TodoItems({ todo }: TodoItemsProps) {
  const [isEditable, setIsEditable] = useState(false);
  const [todoMessage, setTodoMessage] = useState(todo.todo);
  const { deleteTodo, updateTodo, showComplete } = useTodo();

  function editTodo() {
    updateTodo({ todo: todoMessage, ...todo });
    setIsEditable(false);
  }

  return (
    <>
      <section
        className={`todo--section ${todo.isCompleted} ? "is--complete" : "not--complete"`}
      >
        <div>
          <label htmlFor="isTodoCompleted">Completed: </label>
          <input
            type="checkbox"
            name="isTodoCompleted"
            id="isTodoCompleted"
            checked={todo.isCompleted}
            onChange={() => showComplete(todo.id)}
          />
        </div>
        <div>
          <label htmlFor="message"></label>
          <input
            type="text"
            name="message"
            id="message"
            value={todoMessage}
            readOnly={!isEditable}
            onChange={(e) => setTodoMessage(e.target.value)}
            className={isEditable ? "is--editable" : "not--editable"}
          />
        </div>
        <button
          onClick={() => {
            if (todo.isCompleted) return;
            if (isEditable) {
              editTodo();
            } else {
              setIsEditable((prevVal) => !prevVal);
            }
          }}
          disabled={todo.isCompleted}
        >
          {isEditable ? "Save 💾" : "Edit 📝"}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>❌</button>
      </section>
    </>
  );
}
