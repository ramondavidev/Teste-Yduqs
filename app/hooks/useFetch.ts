import { useState, useEffect } from "react";

//  Criado um tipo genérico FetchResponse<T>
type FetchResponse<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

// Custom hook useFetch, que busca dados de uma URL fornecida e retorna um objeto do tipo FetchResponse<T>
function useFetch<T>(url: string): FetchResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
        setError(null);
      } catch (error) {
        setError((error as Error).message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
