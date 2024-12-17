import React from "react";
import "./MovieCard.css";

const MovieCard = ({ title, poster }) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-poster" />
      <div className="movie-title">{title}</div>
    </div>
  );
};

export default MovieCard;
