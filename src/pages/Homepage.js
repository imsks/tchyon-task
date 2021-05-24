import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { MovieCardContainer } from "../components/cards";
import { SearchMovieContainer } from "../components/sections/Search";

const Homepage = () => {
  const [moviesData, setMoviesData] = useState([]);

  return (
    <div className="page">
      <div className="page__container">
        <div className="page__container__content">
          <div className="homepage">
            <div className="homepage__container">
              <PageHeader
                heading="Search movies"
                paragraph="Start typing any movie name and get the results"
              />

              <SearchMovieContainer />

              <MovieCardContainer moviesData={moviesData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
