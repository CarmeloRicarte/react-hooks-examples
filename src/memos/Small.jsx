import { memo } from "react";
// using memo will memorize the component and will re-render only when the props changes
// only use when the component is going to perform heavy tasks
export const Small = memo(({ value }) => {
  console.log("Me volví a dibujar");
  return <small>{value}</small>;
});
