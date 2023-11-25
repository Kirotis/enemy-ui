import { useNavigate, useSearchParams } from "@solidjs/router";
import { Cell, CellButton, Input, View } from "../components";
import { createMemo, createSignal } from "solid-js";
import { globalStore } from "../store";

export const TodoForm = () => {
  const [{ edit }] = useSearchParams();
  const navigate = useNavigate();

  const todo = () => globalStore.todos[parseInt(edit)];

  const [title, setTitle] = createSignal(todo()?.title || "");
  const [description, setDescription] = createSignal(todo()?.description || "");

  const submit = () => {
    const res = {
      ...(todo() || {}),
      description: description(),
      title: title(),
    };
    console.log("res", res);
    res.id ? globalStore.editTodo(res) : globalStore.addTodo(res);
    navigate(-1);
  };

  const disabled = createMemo(() => !title() || !description())

  return (
    <View>
      <Cell header>{todo() ? `ID: ${todo().id}` : "New"}</Cell>
      <Input
        value={title()}
        onChange={({ target: { value } }) => setTitle(value)}
      />
      <Input
        value={description()}
        onChange={({ target: { value } }) => setDescription(value)}
      />
      <CellButton disabled={disabled()} onClick={submit}>
        {todo() ? "Edit" : "Create"}
      </CellButton>
    </View>
  );
};
