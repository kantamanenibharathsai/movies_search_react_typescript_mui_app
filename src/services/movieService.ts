import { Movie, MovieSearchResult } from "../models/Movie";

const API_KEY = '1d94ff18';
const BASE_URL = 'https://www.omdbapi.com/';

const handleApiResponse = async <T extends object>(fetchPromise: Promise<Response>): Promise<T> => {
  const response = await fetchPromise;
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: T = await response.json();
  if ('Response' in data && data['Response'] === 'False') {
    throw new Error(((data as unknown) as MovieSearchResult).Error || 'No results found');
  }

  return data;
};

export const getAllMovies = async (): Promise<Movie[]> => {
  try {
    const initialData = await handleApiResponse<MovieSearchResult>(
      fetch(`${BASE_URL}?apikey=${API_KEY}&s=movie`)
    );

    const totalResults = parseInt(initialData.totalResults || '0');
    const totalPages = Math.min(Math.ceil(totalResults / 10), 10);
    
    const pageRequests = Array.from({ length: totalPages }, (_, i) => 
      fetch(`${BASE_URL}?apikey=${API_KEY}&s=movie&page=${i + 1}`)
    );

    const responses = await Promise.all(pageRequests);
    const allPagesData = await Promise.all(
      responses.map(res => res.json() as Promise<MovieSearchResult>)
    );

    const allMovies = allPagesData.flatMap(page => page.Search || []);
    return allMovies.reduce((acc: Movie[], movie) => {
      if (movie.Poster !== 'N/A' && !acc.some(m => m.imdbID === movie.imdbID)) {
        acc.push(movie);
      }
      return acc;
    }, []);
  } catch (error) {
    console.error('Failed to fetch all movies:', error);
    throw error;
  }
};

export const getMoviesBySearch = async (searchTerm: string): Promise<Movie[]> => {
  if (!searchTerm.trim()) {
    throw new Error('Search term cannot be empty');
  }

  try {
    const data = await handleApiResponse<MovieSearchResult>(
      fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`)
    );

    return data.Search || [];
  } catch (error) {
    console.error('Movie search failed:', error);
    throw error;
  }
};

export const getMovieById = async (imdbID: string): Promise<Movie> => {
  if (!imdbID.trim()) {
    throw new Error('IMDB ID cannot be empty');
  }

  try {
    return await handleApiResponse<Movie>(
      fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`)
    );
  } catch (error) {
    console.error('Fetch movie by ID failed:', error);
    throw error;
  }
};