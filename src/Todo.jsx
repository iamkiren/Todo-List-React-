import React from "react";

function Todo() {
  const [input, setInput] = React.useState("");
  const [todoList, setTodoList] = React.useState([
    { id: 1, text: "Make Tea", completed: true },
    { id: 2, text: "Morning Walk", completed: false },
  ]);
  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Add</button>

      <ul>
        {todoList.map((todo) => {
          return (
            <li>
              <input type="checkbox" />
              <span>{todo.text}</span>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
