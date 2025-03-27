import { SxProps, Theme } from "@mui/material/styles";


export const pageContainer: SxProps<Theme> = {
  px: { xs: 2, sm: 3, md: 4 },
  py: 3,
  maxWidth: "1600px",
  margin: "0 auto",
};

export const loadingSpinner: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "300px",
};

export const errorMessage: SxProps<Theme> = {
  my: 4,
  width: "100%",
};

export const noResults: SxProps<Theme> = {
  textAlign: "center",
  mt: 4,
  color: "text.secondary",
};

export const topAndBottomContainer: SxProps<Theme> = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1100,
  backgroundColor: (theme) => theme.palette.background.paper,
  boxShadow: (theme) => `0 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.6)'}`,
  height: '64px',
  display: 'flex',
  alignItems: 'center',
};