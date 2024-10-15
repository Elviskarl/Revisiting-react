import { useEffect, useState } from "react";
import "./App.css";
import { Todo, TodoContextProvider } from "./context/TodoContext";
import { Form, TodoItems } from "./components";

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);
  function addTodo(todo: Todo) {
    const newTodo: Todo = { ...todo, id: Date.now() };
    setTodo((prevVal) => [{ ...newTodo }, ...prevVal]);
  }
  function updateTodo(updatedTodo: Todo) {
    setTodo((prevVal) => {
      return prevVal.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
    });
  }
  function deleteTodo(id: number) {
    setTodo((prevVal) => prevVal.filter((todo) => todo.id !== id));
  }
  function showComplete(id: number) {
    setTodo((prevVal) =>
      prevVal.map((todo) => {
        if (todo.id === id) return { ...todo, isCompleted: !todo.isCompleted };
        return todo;
      })
    );
  }
  useEffect(() => {
    const todoStrings = localStorage.getItem("todoItems");
    if (todoStrings) {
      const TodoItems: Todo[] = JSON.parse(todoStrings);
      if (TodoItems.length > 0) setTodo(TodoItems);
    }
  }, []);
  useEffect(() => {
    if (TodoItems.length > 0) {
      localStorage.setItem("todoItems", JSON.stringify(todo));
    }
  }, [todo]);
  return (
    <TodoContextProvider
      value={{ addTodo, deleteTodo, updateTodo, showComplete, todo }}
    >
      <Form />
      {todo.map((todo) => (
        <div key={todo.id}>
          <TodoItems todo={todo} />
        </div>
      ))}
    </TodoContextProvider>
  );
}

export default App;
