// components/TodoItem.jsx
export const TodoItem = ({ todo, onDelete, onToggleUpperCase }) => {
  return (
    <li>
      {todo.task}
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => onDelete(todo.id)}>
        Delete
      </button>
      &nbsp;&nbsp;
      <button onClick={() => onToggleUpperCase(todo.id)}>
        {todo.isUpper ? "UnUpperCaseOne" : "UpperCaseOne"}
      </button>
    </li>
  );
};