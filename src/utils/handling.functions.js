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

export const handleMovieSearch = (event) => {
  const searchQuery = event.target.value;

  // Hit API if query length > 3
  if (searchQuery.length > 3) {
    return debounceFunction(() => searchMovie(searchQuery), 2000)();
  }
};

export const searchMovie = async (searchQuery) => {
  try {
    const res = await axios({
      method: "get",
      url: `${process.env.REACT_APP_OMDB_API_URL}&t=${searchQuery}`,
    });
    const { Poster, Title, Year, Runtime, Genre, Director, Actors, Plot } =
      res.data;

    const moviesData = {
      Poster,
      Title,
      Year,
      Runtime,
      Genre,
      Director,
      Actors,
      Plot,
    };

    if(!moviesData.Title) {
      return {
        status: false,
        error: 'No movie found',
      };
    }

    return {
      status: true,
      moviesData,
    };
  } catch (error) {
    return {
      status: true,
      error: error.message,
    };
  }
};
