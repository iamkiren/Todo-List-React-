import React from "react";
import styles from "./Todo.module.css";

function Todo() {
  const [input, setInput] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);

  function handleTodo() {
    const newTodo = {
      id: Math.random(),
      text: input,
      completed: false,
    };
    const newList = [...todoList, newTodo];
    setTodoList(newList);
    setInput("");
  }

  function toggleTodo(toggleId) {
    const toggledTodoList = todoList.map((todo) => {
      if (todo.id === toggleId) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });

    setTodoList(toggledTodoList);
  }

  function deleteTodo(deleteId) {
    const afterDeletion = todoList.filter((todo) => {
      return todo.id !== deleteId;
    });

    setTodoList(afterDeletion);
  }

  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleTodo()}>Add</button>

      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={todo.completed ? styles.strike : ""}>
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
