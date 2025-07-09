// components/TodoList.jsx
import { TodoItem } from "./TodoItem";

export const TodoList = ({ 
  todos, 
  isAllUpper, 
  onDelete, 
  onToggleUpperCaseOne, 
  onToggleUpperCaseAll 
}) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggleUpperCase={onToggleUpperCaseOne}
          />
        ))}
      </ul>
      <br />
      <hr />
      <button onClick={onToggleUpperCaseAll}>
        {isAllUpper ? "UnUpperCaseAll" : "UpperCaseAll"}
      </button>
    </div>
  );
};