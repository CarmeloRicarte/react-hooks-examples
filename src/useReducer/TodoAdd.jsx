import { useRef } from "react";
import PropTypes from "prop-types";
const TodoAdd = ({ onNewTodo }) => {
  const inputRef = useRef();
  /**
   * When the form is submitted, prevent the default action, then if the input has a value, create a
   * new todo object with the current time as the id, the input value as the description, and done set
   * to false, then call the onNewTodo function with the new todo object as the argument
   */
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

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default TodoAdd;
