import { useEffect, useState } from "react";

const useDebounce = (value, timeout) => {
  let [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      // console.log("setting debounced value");
      setDebouncedValue(value);
    }, timeout);

    return () => {
      // console.log("clear timeout");
      clearTimeout(timeoutId);
    };
  }, [value, timeout]);

  return debouncedValue;
};

export default useDebounce;
