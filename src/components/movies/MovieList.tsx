import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { MovieCard } from "../common/MovieCard";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { ErrorMessage } from "../common/ErrorMessage";
import { useMovieContext } from "../../context/MovieContext";
import { noResults } from "../../assets/styles/common.styles";
import {
  movieGrid,
  movieListContainer,
} from "../../assets/styles/MovieCard.styles";

export const MovieList: React.FC = () => {
  const {
    movies,
    loading,
    error,
    selectedMovie,
    fetchMovieDetails,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
  } = useMovieContext();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (movies.length === 0)
    return (
      <Typography sx={noResults}>
        No movies found. Try a different search.
      </Typography>
    );

  return (
    <Box sx={movieListContainer}>
      <Box sx={movieGrid}>
        {movies.map((movie) => (
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
