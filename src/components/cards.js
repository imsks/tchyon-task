export const MovieCardContainer = ({ moviesData }) => {
  return (
    <div className="cards">
      {moviesData.map((movieData, key) => {
        const {
          poster,
          title,
          year,
          runtime,
          genre,
          directedBy,
          actedBy,
          plot,
          rating,
        } = movieData;

        return (
          <MovieCard
            key={key}
            poster={poster}
            title={title}
            year={year}
            runtime={runtime}
            genre={genre}
            directedBy={directedBy}
            actedBy={actedBy}
            plot={plot}
            rating={rating}
          />
        );
      })}
    </div>
  );
};

export const MovieCard = ({
  poster,
  title,
  year,
  runtime,
  genre,
  directedBy,
  actedBy,
  plot,
  rating,
}) => {
  return (
    <div className="cards__item">
      <div className="cards__item__content">
        <div className="cards__item__content__section">
          <h3 className="cards__item__content__heading">{title}</h3>
          <h5 className="cards__item__content__subheading">{year}</h5>
        </div>
        <div className="cards__item__content__section">
          <p className="cards__item__content__paragraph">{runtime}</p>
          <p className="cards__item__content__paragraph">{genre}</p>
        </div>
      </div>
    </div>
  );
};
