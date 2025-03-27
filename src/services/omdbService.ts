import axios from "axios";
import { Movie, MovieDetails } from "../types/movieTypes";

const API_KEY = "1d94ff18";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
  return response.data.Search || [];
};

export const getMovieDetails = async (id: string): Promise<MovieDetails> => {
  const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  return response.data;
};
