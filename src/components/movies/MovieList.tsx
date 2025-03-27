import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { MovieCard } from '../common/MovieCard';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { ErrorMessage } from '../common/ErrorMessage';
import { useMovieContext } from '../../context/MovieContext';
import { noResults } from '../../assets/styles/common.styles';
import { movieGrid, movieListContainer } from '../../assets/styles/MovieCard.styles';


export const MovieList: React.FC = () => {
  const { movies, loading, error, selectedMovie, setSelectedMovie, isFavorite, addToFavorites, removeFromFavorites } =
    useMovieContext();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (movies.length === 0) return <Typography sx={noResults}>No movies found. Try a different search.</Typography>;

  return (
    <Box sx={movieListContainer}>
      <Grid container spacing={4} sx={movieGrid} justifyItems={"center"} justifyContent={"center"} alignItems={"center"}>
        {movies.map((movie) => (
          <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3} justifyItems={"center"} justifyContent={"center"} alignItems={"center"}>
            <MovieCard
              movie={movie}
              onClick={() => setSelectedMovie(movie)}
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