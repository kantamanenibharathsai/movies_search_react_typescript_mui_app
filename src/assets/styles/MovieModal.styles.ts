import { SxProps, Theme } from "@mui/material/styles";

export const modalContainer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: { xs: 1, sm: 2 },
};

export const modalPaper: SxProps<Theme> = {
  position: 'relative',
  maxWidth: '900px',
  width: '100%',
  maxHeight: '90vh',
  overflowY: 'auto',
  outline: 'none',
  borderRadius: '12px',
};

export const modalContent: SxProps<Theme> = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  p: { xs: 2, sm: 3 },
};

export const posterContainer: SxProps<Theme> = {
  width: { xs: '100%', md: '40%' },
  pr: { md: 3 },
  mb: { xs: 3, md: 0 },
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

export const posterImage: SxProps<Theme> = {
  width: '100%',
  borderRadius: '8px',
  boxShadow: 3,
  aspectRatio: '2/3',
  objectFit: 'cover',
};

export const detailsContainer: SxProps<Theme> = {
  width: { xs: '100%', md: '60%' },
};

export const titleSection: SxProps<Theme> = {
  mb: 2,
};

export const titleText: SxProps<Theme> = {
  fontWeight: 700,
  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
  lineHeight: 1.2,
};

export const metaChips: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 1,
  mb: 2,
};

export const chip: SxProps<Theme> = {
  borderRadius: '4px',
  fontSize: '0.75rem',
  fontWeight: 500,
};

export const ratingContainer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  mb: 2,
};

export const ratingValue: SxProps<Theme> = {
  ml: 0.5,
  fontWeight: 500,
};

export const plotText: SxProps<Theme> = {
  mb: 3,
  lineHeight: 1.6,
  fontSize: { xs: '0.9rem', sm: '1rem' },
};

export const infoGrid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
  gap: 2,
  mb: 3,
};

export const infoItem: SxProps<Theme> = {
  mb: 1,
};

export const infoLabel: SxProps<Theme> = {
  fontWeight: 600,
  fontSize: '0.85rem',
  color: (theme) => theme.palette.text.secondary,
  display: 'block',
};

export const infoValue: SxProps<Theme> = {
  fontSize: '0.95rem',
};

export const closeButton: SxProps<Theme> = {
  position: 'absolute',
  top: 8,
  right: 8,
  zIndex: 1,
  backgroundColor: (theme) => theme.palette.background.paper,
  '&:hover': {
    backgroundColor: (theme) => theme.palette.action.hover,
  },
};

export const actionButtons: SxProps<Theme> = {
  display: 'flex',
  gap: 2,
  mt: 3,
};