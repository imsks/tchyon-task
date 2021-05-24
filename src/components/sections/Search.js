import React, { useState } from "react";
import { FormLabelInputGroup } from "../FormElements";
import { debounceFunction, searchMovie } from "../../utils/handling.functions";
import { MovieCardContainer } from "../cards";

export const SearchMovieContainer = () => {
  const [movieData, setMovieData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [searchedQueries, setSearchedQueries] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const onHandleMovieSearch = (event, value) => {
    if (event) {
      event.preventDefault();
    }

    const searchQuery = value;
    setErrorMessage(null);

    // Hit API if query length >= 3
    if (searchQuery.length >= 3) {
      setIsFetching(true);
      setMovieData(null);

      debounceFunction(async () => {
        const searchMoviesList = await searchMovie(searchQuery);
        console.log(searchMoviesList)
        if (searchMoviesList.status) {
          setMovieData(searchMoviesList.payload);
          setSearchedQueries((searchedQuery) => [
            ...searchedQuery,
            searchQuery,
          ]);
          setIsFetching(false);
          setErrorMessage(null);
        } else {
          setMovieData(null);
          setIsFetching(false);
          setErrorMessage(searchMoviesList.error);
        }
      }, 2000)();
    }
  };

  return (
    <>
      <form className="homepage__container__form">
        <FormLabelInputGroup
          label="Search a movie(Min. 3 words required)"
          handleInput={(event) =>
            onHandleMovieSearch(event, event.target.value)
          }
        />
        <button
          className="btn btn-sm form__submit"
          onClick={(event) => onHandleMovieSearch(event, event.target.value)}
        >
          Search
        </button>
      </form>
      {searchedQueries.length > 0 && (
        <div className="homepage__container__form__search">
          {searchedQueries.map((searchQuery, key) => {
            return (
              <div
                className="homepage__container__form__search__item"
                key={key}
              >
                <p className="homepage__container__form__search__item__text">
                  {searchQuery}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {movieData && !isFetching && (
        <MovieCardContainer moviesList={movieData} />
      )}
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
