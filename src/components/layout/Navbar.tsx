import React from "react";
import { Box, Typography, Button, IconButton, SxProps, Theme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ThemeToggle } from "../common/ThemeToggle";
import { 
  navbarContent,
  navbarBrand,
  navLinks,
  navButton,
  navIconMobile,
  activeNavButton,
  activeNavIcon,
  activeNavIconMobile,
  navActions,
} from "../../assets/styles/Navbar.styles";
import { topAndBottomContainer } from "../../assets/styles/common.styles";

export const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box sx={topAndBottomContainer}>
      <Box sx={navbarContent}>
        <Typography variant="h6" component="div" sx={navbarBrand}>
          MovieSearch
        </Typography>
        <Box sx={navLinks}>
          <Button
            component={Link}
            to="/"
            sx={[
              navButton,
              isActive('/') && activeNavButton
            ] as SxProps<Theme>}
            startIcon={
              <HomeIcon
                sx={
                  [
                    navButton,
                    isActive('/') && activeNavIcon
                  ] as SxProps<Theme>
                }
              />
            }
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/favorites"
            sx={[
              navButton,
              isActive('/favorites') && activeNavButton
            ] as SxProps<Theme>}
            startIcon={
              <FavoriteIcon
                sx={
                  [
                    navButton,
                    isActive('/favorites') && activeNavIcon
                  ] as SxProps<Theme>
                }
              />
            }
          >
            Favorites
          </Button>
          <IconButton
            component={Link}
            to="/"
            sx={[
              navIconMobile,
              isActive('/') && activeNavIconMobile
            ] as SxProps<Theme>}
            aria-label="Home"
          >
            <HomeIcon />
          </IconButton>
          <IconButton
            component={Link}
            to="/favorites"
            sx={[
              navIconMobile,
              isActive('/favorites') && activeNavIconMobile
            ] as SxProps<Theme>}
            aria-label="Favorites"
          >
            <FavoriteIcon />
          </IconButton>
        </Box>

        <Box sx={navActions}>
          <ThemeToggle />
        </Box>
      </Box>
    </Box>
  );
};