import React, { useState } from "react";
import { FormLabelInputGroup } from "../FormElements";
import { debounceFunction, searchMovie } from "../../utils/handling.functions";
import { MovieCardContainer } from "../cards";

export const SearchMovieContainer = () => {
  const [movieData, setMovieData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const onHandleMovieSearch = (event) => {
    const searchQuery = event.target.value;

    // Hit API if query length > 3
    if (searchQuery.length > 3) {
      debounceFunction(async () => {
        const searchMovieData = await searchMovie(searchQuery);

        if (searchMovieData.status) {
          setMovieData(searchMovieData);
        } else {
          setErrorMessage(searchMovieData.error);
        }
      }, 2000)();
    }
  };

  return (
    <>
      <form className="homepage__container__form">
        <FormLabelInputGroup
          label="Search a movie"
          handleInput={(event) => onHandleMovieSearch(event)}
        />
        <button className="btn btn-sm">Search</button>
      </form>
      <MovieCardContainer movieData={movieData} />
    </>
  );
};
