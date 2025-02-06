import React from "react";
import Filter from "./Filter";

const Search = ({ setInputQuery }) => {
  return (
    <div className="input-cluster">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onChange={(e) => setInputQuery(e.target.value.toLowerCase())}
        type="text"
        className="search-country"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;
