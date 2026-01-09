import React from "react";
import styles from "./Todo.module.css";

function Todo() {
  const [input, setInput] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);

  function handleTodo() {
    if (input.trim() === "") return;
    const newTodo = {
      id: Math.random(),
      text: input.trim(),
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
    <div className={styles.container}>
      <h1 className={styles.title}>Todo</h1>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.addButton} onClick={() => handleTodo()}>
          Add
        </button>
      </div>
      {todoList.length === 0 ? (
        <p className={styles.emptyMessage}>No todos yet. Add one above!</p>
      ) : (
        <ul className={styles.todoList}>
          {todoList.map((todo) => {
            return (
              <li key={todo.id} className={styles.todoItem}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span
                  className={`${styles.todoText} ${
                    todo.completed ? styles.strike : ""
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Todo;
