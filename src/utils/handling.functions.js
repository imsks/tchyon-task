import axios from "axios";

export const debounceFunction = (callbackFunction, timeDelay) => {
  let debounce;

  return function () {
    const callbackArguments = arguments;

    clearTimeout(debounce);

    debounce = setTimeout(
      () => callbackFunction.apply(this, callbackArguments),
      timeDelay
    );
  };
};

export const searchMovie = async (searchQuery) => {
  try {
    const res = await axios({
      method: "get",
      url: `${process.env.REACT_APP_OMDB_API_URL}&s=${searchQuery}`,
    });

    const { Search, Response } = res.data;

    if (Response === 'False') {
      return {
        status: false,
        error: "No movie found",
      };
    }

    let searchMoviesList = [];

    Search.forEach((movieData) => {
      const { Poster, Title, Year } = movieData;

      searchMoviesList.push({
        poster: Poster,
        title: Title,
        year: Year,
      });
    });

    return {
      status: true,
      payload: searchMoviesList,
    };
  } catch (error) {
    return {
      status: false,
      error: error.message,
    };
  }
};
