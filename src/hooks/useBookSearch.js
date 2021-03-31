import axios from "axios";
import { useEffect, useState } from "react";

const useBookSearch = (query, pageNumber) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError("");

    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: pageNumber },
    })
      .then((res) => {
        setBooks((prev) => {
          return [
            ...new Set([...prev, ...res.data.docs.map((book) => book.title)]),
          ];
        });
        setHasMore(res.data.docs.length > 0);
      })
      .catch((e) => setError(error.message))
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, [query, pageNumber]);

  return { loading, error, books, hasMore };
};

export default useBookSearch;
