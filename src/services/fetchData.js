function fetchData(url, setData, setError, setLoading) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.toString());

      setLoading(false);
    });
}

export { fetchData };
