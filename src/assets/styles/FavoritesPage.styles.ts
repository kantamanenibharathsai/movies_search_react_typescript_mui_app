import { SxProps, Theme } from "@mui/material/styles";

export const favoritesTitle: SxProps<Theme> = {
  mb: 4,
  textAlign: "center",
  fontWeight: 600,
};

export const favoritesContainer: SxProps<Theme> = {
  border: "2px solid pink"
};

export const noFavorites: SxProps<Theme> = {
  textAlign: "center",
  mt: 4,
  color: "text.secondary",
};
