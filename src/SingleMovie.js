import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const { isLoading, movie, isError } = useFetch(`&i=${id}`);

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading"></div>;
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <h3 className="title"> {movie.Title}</h3>
          <p className=""></p>
          <p ><span className="card-text" >Released on:</span> {movie.Released}</p>
          <p ><span className="card-text">Genre:</span> {movie.Genre}</p>
          <p ><span className="card-text">Rating:</span> {movie.imdbRating} / 10</p>
          <p ><span className="card-text">Country:</span> {movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
