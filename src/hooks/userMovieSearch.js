// import { useState } from "react";
// import { debounceFunction, searchMovie } from "../utils/handling.functions";

// const useMovieSearch = (searchQuery) => {
//   const [movieData, setMovieData] = useState(null);
//   const [isFetching, setIsFetching] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(null);

//   setErrorMessage(null);

//   // Hit API if query length > 3
//   if (searchQuery.length > 3) {
//     setIsFetching(true);
//     setMovieData(null);

//     debounceFunction(async () => {
//       const searchMovieData = await searchMovie(searchQuery);

//       if (searchMovieData.status) {
//         setMovieData(searchMovieData.moviesData);
//         setIsFetching(false);
//         setErrorMessage(null);
//       } else {
//         setIsFetching(false);
//         setErrorMessage(null);
//         setErrorMessage(searchMovieData.error);
//       }
//     }, 2000)();
//   }

//   return {
//     movieData,
//     isFetching,
//     errorMessage,
//   };
// };

// export default useMovieSearch;
