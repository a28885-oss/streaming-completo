const axios = require('axios');

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const tmdbClient = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY
  }
});

module.exports = {
  tmdbClient,
  TMDB_BASE_URL,
  TMDB_API_KEY,
  TMDB_IMAGE_URL
};
