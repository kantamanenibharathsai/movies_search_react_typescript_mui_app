import React from 'react';
import { Box } from '@mui/material';
import { SearchBar } from '../components/movies/SearchBar';
import { MovieList } from '../components/movies/MovieList';
import { MovieDetailsModal } from '../components/movies/MovieDetailsModal';
import { pageContainer } from '../assets/styles/common.styles';
import { useMovieContext } from '../context/MovieContext';

export const HomePage: React.FC = () => {
  const {
    selectedMovie,
    setSelectedMovie,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
  } = useMovieContext();

  const handleClose = () => {
    setSelectedMovie(null);
  };

  const handleToggleFavorite = () => {
    if (!selectedMovie) return;
    
    if (isFavorite(selectedMovie.imdbID)) {
      removeFromFavorites(selectedMovie.imdbID);
    } else {
      addToFavorites(selectedMovie);
    }
  };

  return (
    <Box sx={pageContainer}>
      <SearchBar />
      <MovieList />
      <MovieDetailsModal
        movie={selectedMovie}
        open={Boolean(selectedMovie)}
        onClose={handleClose}
        isFavorite={selectedMovie ? isFavorite(selectedMovie.imdbID) : false}
        onToggleFavorite={handleToggleFavorite}
      />
    </Box>
  );
};