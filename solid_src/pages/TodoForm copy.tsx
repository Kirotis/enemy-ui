import { useNavigate, useSearchParams } from "@solidjs/router";
import { Cell, CellButton, Input, View } from "../components";
import { globalStore } from "../store";
import { createStore } from "solid-js/store";

export const TodoForm = () => {
  const [{ edit }] = useSearchParams();
  const navigate = useNavigate();

  const todo = () => globalStore.todos()[parseInt(edit)];
  const [formStore, updateFormStore] = createStore({
    title: todo()?.title || "",
    description: todo()?.description || "",
    get disabled() {
      return !this.title || !this.description;
    },
  });

  const submit = () => {
    if (formStore.disabled) {
      return;
    }
    const res = {
      ...(todo() || {}),
      description: formStore.description,
      title: formStore.title,
    };
    res.id ? globalStore.editTodo(res) : globalStore.addTodo(res);
    navigate(-1);
  };

  return (
    <View>
      <Cell header>{todo() ? `ID: ${todo().id}` : "New"}</Cell>
      <Input
        value={formStore.title}
        onChange={({ target: { value } }) => updateFormStore("title", value)}
      />
      <Input
        value={formStore.description}
        onChange={({ target: { value } }) =>
          updateFormStore("description", value)
        }
      />
      <CellButton
        // disabled={formStore.disabled}
        onClick={submit}
      >
        {todo() ? "Edit" : "Create"}
      </CellButton>
    </View>
  );
};
