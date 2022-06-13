import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const SingleMovie = () => {
  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  const [movie, setMovie] = useState({})
  console.log(id);
  let fetchMovie = async () => {
    try {
      let res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US`
      );
      let data = await res.json();
      setLoading(false)
      setMovie(data)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  let {backdrop_path:img, title, overview, release_date:date} = movie;
  if (loading) {
    return <div>loading...</div>
  }
  return (
    <section className="single-movie">
      <img src={img !== null ? `https://image.tmdb.org/t/p/w500${img}` : url} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{overview}</p>
        <h4>{date}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
