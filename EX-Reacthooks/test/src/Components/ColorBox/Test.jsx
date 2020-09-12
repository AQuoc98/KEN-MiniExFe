import React from "react";
import PropTypes from "prop-types";

Test.propTypes = {
  todos: PropTypes.array,
  onDeleteTodo: PropTypes.func,
};

function Test(props) {
  const { todos, onDeleteTodo } = props;

  function handleClick(todo) {
    onDeleteTodo(todo);
  }
  return (
    <div>
      <ul style={{ width: 250, height: 200 }}>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => handleClick(todo)}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
