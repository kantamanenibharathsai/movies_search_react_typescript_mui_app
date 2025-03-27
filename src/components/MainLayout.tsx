import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';

const styles = {
  mainLayout: {
    position: "absolute",
    top: "65px",
    height: "auto",
    width: "100%",
    border: "3px solid black",
  } as SxProps<Theme>,

  mainContent: {
    paddingTop: "30px",
    paddingBottom: "80px",
    border: "3px solid red",
  } as SxProps<Theme>
};

  interface MainLayoutProps {
    children: React.ReactNode;
  }
  

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box sx={styles.mainLayout}>
      <Navbar />
      <Box component="main" sx={styles.mainContent}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};