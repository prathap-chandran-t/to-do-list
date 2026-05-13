import React from "react";

const SearchForm = ({search,setSearch}) => {
  return (
    <div>
      <form className="searchForm" onSubmit={(e) =>e.preventDefault()}>
        <label htmlFor="searchForm">searchForm</label>
        <input type="text" name="searchForm" id="searchForm" 
        role="searchbox"
        value={search}
        onChange={(e) =>setSearch(e.target.value)}
        />
        
      </form>
    </div>
  );
};

export default SearchForm;
