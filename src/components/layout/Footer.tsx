import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import {footerCont, footerText } from '../../assets/styles/Footer.styles';


export const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={footerCont}>
      <Container maxWidth="xl">
        <Typography variant="body2" align="center" sx={footerText}>
          © {new Date().getFullYear()} Movie Search App - Powered by OMDB API
        </Typography>
      </Container>
    </Box>
  );
};