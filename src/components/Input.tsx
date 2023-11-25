import { JSX } from "solid-js";

export const Input = (props: JSX.IntrinsicElements["input"]) => {
  return <input class="cell" {...props} />;
};
