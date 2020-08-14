import { useState, useEffect } from "react";

function useFetch(url) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  async function fetchUrl() {
    const response = await fetch(url);
    console.log(url);
    const json = await response.text();
    console.log(json);
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading];
}
export { useFetch };
