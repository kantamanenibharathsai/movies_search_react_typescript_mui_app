import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { Movie } from '../models/Movie';
import { getAllMovies, getMovieById, getMoviesBySearch } from '../services/movieService';

type MovieContextType = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  movies: Movie[];
  loading: boolean;
  error: string | null;
  searchMovies: (term: string) => Promise<void>;
  selectedMovie: Movie | null;
  setSelectedMovie: (movie: Movie | null) => void;
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (imdbID: string) => void;
  isFavorite: (imdbID: string) => boolean;
  fetchMovieDetails: (imdbID: string) => Promise<void>;
};

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        setLoading(true);
        const allMovies = await getAllMovies();
        setMovies(allMovies);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load movies');
      } finally {
        setLoading(false);
      }
    };

    fetchAllMovies();
  }, []);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteMovies');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const saveFavoritesToLocalStorage = (newFavorites: Movie[]) => {
    localStorage.setItem('favoriteMovies', JSON.stringify(newFavorites));
  };

  const searchMovies = async (term: string) => {
    if (!term.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const results = await getMoviesBySearch(term);
      setMovies(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchMovieDetails = async (imdbID: string) => {
    setLoading(true);
    setError(null);

    try {
      const movie = await getMovieById(imdbID);
      setSelectedMovie(movie);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = (movie: Movie) => {
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      const newFavorites = [...favorites, movie];
      setFavorites(newFavorites);
      saveFavoritesToLocalStorage(newFavorites);
    }
  };

  const removeFromFavorites = (imdbID: string) => {
    const newFavorites = favorites.filter((movie) => movie.imdbID !== imdbID);
    setFavorites(newFavorites);
    saveFavoritesToLocalStorage(newFavorites);
  };

  const isFavorite = (imdbID: string) => {
    return favorites.some((movie) => movie.imdbID === imdbID);
  };

  return (
    <MovieContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        movies,
        loading,
        error,
        searchMovies,
        selectedMovie,
        setSelectedMovie,
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        fetchMovieDetails,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieContextProvider');
  }
  return context;
};  