import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export const styles = {
  searchBarContainer: {
    mb: 4,
    width: "100%",
    maxWidth: "800px",
    mx: "auto",
  } as SxProps<Theme>,

  searchInput: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "50px",
      boxShadow: 1,
      pl: 1,
      pr: { xs: 2.1, sm: 2.8 },
    },
  } as SxProps<Theme>,

  searchButton: {
    backgroundColor: "primary.main",
    color: "primary.contrastText",
    "&:hover": {
      backgroundColor: "primary.dark",
    },
  } as SxProps<Theme>,
};
