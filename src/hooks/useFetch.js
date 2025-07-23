import { useState, useEffect, useRef } from "react";

export const useFetch = (fetcher, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetcherRef = useRef(fetcher);
  fetcherRef.current = fetcher;
  useEffect(() => {
    const fetchData = async () => {
      const currentFetcher = fetcherRef.current;
      const requiresParams = currentFetcher.length > 0;
      if (requiresParams && !params) {
        setData(null);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        // Ejecutamos el fetcher actual
        const result = requiresParams
          ? await currentFetcher(params)
          : await currentFetcher();
        setData(result);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params]); // <--- Dependemos solo de params ahora

  return { data, loading, error };
};
