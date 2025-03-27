import { SxProps, Theme } from "@mui/material/styles";

export const footer: SxProps<Theme> = {
  py: 3,
  backgroundColor: "background.paper",
  borderTop: "1px solid",
  borderColor: "divider",
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
};

export const footerText: SxProps<Theme> = {
  color: "text.secondary",
};

export const footerCont: SxProps<Theme> = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1100,
  backgroundColor: (theme: Theme) => theme.palette.background.paper,
  boxShadow: (theme: Theme) => `0 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.6)'}`,
  height: '64px',
  display: 'flex',
  alignItems: 'center',
};