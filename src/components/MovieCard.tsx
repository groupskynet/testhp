import React from 'react';
import { Movie } from '../models/movie.model';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
    >
      {movie.Poster !== 'N/A' ? (
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-[300px] object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-[300px] bg-gray-700 flex items-center justify-center">
          <span className="text-gray-400">No poster available</span>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{movie.Title}</h3>
        <p className="text-sm text-gray-400">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard; 