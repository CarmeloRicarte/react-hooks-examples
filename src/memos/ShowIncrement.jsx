import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("Me volví a generar");
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => increment()}
    >
      Incrementar
    </button>
  );
});
