import { createContext, useContext } from "react";

export type Todo = {
  id: number;
  todo: string;
  isCompleted: boolean;
};
interface AllTodo {
  todo: Todo[];
  addTodo: (param: Todo) => void;
  updateTodo: (param: Todo) => void;
  deleteTodo: (id: number) => void;
  showComplete: (id: number) => void;
}

const TodoContext = createContext<AllTodo | undefined>(undefined);

export function useTodo() {
  const context = useContext(TodoContext);
  if (context) return context;
  throw new Error("useTodo must be used within a TodoContextProvider");
}

export const TodoContextProvider = TodoContext.Provider;
