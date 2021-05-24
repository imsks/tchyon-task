export const MovieCardContainer = ({ moviesList }) => {
  return (
    <div className="cards">
      {moviesList.map((movieData, key) => {
        return <MovieCard movieData={movieData} key={key} />;
      })}
    </div>
  );
};

export const MovieCard = ({ movieData }) => {
  const { poster, title, year } =
    movieData;

  return (
    <div className="cards__item">
      <div className="cards__item__content">
        <img
          src={poster}
          className="cards__item__content__image"
          alt="movie-poster"
        />
        <div className="cards__item__content__main">
          <div className="cards__item__content__section">
            <h3 className="cards__item__content__heading">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
