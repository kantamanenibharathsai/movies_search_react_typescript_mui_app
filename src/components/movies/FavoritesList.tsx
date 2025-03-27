import React from "react";
import { Grid, Box, Typography } from "@mui/material";
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
    setSelectedMovie,
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
      <Grid container spacing={4} sx={movieGrid}>
        {favorites.map((movie) => (
          <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
            <MovieCard
              movie={movie}
              onClick={() => setSelectedMovie(movie)}
              isFavorite={true}
              onToggleFavorite={() => removeFromFavorites(movie.imdbID)}
            />
            <MovieCard
              movie={movie}
              onClick={() => {
                fetchMovieDetails(movie.imdbID);
              }}
              isFavorite={isFavorite(movie.imdbID)}
              onToggleFavorite={() => {
                if (isFavorite(movie.imdbID)) {
                  removeFromFavorites(movie.imdbID);
                } else {
                  addToFavorites(movie);
                }
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
