import PropTypes from "prop-types";

const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between my-2">
      <span className="align-self-center">{todo.description}</span>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => onDeleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }),
  onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
