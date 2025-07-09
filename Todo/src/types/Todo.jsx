// types/Todo.js
// This file defines the structure of a Todo item

export const createTodo = (task, id) => ({
  task,
  originalTask: task,
  isUpper: false,
  id
});

export const TodoStatus = {
  UPPER: 'upper',
  LOWER: 'lower'
};