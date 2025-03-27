import React from 'react';
import { Box, Typography } from '@mui/material';
import { FavoritesList } from '../components/movies/FavoritesList';
import { MovieDetailsModal } from '../components/movies/MovieDetailsModal';
import { favoritesTitle } from '../assets/styles/FavoritesPage.styles';
import { pageContainer } from '../assets/styles/common.styles';


export const FavoritesPage: React.FC = () => {
  return (
    <Box sx={pageContainer}>
      <Typography variant="h4" sx={favoritesTitle}>
        Your Favorite Movies
      </Typography>
      <FavoritesList />
      <MovieDetailsModal />
    </Box>
  );
};