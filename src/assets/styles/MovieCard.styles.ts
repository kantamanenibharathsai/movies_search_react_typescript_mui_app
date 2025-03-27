import { SxProps, Theme } from "@mui/material/styles";


export const  movieListContainer: SxProps<Theme> ={
  mt: 4,
} 

export const movieGridItem: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'flex-start', 
  padding: '0 !important',
  '& > div': {
    width: '100%'
  }
};

export const movieGrid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 2fr))',
  gap: '24px',
  width: '100%',
  padding: '16px',
  justifyItems: 'center',
  '@media (max-width: 600px)': {
    gap: '16px',
    justifyItems: 'center',
  },
  '@media (min-width: 1200px)': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
    justifyContent: 'center',
    justifyItems: 'center',
  }
};

export const movieCard: SxProps<Theme> = {
  height: "400px",
  width: "100%",
  maxWidth: "280px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: 3,
  cursor: "pointer"
};

export const imgContainer: SxProps<Theme> = {
  height: "300px",
  width: "280px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center", 
  overflow: "hidden",
};

export const movieCardMedia: SxProps<Theme> = {
  height: "100%",
  width: "100%",   
  objectFit: "cover", 
  objectPosition: "center",
  boxShadow: 3,
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
};

export const movieCardContent: SxProps<Theme> = {
  px: 1.5,
  py: 1.5,

};

export const movieCardTitle: SxProps<Theme> = {
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontWeight: 600,
};

export const movieCardDetails: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  mt: 1,
};

export const movieCardType: SxProps<Theme> = {
  textTransform: "capitalize",
};

export const favoriteButtonContainer: SxProps<Theme> = {
  position: "absolute",
  top: 8,
  right: 8,
  zIndex: 1,
};

export const favoriteButton: SxProps<Theme> = {
  backgroundColor: "background.paper",
  "&:hover": {
    backgroundColor: "background.default",
  },
};