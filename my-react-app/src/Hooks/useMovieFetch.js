import { useState, useEffect } from "react";
import { axiosCreate } from "../axios";

const useMovieFetch = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const result = await axiosCreate.get(
          `${url}&api_key=9d38b17f3deabed19968463267264754`
        );

        setData(result.data.results || []);
      } catch (error) {
        console.error("Fetch error:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};

export default useMovieFetch;
