import React from "react";

const Search = ({ inputValue, onChange }) => {
  return (
    <div className="form-group has-search">
      <h1 className="text-center text-primary mb-4">
        Find books in our library
      </h1>
      <span className="fa fa-search form-control-feedback"></span>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        className="form-control border-end-0 border rounded-pill"
        placeholder="Enter your book title"
      />
    </div>
  );
};

export default Search;
