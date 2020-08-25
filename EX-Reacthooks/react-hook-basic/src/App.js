import React, { useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);

  function handleTodoList(todo) {
    const index = todoList.findIndex((item) => item.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <header className="App-header">
        <p>Welcome To React Hook</p>
        {/* <ColorBox /> */}
        <TodoList todos={todoList} onTodoClick={handleTodoList} />
      </header>
    </div>
  );
}

export default App;
