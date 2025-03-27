import React from "react";
import { Box, Typography } from "@mui/material";
import { MovieCard } from "../common/MovieCard";
import { useMovieContext } from "../../context/MovieContext";
import {
  favoritesContainer,
  noFavorites,
} from "../../assets/styles/FavoritesPage.styles";
import { movieGrid } from "../../assets/styles/MovieCard.styles";

export const FavoritesList: React.FC = () => {
  const {
    favorites,
    removeFromFavorites,
    fetchMovieDetails,
    isFavorite,
    addToFavorites,
  } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <Typography sx={noFavorites}>
        You haven't added any favorites yet.
      </Typography>
    );
  }

  return (
    <Box sx={favoritesContainer}>
      <Box sx={movieGrid}>
        {favorites.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={() => fetchMovieDetails(movie.imdbID)}
            isFavorite={isFavorite(movie.imdbID)}
            onToggleFavorite={() => {
              if (isFavorite(movie.imdbID)) {
                removeFromFavorites(movie.imdbID);
              } else {
                addToFavorites(movie);
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};