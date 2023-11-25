import { ParentProps, onMount } from "solid-js";

interface ViewProps extends ParentProps {
  defaultCount?: number;
}

export const View = ({ children, defaultCount }: ViewProps) => {
  let divRef: HTMLDivElement;
  onMount(() => {
    divRef.attributeStyleMap.set(
      "--cell-count",
      defaultCount ?? divRef.childNodes.length
    );
  });
  // @ts-expect-error ??? Variable 'divRef' is used before being assigned
  return <div ref={divRef}>{children}</div>;
};
