import { useRef } from "react";

export const TodoAdd = ({ onNewTodo }) => {
  const inputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputRef.current.value) {
      const todo = {
        id: new Date().getTime(),
        description: inputRef.current.value,
        done: false,
      };
      onNewTodo(todo);
      inputRef.current.value = ""; // clear previous value of the input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="What needs to be done?"
        className="form-control"
      />

      <button type="submit" className="btn btn-outline-primary mt-2">
        Add
      </button>
    </form>
  );
};
