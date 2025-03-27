import { Movie, MovieSearchResult } from "../models/Movie";

const API_KEY = '1d94ff18';
const BASE_URL = 'https://www.omdbapi.com/';

const handleApiError = (error: unknown): never => {
  console.error('API Error:', error);
  throw error instanceof Error ? error : new Error('API request failed');
};

export const getAllMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=movie`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data: MovieSearchResult = await response.json();
    if (data.Response === 'False') throw new Error(data.Error || 'No movies found');
    const totalPages = Math.min(Math.ceil(Number(data.totalResults)/10), 10);
    const pages = await Promise.all(
      Array.from({ length: totalPages - 1 }, (_, i) => 
        fetch(`${BASE_URL}?apikey=${API_KEY}&s=movie&page=${i + 2}`)
          .then(res => res.json())
      )
    );

    const allMovies = [data, ...pages]
      .flatMap(page => page.Search || [])
      .filter(movie => movie.Poster !== 'N/A');

    return [...new Map(allMovies.map(movie => [movie.imdbID, movie])).values()];
  } catch (error) {
    return handleApiError(error);
  }
};

export const getMoviesBySearch = async (searchTerm: string): Promise<Movie[]> => {
  try {
    if (!searchTerm.trim()) {
      return getAllMovies();
    }
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data: MovieSearchResult = await response.json();
    if (data.Response === 'False') {
      return [];
    }
    return data.Search || [];
  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
};

export const getMovieById = async (imdbID: string): Promise<Movie> => {
  try {
    if (!imdbID.trim()) throw new Error('IMDB ID cannot be empty');
    console.log('imdbID', imdbID);
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    if (data.Response === 'False') throw new Error(data.Error || 'Movie not found');

    return data;
  } catch (error) {
    return handleApiError(error);
  }
};