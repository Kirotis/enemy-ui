import { createMemo, createRoot } from "solid-js";
import { createStore, produce } from "solid-js/store";

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
  let todoList: () => ToDoItem[];
  const [store, setStore] = createStore<ToDoStore>({
    todos: defaultValue,
    get todoList() {
      return todoList?.() ?? [];
    },
  });
  // lol https://www.solidjs.com/docs/latest/api#getters
  todoList = createMemo(() =>
    Object.entries<ToDoItem>(store.todos).map(([_, todo]) => todo)
  );

  const editTodo = (todo: ToDoItem) =>
    setStore(
      "todos",
      produce((todos) => {
        todos[todo.id] = todo;
      })
    );

  const addTodo = (todo: Omit<ToDoItem, "id" | "isComplited">) =>
    editTodo({
      id: Date.now(),
      isComplited: false,
      ...todo,
    });

  const deleteTodo = (id: ToDoItem["id"]) =>
    setStore(
      "todos",
      produce((todos) => {
        delete todos[id];
      })
    );

  const toggleTodo = (id: ToDoItem["id"]) =>
    setStore(
      "todos",
      produce((todos) => {
        todos[id].isComplited = !todos[id].isComplited;
      })
    );

  return {
    ...store,
    editTodo,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
});
