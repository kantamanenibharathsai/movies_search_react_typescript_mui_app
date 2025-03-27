import React from 'react';
import { Alert, Box } from '@mui/material';
import { errorMessage } from '../../assets/styles/common.styles';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Box sx={errorMessage}>
      <Alert severity="error">{message}</Alert>
    </Box>
  );
};