import { SxProps, Theme } from "@mui/material/styles";

export const navbarContainer: SxProps<Theme> = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1100,
  backgroundColor: (theme) => theme.palette.background.paper,
  boxShadow: (theme) => `0 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
  height: '64px',
  display: 'flex',
  alignItems: 'center',
};

export const navbarContent: SxProps<Theme> = {
  width: '100%',
  maxWidth: '1280px',
  margin: '0 auto',
  padding: { xs: '0 12px', sm: '0 24px' },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const navbarBrand: SxProps<Theme> = {
  fontWeight: 700,
  letterSpacing: '0.5px',
  fontSize: { xs: '1.1rem', sm: '1.25rem' },
  color: (theme) => theme.palette.text.primary,
  flexShrink: 0,
};

export const navLinks: SxProps<Theme> = {
  display: 'flex',
  gap: { xs: '4px', sm: '8px' },
  margin: '0 8px',
  flexGrow: 1,
  justifyContent: 'center',
};

export const navButton: SxProps<Theme> = {
  color: (theme) => theme.palette.text.primary,
  fontWeight: 500,
  fontSize: '0.875rem',
  textTransform: 'none',
  padding: '6px 12px',
  borderRadius: '4px',
  display: { xs: 'none', sm: 'flex' },
  '&:hover': {
    backgroundColor: (theme) => theme.palette.action.hover,
  },
};

export const navIconDesktop: SxProps<Theme> = {
  display: { xs: 'none', sm: 'block' },
  fontSize: '1rem',
};

export const navIconMobile: SxProps<Theme> = {
  display: { xs: 'flex', sm: 'none' },
  color: (theme) => theme.palette.text.primary,
  padding: '8px',
  '&:hover': {
    backgroundColor: (theme) => theme.palette.action.hover,
  },
};

export const activeNavButton: SxProps<Theme> = {
  color: (theme) => theme.palette.primary.main,
  fontWeight: 600,
  '&:hover': {
    backgroundColor: (theme) => theme.palette.action.hover,
  },
};

export const activeNavIcon: SxProps<Theme> = {
  color: (theme) => theme.palette.primary.main,
};

export const activeNavIconMobile: SxProps<Theme> = {
  color: (theme) => theme.palette.primary.main,
  backgroundColor: (theme) => theme.palette.action.selected,
  '&:hover': {
    backgroundColor: (theme) => theme.palette.action.selected,
  },}

 export const  navActions : SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  }