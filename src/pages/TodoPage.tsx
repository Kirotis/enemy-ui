import { useNavigate, useParams } from "@solidjs/router";
import { globalStore } from "../store";
import { Cell, CellButton, View } from "../components";
import { Show } from "solid-js";

export const TodoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = () => globalStore.todos[parseInt(id)];
  const isComplited = () =>
    todo().isComplited ? "Complited" : "NOT Complited";
  return (
    <View>
      <Show when={Boolean(todo())}>
        <Cell header>{todo().title}</Cell>
        <CellButton onClick={() => globalStore.toggleTodo(todo().id)}>
          {/* @ts-expect-error Why is this reactive, but this "isComplited()" not reactive ???????? */}
          {isComplited}
        </CellButton>
        <Cell>{todo().description}</Cell>
        <CellButton onClick={() => navigate(`/form?edit=${todo().id}`)}>
          Edit
        </CellButton>
      </Show>
    </View>
  );
};
