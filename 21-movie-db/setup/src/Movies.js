import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  let { loading, movies } = useGlobalContext();
  if (loading) {
    return <div>loading ...</div>
  }
  return (
    <section className="movies">
      {movies.map((movie) => {
        const {id,original_title:title, release_date:date, backdrop_path:img} = movie
        return (
          <Link className="movie" key={movie.id} to={`movies/${id}`}>
            <article>
              <img
                src={img !== null ? `https://image.tmdb.org/t/p/w500${img}` : url}
                alt={title}
              />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{date}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
