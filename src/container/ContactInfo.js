import { useState, useEffect } from "react";
import { fetchData } from "../services/fetchData";
import Loader from "../components/Loader";
import DisplayContactInfo from "../components/DisplayContactInfo";

function ContactInfo() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(
      "https://frodo.ess.hr/api/algebra.php",
      setInfo,
      setError,
      setLoading
    );
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <DisplayContactInfo info={info} />
      )}
      <hr />
    </div>
  );
}
export default ContactInfo;
