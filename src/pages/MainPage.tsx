import { useNavigate } from "@solidjs/router";
import { Cell, CellButton, View } from "../components";

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <View>
      <Cell header>Todo APP</Cell>
      <CellButton onClick={() => navigate("/todos/")}>List</CellButton>
      <CellButton onClick={() => navigate("/form")}>Create todo</CellButton>
    </View>
  );
};
