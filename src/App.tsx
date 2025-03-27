import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeContextProvider } from './context/ThemeContext';
import { MovieContextProvider } from './context/MovieContext';
import { HomePage } from './pages/HomePage';
import { FavoritesPage } from './pages/FavoritesPage';
import { MainLayout } from './components/MainLayout';

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <MovieContextProvider>
        <Router>
          <CssBaseline />
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </MainLayout>
        </Router>
      </MovieContextProvider>
    </ThemeContextProvider>
  );
};

export default App;