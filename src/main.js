import { createApp } from "vue";
import { RouterView } from "vue-router";
import { router } from "./pages";
import { createStore } from "./store";
import "./style.css";

createApp(RouterView).provide("store", createStore()).use(router).mount("#app");
