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
    const loadData = async () => {
      try {
        setLoading(true);
        const [initialMovies, savedFavorites] = await Promise.all([
          getAllMovies(),
          loadFavorites()
        ]);
        setMovies(initialMovies);
        setFavorites(savedFavorites);
      } catch (err) {
        setError(getErrorMessage(err));
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const loadFavorites = async (): Promise<Movie[]> => {
    const saved = localStorage.getItem('favoriteMovies');
    return saved ? JSON.parse(saved) : [];
  };

  const saveFavorites = (newFavorites: Movie[]) => {
    localStorage.setItem('favoriteMovies', JSON.stringify(newFavorites));
  };

  const searchMovies = async (term: string) => {
    if (!term.trim()) return;

    try {
      setLoading(true);
      setError(null);
      const results = await getMoviesBySearch(term);
      setMovies(results);
    } catch (err) {
      setError(getErrorMessage(err));
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchMovieDetails = async (imdbID: string) => {
    try {
      setLoading(true);
      setError(null);
      const movie = await getMovieById(imdbID);
      console.log(movie);
      setSelectedMovie(movie);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = (movie: Movie) => {
    if (!favorites.some(fav => fav.imdbID === movie.imdbID)) {
      const newFavorites = [...favorites, movie];
      setFavorites(newFavorites);
      saveFavorites(newFavorites);
    }
  };

  const removeFromFavorites = (imdbID: string) => {
    const newFavorites = favorites.filter(movie => movie.imdbID !== imdbID);
    setFavorites(newFavorites);
    saveFavorites(newFavorites);
  };

  const isFavorite = (imdbID: string) => favorites.some(movie => movie.imdbID === imdbID);

  const getErrorMessage = (error: unknown): string => {
    return error instanceof Error ? error.message : 'An unknown error occurred';
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