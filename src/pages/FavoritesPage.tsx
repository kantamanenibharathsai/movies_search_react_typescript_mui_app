import React from "react";
import { Box, Typography } from "@mui/material";
import { FavoritesList } from "../components/movies/FavoritesList";
import { MovieDetailsModal } from "../components/movies/MovieDetailsModal";
import { favoritesTitle } from "../assets/styles/FavoritesPage.styles";
import { pageContainer } from "../assets/styles/common.styles";
import { useMovieContext } from "../context/MovieContext";

export const FavoritesPage: React.FC = () => {
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
      <Typography variant="h4" sx={favoritesTitle}>
        Your Favorite Movies
      </Typography>
      <FavoritesList />
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
