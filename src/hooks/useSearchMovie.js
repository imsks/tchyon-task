import { useState, useEffect } from "react";
import axios from "axios";

const useEmployeeData = ({ searchQuery }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_OMDB_API_URL}&t=${searchQuery}`,
    })
      .then((res) => {
        const { employees } = res.data;

      })
      .catch((error) => {
        setFetchError(error.message);
      });
  }, []);

  return {
    moviesData,
    fetchError,
  };
};

export default useEmployeeData;
