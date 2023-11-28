import { createEffect, createMemo, createRoot, createSignal } from "solid-js";

interface ToDoItem {
  readonly id: number;
  title: string;
  description: string;
  isComplited: boolean;
}

interface ToDoStore {
  todos: () => Record<ToDoItem["id"], ToDoItem>;
  todoList: () => ToDoItem[];
}

interface GlobalStore extends ToDoStore {
  addTodo: (todo: Omit<ToDoItem, "id" | "isComplited">) => void;
  editTodo: (todo: ToDoItem) => void;
  deleteTodo: (id: ToDoItem["id"]) => void;
  toggleTodo: (id: ToDoItem["id"]) => void;
}

const defaultValue = {
  [0]: {
    id: 0,
    description: "text",
    title: "test",
    isComplited: false,
  },
  [1]: {
    id: 1,
    description: "text1",
    title: "test1",
    isComplited: true,
  },
};

export const globalStore = createRoot<GlobalStore>(() => {
  const [todos, setTodos] =
    createSignal<Record<ToDoItem["id"], ToDoItem>>(defaultValue);
  const todoList = createMemo(() =>
    Object.entries<ToDoItem>(todos()).map(([_, todo]) => todo)
  );

  const editTodo = (todo: ToDoItem) =>
    setTodos((todos) => ({
      ...todos,
      [todo.id]: todo,
    }));

  const addTodo = (todo: Omit<ToDoItem, "id" | "isComplited">) =>
    editTodo({
      id: Date.now(),
      isComplited: false,
      ...todo,
    });

  const deleteTodo = (id: ToDoItem["id"]) =>
    setTodos(({ [id]: _, ...todos }) => todos);

  const toggleTodo = (id: ToDoItem["id"]) =>
    setTodos((todos) => {
      const todo = todos[id];
      if (!todo) {
        return todos;
      }
      return {
        ...todos,
        [id]: {
          ...todo,
          isComplited: !todo.isComplited,
        },
      };
    });

  return {
    todoList,
    todos,
    editTodo,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
});
