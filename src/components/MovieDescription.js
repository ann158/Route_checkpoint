import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <p>Movie not found!</p>;

  return (
    <div className="description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <button onClick={() => navigate('/')}>⬅ Back to Home</button>
    </div>
  );
};

export default MovieDescription;
