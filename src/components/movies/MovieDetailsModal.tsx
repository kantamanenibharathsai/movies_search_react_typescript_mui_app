import React from 'react';
import {
  Modal,
  Box,
  Typography,
  Chip,
  Divider,
  IconButton,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import {
  modalContainer,
  modalPaper,
  modalContent,
  posterContainer,
  posterImage,
  detailsContainer,
  titleSection,
  titleText,
  metaChips,
  chip,
  ratingContainer,
  ratingValue,
  plotText,
  infoGrid,
  infoItem,
  infoLabel,
  infoValue,
  closeButton,
  actionButtons
} from '../../assets/styles/MovieModal.styles';
import { Movie } from '../../models/Movie';

interface MovieDetailsModalProps {
  movie: Movie | null;
  open: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const MovieDetailsModal: React.FC<MovieDetailsModalProps> = ({
  movie,
  open,
  onClose,
  isFavorite,
  onToggleFavorite
}) => {
  if (!movie) return null;

  return (
    <Modal open={open} onClose={onClose} sx={modalContainer}>
      <Box sx={modalPaper}>
        <IconButton onClick={onClose} sx={closeButton}>
          <CloseIcon />
        </IconButton>
        <Box sx={modalContent}>
          <Box sx={posterContainer}>
            <Box
              component="img"
              src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.png'}
              alt={movie.Title}
              sx={posterImage}
            />
            <Box sx={ratingContainer}>
              <StarIcon color="secondary" />
              <Typography variant="body1" sx={ratingValue}>
                {movie.imdbRating}/10 ({movie.imdbVotes} votes)
              </Typography>
            </Box>
          </Box>

          <Box sx={detailsContainer}>
            <Box sx={titleSection}>
              <Typography variant="h3" sx={titleText}>
                {movie.Title} ({movie.Year})
              </Typography>
              <Box sx={metaChips}>
                <Chip label={movie.Rated} sx={chip} />
                <Chip label={movie.Runtime} sx={chip} />
                <Chip label={(movie.Genre ?? '').split(',')[0]} sx={chip} />
                {movie.Type && <Chip label={movie.Type} sx={chip} />}
              </Box>
            </Box>
            <Typography sx={plotText}>{movie.Plot}</Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={infoGrid}>
              <Box sx={infoItem}>
                <Typography component="span" sx={infoLabel}>
                  Director
                </Typography>
                <Typography sx={infoValue}>{movie.Director}</Typography>
              </Box>

              <Box sx={infoItem}>
                <Typography component="span" sx={infoLabel}>
                  Writers
                </Typography>
                <Typography sx={infoValue}>
                  {(movie.Writer ?? '').split(',').slice(0, 2).join(', ')}
                </Typography>
              </Box>

              <Box sx={infoItem}>
                <Typography component="span" sx={infoLabel}>
                  Stars
                </Typography>
                <Typography sx={infoValue}>
                  {(movie.Actors ?? '').split(',').slice(0, 3).join(', ')}
                </Typography>
              </Box>

              <Box sx={infoItem}>
                <Typography component="span" sx={infoLabel}>
                  Release Date
                </Typography>
                <Typography sx={infoValue}>{movie.Released}</Typography>
              </Box>

              <Box sx={infoItem}>
                <Typography component="span" sx={infoLabel}>
                  Box Office
                </Typography>
                <Typography sx={infoValue}>{movie.BoxOffice}</Typography>
              </Box>

              <Box sx={infoItem}>
                <Typography component="span" sx={infoLabel}>
                  Awards
                </Typography>
                <Typography sx={infoValue}>
                  {(movie.Awards ?? '').split('.').slice(0, 1)}.
                </Typography>
              </Box>
            </Box>

            <Box sx={actionButtons}>
              <Button
                variant="contained"
                startIcon={isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                onClick={onToggleFavorite}
                color={isFavorite ? "error" : "primary"}
                fullWidth
              >
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};