import React from 'react';
import { Box } from '@mui/material';
import { SearchBar } from '../components/movies/SearchBar';
import { MovieList } from '../components/movies/MovieList';
import { MovieDetailsModal } from '../components/movies/MovieDetailsModal';
import { pageContainer } from '../assets/styles/common.styles';

export const HomePage: React.FC = () => {
  return (
    <Box sx={pageContainer}>
      <SearchBar />
      <MovieList />
      <MovieDetailsModal />
    </Box>
  );
};