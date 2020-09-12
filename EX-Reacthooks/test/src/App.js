import React, { useEffect, useState } from "react";
import "./App.css";
import PropList from "./Components/PropList";
import Pagination from "./Components/Pagination";
import Search from "./Components/Search";
const axios = require("axios");
const queryString = require("query-string");

function App() {
  const [lists, setLists] = useState([]);
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
    async function getList() {
      try {
        const paramString = queryString.stringify(filters);
        const response = await axios.get(
          `http://js-post-api.herokuapp.com/api/posts?${paramString}`
        );
        setLists(response.data.data);
        setPagination(response.data.pagination);
      } catch (error) {
        console.error(error);
      }
    }
    getList();
  }, [filters]);

  function handleChangePage(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleSearch(keywordSearch) {
    setFilters({
      ...filters,
      _page: 1,
      title_like: keywordSearch.searchTerm,
    });
  }

  return (
    <div className="App">
      <h1>List</h1>
      <Search onSubmit={handleSearch} />
      <PropList lists={lists} />
      <Pagination
        pagination={pagination}
        onHandleChangePage={handleChangePage}
      />
    </div>
  );
}

export default App;
