import { For } from "solid-js";
import { Cell, CellButton, View } from "../components";
import { globalStore } from "../store";
import { useNavigate } from "@solidjs/router";

export const TodosPage = () => {
  const navigate = useNavigate(); 
  return (
    <View>
      <Cell header>List</Cell>
      <For each={globalStore.todoList}>
        {(todo) => {
          const info = `[${todo.isComplited ? "X" : "-"}] ${todo.title}`;
          return (
            <CellButton onClick={() => navigate(`/todos/${todo.id}`)}>
              {info}
            </CellButton>
          );
        }}
      </For>
    </View>
  );
};
