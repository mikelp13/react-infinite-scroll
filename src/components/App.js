import React, { useRef, useState, useCallback } from "react";
import BookList from "./BookList";
import Search from "./Search";
import useDebounce from "../hooks/useDebounce";
import useBookSearch from "../hooks/useBookSearch";
import Loader from "./Loader";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const debouncedQuery = useDebounce(inputValue, 1000)

  const { books, hasMore, loading, error } = useBookSearch(debouncedQuery, pageNumber);

  // infinite scroll realisation
  const observer = useRef();

  const lastBookElementRef = useCallback((node) => {
      // console.log(`node`, node);
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleSearch = (e) => {
    setInputValue(e.target.value)
  };

  return (
    <>
      <Search onChange={handleSearch} inputValue={inputValue} />
      <BookList lastBookElementRef={lastBookElementRef} books={books} />
      {loading && <Loader/>}
      {error && <div>{error}</div>}
    </>
  );
};

export default App;
