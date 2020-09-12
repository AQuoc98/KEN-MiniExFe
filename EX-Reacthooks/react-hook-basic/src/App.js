import React, { useEffect, useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import PostFilterform from "./components/PostFiltersForm";

const axios = require("axios");
const queryString = require("query-string");

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 50,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });

  useEffect(() => {
    async function getPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const response = await axios.get(
          `http://js-post-api.herokuapp.com/api/posts?${paramsString}`
        );
        setPostList(response.data.data);
        setPagination(response.data.pagination);
      } catch (error) {
        console.error(error);
      }
    }

    getPostList();
  }, [filters]);

  function handleTodoList(todo) {
    const index = todoList.findIndex((item) => item.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleFiltersChange(newFilters) {
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }
  return (
    <div className="app">
      <header className="App-header">
        <p>Welcome To React Hook</p>
        {/* <ColorBox /> */}
        {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}

        {/* <TodoList todos={todoList} onTodoClick={handleTodoList} /> */}
        <PostFilterform onSubmit={handleFiltersChange} />
        <PostList posts={postList} />
        <Pagination pagination={pagination} onPageChange={handlePageChange} />
      </header>
    </div>
  );
}

export default App;
