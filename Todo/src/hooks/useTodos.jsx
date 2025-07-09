// hooks/useTodos.js
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { createTodo } from "../types/Todo";

export const useTodos = () => {
  const [todos, setTodos] = useState([
    createTodo("Let's do it", uuidv4())
  ]);
  const [isAllUpper, setIsAllUpper] = useState(false);

  const addTodo = (task) => {
    if (task.trim()) {
      setTodos(prevTodos => [
        ...prevTodos,
        createTodo(task, uuidv4())
      ]);
    }
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => 
      prevTodos.filter(todo => todo.id !== id)
    );
  };

  const toggleUpperCaseOne = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          const isNowUpper = !todo.isUpper;
          return {
            ...todo,
            task: isNowUpper 
              ? todo.originalTask.toUpperCase() 
              : todo.originalTask,
            isUpper: isNowUpper
          };
        }
        return todo;
      })
    );
  };

  const toggleUpperCaseAll = () => {
    setTodos(prevTodos =>
      prevTodos.map(todo => ({
        ...todo,
        task: !isAllUpper 
          ? todo.originalTask.toUpperCase() 
          : todo.originalTask,
        isUpper: !isAllUpper
      }))
    );
    setIsAllUpper(!isAllUpper);
  };

  return {
    todos,
    isAllUpper,
    addTodo,
    deleteTodo,
    toggleUpperCaseOne,
    toggleUpperCaseAll
  };
};