import React, { useState, useEffect } from 'react';
import { Movie } from '../models/movie.model';
import MovieCard from './MovieCard';
import SearchFilters from './SearchFilters';
import { movieService } from '../services/movie.service';

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('');
  const [yearFrom, setYearFrom] = useState('');
  const [yearTo, setYearTo] = useState('');
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  const searchMovies = async (query: string) => {
    if (!query.trim()) return;
    
    setLoading(true);
    try {
      const results = await movieService.searchMovies(query, type);
      setMovies(results);
    } catch (error) {
      console.error('Error searching movies:', error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    const timeoutId = setTimeout(() => {
      searchMovies(value);
    }, 500);
    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {
    const filtered = movieService.filterMoviesByYear(movies, yearFrom, yearTo);
    setFilteredMovies(filtered);
  }, [movies, yearFrom, yearTo]);

  useEffect(() => {
    if (searchQuery) {
      searchMovies(searchQuery);
    }
  }, [type]);

  return (
    <div className="w-full max-w-6xl mx-auto text-center px-4">
      <h1 className="text-4xl font-bold mb-8 text-white">Movie Search App</h1>
      
      <div className="relative mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for movies..."
          className="w-full p-4 pl-12 text-lg rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg 
            className="w-6 h-6 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <SearchFilters
        type={type}
        yearFrom={yearFrom}
        yearTo={yearTo}
        onTypeChange={setType}
        onYearFromChange={setYearFrom}
        onYearToChange={setYearTo}
      />

      {loading ? (
        <div className="text-white">Loading...</div>
      ) : filteredMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="mt-4 text-gray-400">
          {searchQuery ? 'No movies found' : 'Enter a movie title to start searching'}
        </p>
      )}
    </div>
  );
};

export default MovieSearch; 