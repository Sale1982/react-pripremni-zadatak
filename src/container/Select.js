import { useState, useEffect } from "react";
import { fetchData } from "../services/fetchData";
import Loader from "../components/Loader";
import DisplayList from "../components/DisplayList";

function Select() {
  const [listItems, setListItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const selectProgram = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    fetchData(
      `http://hlapcic-education.atwebpages.com/programi-obrazovanja.php?id=${value}`,
      setListItems,
      setError,
      setLoading
    );
  }, [value]);

  console.log(listItems);

  return (
    <div>
      <h2>Program obrazovanja</h2>
      <select onChange={selectProgram}>
        <option value="0">Odaberite program obrazovanja</option>
        <option value="1">Front-end developer</option>
        <option value="2">Back-end developer</option>
        <option value="3">Programer internet aplikacija – C# i ASP.NET</option>
      </select>
      <hr />
      {loading ? (
        <Loader />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <DisplayList listItems={listItems} />
      )}
    </div>
  );
}

export default Select;
