import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home.vue";
import TodoList from "./TodoList.vue";
import TodoView from "./TodoView.vue";
import TodoForm from "./TodoForm.vue";

const routes = [
  { name: "home", path: "/", component: Home },
  { name: "todos", path: "/todos", component: TodoList },
  { name: "todo", path: "/todo:id", component: TodoView },
  { name: "form", path: "/form", component: TodoForm },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
