import React, { useEffect, useState } from "react";
import { getData } from "../services/getData";

export const useFetch = (url) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData(url)
      .then((results) => {
        setState(results);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, [url]);

  return { state, loading };
};
