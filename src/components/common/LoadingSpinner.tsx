import React from 'react';
import { CircularProgress, Box } from '@mui/material';
import { loadingSpinner } from '../../assets/styles/common.styles';


export const LoadingSpinner: React.FC = () => {
  return (
    <Box sx={loadingSpinner}>
      <CircularProgress />
    </Box>
  );
};