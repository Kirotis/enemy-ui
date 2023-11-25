import { computed, reactive } from "vue";

const defaultValue = {
  [0]: {
    id: 0,
    title: "test",
    description: "text",
    isComplited: false,
  },
  [1]: {
    id: 1,
    title: "test1",
    description: "text1",
    isComplited: true,
  },
};

export const createStore = () => {
  const todos = reactive(defaultValue);
  const todoList = computed(
    () => Object.entries(todos).map(([_, val]) => val) || []
  );

  const editTodo = (todo) => {
    todos[todo.id] = todo;
  };
  const addTodo = (title, description) => {
    const id = Date.now();
    editTodo({
      id,
      title,
      description,
      isComplited: false,
    });
  };

  const deleteTodo = (id) => {
    delete todos[id];
  };

  const toggleTodo = (id) => {
    const todo = todos[id];
    if (todo) {
      todos[id].isComplited = !todo.isComplited;
    }
  };

  return {
    todos,
    todoList,
    editTodo,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
};
