export interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
  Type: string;
}

export interface SearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
} 