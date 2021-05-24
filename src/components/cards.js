export const MovieCardContainer = ({ movieData }) => {
  const { poster, title, year, runtime, genre, director, actors, plot } =
    movieData;

  return (
    <div className="cards">
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
              <h5 className="cards__item__content__subheading">{year}</h5>
            </div>
            <div className="cards__item__content__section">
              <h5 className="cards__item__content__subheading">
                Directed by {director}
              </h5>
            </div>
            <div className="cards__item__content__section">
              <h5 className="cards__item__content__subheading">
                Actors {actors}
              </h5>
            </div>
            <div className="cards__item__content__section">
              <h3 className="cards__item__content__subheading">
                Runtime - {runtime}
              </h3>
              <h5 className="cards__item__content__subheading">
                Genre - {genre}
              </h5>
            </div>
            <div className="cards__item__content__section">
              <p className="cards__item__content__paragraph">{plot}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};