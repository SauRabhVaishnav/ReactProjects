// components/Todo.jsx
import { useTodos } from "../hooks/useTodos";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export default function Todo() {
  const {
    todos,
    isAllUpper,
    addTodo,
    deleteTodo,
    toggleUpperCaseOne,
    toggleUpperCaseAll
  } = useTodos();

  return (
    <div>
      <TodoInput onAddTodo={addTodo} />
      <br />
      <br />
      <hr />
      <TodoList
        todos={todos}
        isAllUpper={isAllUpper}
        onDelete={deleteTodo}
        onToggleUpperCaseOne={toggleUpperCaseOne}
        onToggleUpperCaseAll={toggleUpperCaseAll}
      />
    </div>
  );
}