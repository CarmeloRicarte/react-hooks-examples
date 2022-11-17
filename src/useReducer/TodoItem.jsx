import PropTypes from "prop-types";

const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between my-2">
      <span
        data-testid={`${todo.id}-item-description`}
        onClick={() => onToggleTodo(todo.id)}
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
      >
        {todo.description}
      </span>
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
  onToggleTodo: PropTypes.func.isRequired,
};

export default TodoItem;
