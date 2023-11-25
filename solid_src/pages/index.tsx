import { Route, Routes } from "@solidjs/router";
import { MainPage } from "./MainPage";
import { TodosPage } from "./TodosPage";
import { TodoPage } from "./TodoPage";
import { TodoForm } from "./TodoForm copy";

export const Pages = () => (
  <Routes>
    <Route path="/" component={MainPage} />
    <Route path="/todos">
      <Route path="/" component={TodosPage} />
      <Route path="/:id" component={TodoPage} />
    </Route>
    <Route path="/form" component={TodoForm} />
  </Routes>
);
