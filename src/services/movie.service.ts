import { Movie, SearchResponse } from '../models/movie.model';

export interface MovieFilters {
  type?: string;
  yearFrom?: string;
  yearTo?: string;
}

class MovieService {
  private readonly API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  private readonly BASE_URL = 'http://www.omdbapi.com';

  async searchMovies(query: string, type?: string): Promise<Movie[]> {
    if (!query.trim()) return [];

    try {
      const response = await fetch(
        `${this.BASE_URL}/?apikey=${this.API_KEY}&s=${query}${type ? `&type=${type}` : ''}`
      );
      const data: SearchResponse = await response.json();
      return data.Response === 'True' ? data.Search : [];
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  }

  filterMoviesByYear(movies: Movie[], yearFrom?: string, yearTo?: string): Movie[] {
    let filtered = [...movies];

    if (yearFrom) {
      filtered = filtered.filter(movie => {
        const movieYear = parseInt(movie.Year);
        return !isNaN(movieYear) && movieYear >= parseInt(yearFrom);
      });
    }

    if (yearTo) {
      filtered = filtered.filter(movie => {
        const movieYear = parseInt(movie.Year);
        return !isNaN(movieYear) && movieYear <= parseInt(yearTo);
      });
    }

    return filtered;
  }
}

export const movieService = new MovieService(); 