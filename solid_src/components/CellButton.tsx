import { ParentProps } from "solid-js";

interface CellButtonProps extends ParentProps {
  hoverable?: boolean;
  disabled?: boolean;
  onClick?: VoidFunction;
}

export const CellButton = ({
  children,
  hoverable = true,
  ...props
}: CellButtonProps) => {
  return (
    <button
      class="cell"
      classList={{
        hoverable,
      }}
      {...props}
    >
      {children}
    </button>
  );
};
