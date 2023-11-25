import { ParentProps } from "solid-js";

interface CellProps extends ParentProps {
  hoverable?: boolean;
  header?: boolean;
}

export const Cell = ({
  children,
  hoverable = false,
  header = false,
}: CellProps) => {
  return (
    <div
      class="cell"
      classList={{
        hoverable,
        header,
      }}
    >
      {children}
    </div>
  );
};
