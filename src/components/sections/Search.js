import React, { useState } from "react";
import { FormLabelInputGroup } from "../FormElements";
import { debounceFunction, searchMovie } from "../../utils/handling.functions";
import { MovieCardContainer } from "../cards";

export const SearchMovieContainer = () => {
  const [movieData, setMovieData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const onHandleMovieSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.target.value;
    setErrorMessage(null);

    // Hit API if query length > 3
    if (searchQuery.length > 3) {
      setIsFetching(true);
      setMovieData(null);

      debounceFunction(async () => {
        const searchMovieData = await searchMovie(searchQuery);

        if (searchMovieData.status) {
          setMovieData(searchMovieData.moviesData);
          setIsFetching(false);
          setErrorMessage(null);
        } else {
          setIsFetching(false);
          setErrorMessage(null);
          setErrorMessage(searchMovieData.error);
        }
      }, 2000)();
    }
  };

  return (
    <>
      <form className="homepage__container__form">
        <FormLabelInputGroup
          label="Search a movie(Min. 3 words required)"
          handleInput={(event) => onHandleMovieSearch(event)}
        />
        <button
          className="btn btn-sm form__submit"
          onClick={(event) => onHandleMovieSearch(event)}
        >
          Search
        </button>
      </form>
      {movieData && !isFetching && <MovieCardContainer movieData={movieData} />}
      {isFetching && (
        <div>
          <p className="homepage__container__form__status">Loading...</p>
        </div>
      )}
      {errorMessage && (
        <div className="homepage__container__form__error">
          <p className="form__error">{errorMessage}</p>
        </div>
      )}
    </>
  );
};
