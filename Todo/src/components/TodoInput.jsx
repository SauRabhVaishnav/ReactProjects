// components/TodoInput.jsx
import { useState } from "react";

export const TodoInput = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = () => {
    onAddTodo(newTodo);
    setNewTodo("");
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div>
      <h1>Create Todo</h1>
      <input
        placeholder="add a todo"
        style={{ width: "300px", height: "25px" }}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      &nbsp;&nbsp;&nbsp;
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};