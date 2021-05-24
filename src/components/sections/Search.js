import { FormLabelInputGroup } from "../FormElements";

export const SearchMovieContainer = () => {
  const handleMovieSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <form className="homepage__container__form">
      <FormLabelInputGroup
        label="Search a movie"
        handleInput={handleMovieSearch}
      />
      <button className="btn btn-sm">Search</button>
    </form>
  );
};
