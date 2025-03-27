import React from 'react';
import { 
  Typography, 
  Box, 
  IconButton 
} from '@mui/material';
import { Movie } from '../../models/Movie';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  movieCard,
  movieCardMedia,
  movieCardContent,
  movieCardTitle,
  movieCardDetails,
  movieCardType,
  favoriteButtonContainer,
  favoriteButton,
  imgContainer
} from '../../assets/styles/MovieCard.styles';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ 
  movie, 
  onClick, 
  isFavorite, 
  onToggleFavorite 
}) => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(e);
  };

  return (
    <Box sx={movieCard} onClick={onClick}>
      <Box sx={imgContainer}>
        <Box
          component="img"
          height="300"
          src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.png'}
          alt={movie.Title}
          sx={movieCardMedia}
        />
        </Box>
        <Box sx={movieCardContent}>
          <Typography gutterBottom variant="h6" component="div" sx={movieCardTitle}>
            {movie.Title}
          </Typography>
          <Box sx={movieCardDetails}>
            <Typography variant="body2" color="text.secondary">
              {movie.Year}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={movieCardType}>
              {movie.Type}
            </Typography>
          </Box>
        </Box>
      <Box/>
      <Box sx={favoriteButtonContainer}>
        <IconButton 
          onClick={handleFavoriteClick} 
          sx={favoriteButton}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? (
            <FavoriteIcon color="error" />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};