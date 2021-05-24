import React from "react";
import PageHeader from "../components/PageHeader";
import { SearchMovieContainer } from "../components/sections/Search";

const Homepage = () => {
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
