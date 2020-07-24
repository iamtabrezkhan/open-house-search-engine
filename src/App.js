import React, { useState, useRef, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import { searchQuery } from "./http/search";
import Results from "./components/Results/Results";
import Pagination from "./components/Pagination/Pagination";

const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

function App() {
  const [results, setResults] = useState();

  const debouncedGetPage = useCallback(
    debounce((q, page) => getPage(q, page), 500),
    []
  );

  const searchTermRef = useRef("");

  const getPage = (query, page) => {
    searchQuery(query, page).then((res) => {
      setResults(res);
    });
  };

  const handleSearch = (searchTerm) => {
    searchTermRef.current = searchTerm;
    debouncedGetPage(searchTerm, 1);
  };

  const onPageChange = (page) => {
    getPage(searchTermRef.current, page * 10 + 1);
  };

  return (
    <div className="main">
      <div className="wrapper">
        <SearchBar onChange={handleSearch} />
        <Results results={results} />
        <Pagination onClick={onPageChange} results={results} />
      </div>
    </div>
  );
}

export default App;
