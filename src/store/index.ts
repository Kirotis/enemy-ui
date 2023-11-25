import { createRoot } from "solid-js";
import { createStore } from "solid-js/store";

interface ToDoItem {
  readonly id: number;
  title: string;
  description: string;
  isComplited: boolean;
}

interface ToDoStore {
  todos: Record<ToDoItem["id"], ToDoItem>;
  todoList: ToDoItem[];
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
  const [store, setStore] = createStore<ToDoStore>({
    todos: defaultValue,
    get todoList() {
      return Object.entries<ToDoItem>(this.todos).map(([_, todo]) => todo);
    },
  });

  const editTodo = (todo: ToDoItem) => setStore("todos", todo.id, todo);

  const addTodo = (todo: Omit<ToDoItem, "id" | "isComplited">) =>
    editTodo({
      id: Date.now(),
      isComplited: false,
      ...todo,
    });

  const deleteTodo = (id: ToDoItem["id"]) =>
    setStore("todos", ({ [id]: _, ...todos }) => todos);

  const toggleTodo = (id: ToDoItem["id"]) =>
    setStore("todos", id, "isComplited", (isComplited) => !isComplited);

  return {
    ...store,
    editTodo,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
});
