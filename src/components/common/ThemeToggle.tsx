import React from 'react';
import { IconButton, Tooltip, Box, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../../context/ThemeContext';
import { darkIcon, lightIcon, themeToggleButton, themeToggleContainer, themeToggleLabel } from '../../assets/styles/ThemeToggle.styles';


export const ThemeToggle: React.FC = () => {
  const { toggleTheme, isDarkMode } = useThemeContext();

  return (
    <Tooltip title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
      <Box sx={themeToggleContainer}>
        <IconButton
          onClick={toggleTheme}
          color="inherit"
          sx={themeToggleButton}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? (
            <Brightness7Icon sx={lightIcon} />
          ) : (
            <Brightness4Icon sx={darkIcon} />
          )}
          <Typography 
            variant="body2" 
            component="span"
            sx={themeToggleLabel}>
            {isDarkMode ? 'Light' : 'Dark'}
          </Typography>
        </IconButton>
      </Box>
    </Tooltip>
  );
};