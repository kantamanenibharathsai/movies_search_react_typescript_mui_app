import { SxProps, Theme } from "@mui/material/styles";

export const themeToggleContainer: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  marginLeft: { xs: 1, sm: 2 },
};

export const themeToggleButton: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: { xs: 0.5, sm: 1 },
  padding: { xs: "6px 8px", sm: "8px 12px" },
  borderRadius: "50px",
  transition: "all 0.3s ease",
  backgroundColor: (theme) =>
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.08)"
      : "rgba(0, 0, 0, 0.04)",
  "&:hover": {
    backgroundColor: (theme) =>
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.16)"
        : "rgba(0, 0, 0, 0.08)",
  },
};

export const themeToggleLabel: SxProps<Theme> = {
  display: { xs: "none", sm: "block" },
  fontSize: "0.875rem",
  fontWeight: 500,
  ml: 0.5,
  whiteSpace: "nowrap",
};

export const lightIcon: SxProps<Theme> = {
  color: (theme) =>
    theme.palette.mode === "dark" ? "#ffeb3b" : "text.primary",
};

export const darkIcon: SxProps<Theme> = {
  color: (theme) =>
    theme.palette.mode === "light" ? "primary.main" : "text.primary",
};