import React, { useState, KeyboardEvent, useEffect } from 'react';
import { TextField, InputAdornment, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useMovieContext } from '../../context/MovieContext';
import { styles } from '../../assets/styles/search.styles';
import useDebounce from '../../hooks/useDebounce';

export const SearchBar: React.FC = () => {
  const { searchTerm, setSearchTerm, searchMovies } = useMovieContext();
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const debouncedSearchTerm = useDebounce(localSearchTerm, 200);
  useEffect(() => {
    const performSearch = async () => {
      await searchMovies(debouncedSearchTerm);
    };
    performSearch();
  }, [debouncedSearchTerm]);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      searchMovies(localSearchTerm);
    }
  };

  return (
    <Box sx={styles.searchBarContainer}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for any movie..."
        value={localSearchTerm}
        onChange={(e) => {
          setLocalSearchTerm(e.target.value);
          setSearchTerm(e.target.value);
        }}
        onKeyPress={handleKeyPress}
        sx={styles.searchInput}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton 
                onClick={() => searchMovies(localSearchTerm)}
                edge="end" 
                sx={styles.searchButton}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};