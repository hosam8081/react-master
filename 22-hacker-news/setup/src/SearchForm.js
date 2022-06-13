import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "./newSlice";

const SearchForm = () => {
  const { query } = useSelector((state) => state.new);
  const dispatch = useDispatch();
  return (
    <form className="search-form">
      <h2>search hacker news</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />
    </form>
  );
};

export default SearchForm;
