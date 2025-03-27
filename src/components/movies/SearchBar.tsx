import React, { useState, KeyboardEvent } from 'react';
import { TextField, InputAdornment, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useMovieContext } from '../../context/MovieContext';
import { styles } from '../../assets/styles/search.styles';

export const SearchBar: React.FC = () => {
  const { searchTerm, setSearchTerm, searchMovies } = useMovieContext();
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  const handleSearch = () => {
    if (localSearchTerm.trim()) {
      setSearchTerm(localSearchTerm);
      searchMovies(localSearchTerm);
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box sx={styles.searchBarContainer}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for movies..."
        value={localSearchTerm}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        sx={styles.searchInput}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch} edge="end" sx={styles.searchButton}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};