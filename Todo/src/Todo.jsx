import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
    let [todos, setTodos] = useState([{ task: "work Hard", orignalTask: "work Hard", id: uuidv4(), isUpper: false }]);
    let [newTodo, setNewTodo] = useState("");
    let [isAllUpper, setIsAllUpper] = useState(false);


    let addNewTodo = () => (
        setTodos((prevTodo) => [
            ...prevTodo, { task: newTodo, orignalTask: newTodo, id: uuidv4(), isUpper: false }
        ]),
        setNewTodo("")
    );
    let updateTodo = (event) => {
        setNewTodo(event.target.value)
    };
    let deleteTodo = (id) => {
        setTodos((prevTodo) => prevTodo.filter((todo) => todo.id != id));
        console.log(id);
    };
    let UpperCaseOne = (id) => {
        setTodos((prevTodo) =>
            prevTodo.map((todo) => {
                if (todo.id === id) {
                    const isNowUpper = !todo.isUpper;
                    return {
                        ...todo, task: isNowUpper ? todo.orignalTask.toUpperCase() : todo.orignalTask, id: uuidv4(), isUpper: isNowUpper,
                    }
                } else {
                    return todo
                }
            })
        )
    };
    let UpperCaseALL = () => {
        setTodos((prevTodo) => (
            prevTodo.map((todo) => {
                return {
                    ...todo, task: isAllUpper ? todo.orignalTask.toUpperCase() : todo.orignalTask, id: uuidv4(), isUpper: !isAllUpper
                }
            })
        ))
        setIsAllUpper(!isAllUpper);
    }

    return (
        <div>
            <input placeholder="add a todo" style={{ width: "250px", height: "25px" }} value={newTodo} onChange={updateTodo} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={addNewTodo}>Add Todo</button> <br /><br /><hr />
            <h2>Todo List</h2>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span>{todo.task}</span> &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button> &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => UpperCaseOne(todo.id)}>{todo.isUpper ? "UnUpperOne" : "UpperCaseOne"}</button>
                        </li>
                    ))
                }
            </ul> <br /><hr />
            <button onClick={UpperCaseALL}>{isAllUpper ? "UpperCaseAll" : "UnUpperALL"}</button>
        </div>
    )
}