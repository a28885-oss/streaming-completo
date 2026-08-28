const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Filmes em Destaque (Trending)
app.get('/api/filmes/trending', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/trending/movie/week`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'pt-BR'
      }
    });
    
    const filmes = response.data.results.map(filme => ({
      id: filme.id,
      titulo: filme.title,
      descricao: filme.overview,
      poster: `${TMDB_IMAGE_URL}${filme.poster_path}`,
      backdrop: `${TMDB_IMAGE_URL}${filme.backdrop_path}`,
      generos: filme.genre_ids,
      nota: filme.vote_average,
      lancamento: filme.release_date,
      popularidade: filme.popularity
    }));
    
    res.json({ filmes });
  } catch (error) {
    console.error('Erro ao buscar filmes trending:', error.message);
    res.status(500).json({ erro: 'Erro ao buscar filmes' });
  }
});

// Filmes Populares (Antigos e Novos)
app.get('/api/filmes/populares', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'pt-BR',
        page: req.query.page || 1
      }
    });
    
    const filmes = response.data.results.map(filme => ({
      id: filme.id,
      titulo: filme.title,
      descricao: filme.overview,
      poster: `${TMDB_IMAGE_URL}${filme.poster_path}`,
      backdrop: `${TMDB_IMAGE_URL}${filme.backdrop_path}`,
      generos: filme.genre_ids,
      nota: filme.vote_average,
      lancamento: filme.release_date,
      popularidade: filme.popularity
    }));
    
    res.json({ filmes, totalPages: response.data.total_pages });
  } catch (error) {
    console.error('Erro ao buscar filmes populares:', error.message);
    res.status(500).json({ erro: 'Erro ao buscar filmes' });
  }
});

// Filmes Melhores Avaliados (Clássicos)
app.get('/api/filmes/classicos', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/top_rated`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'pt-BR',
        page: req.query.page || 1
      }
    });
    
    const filmes = response.data.results.map(filme => ({
      id: filme.id,
      titulo: filme.title,
      descricao: filme.overview,
      poster: `${TMDB_IMAGE_URL}${filme.poster_path}`,
      backdrop: `${TMDB_IMAGE_URL}${filme.backdrop_path}`,
      generos: filme.genre_ids,
      nota: filme.vote_average,
      lancamento: filme.release_date,
      popularidade: filme.popularity
    }));
    
    res.json({ filmes, totalPages: response.data.total_pages });
  } catch (error) {
    console.error('Erro ao buscar filmes clássicos:', error.message);
    res.status(500).json({ erro: 'Erro ao buscar filmes' });
  }
});

// Filmes Lançamentos (Novos)
app.get('/api/filmes/lancamentos', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/upcoming`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'pt-BR',
        page: req.query.page || 1
      }
    });
    
    const filmes = response.data.results.map(filme => ({
      id: filme.id,
      titulo: filme.title,
      descricao: filme.overview,
      poster: `${TMDB_IMAGE_URL}${filme.poster_path}`,
      backdrop: `${TMDB_IMAGE_URL}${filme.backdrop_path}`,
      generos: filme.genre_ids,
      nota: filme.vote_average,
      lancamento: filme.release_date,
      popularidade: filme.popularity
    }));
    
    res.json({ filmes, totalPages: response.data.total_pages });
  } catch (error) {
    console.error('Erro ao buscar lançamentos:', error.message);
    res.status(500).json({ erro: 'Erro ao buscar filmes' });
  }
});

// Séries em Destaque (Trending)
app.get('/api/series/trending', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/trending/tv/week`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'pt-BR'
      }
    });
    
    const series = response.data.results.map(serie => ({
      id: serie.id,
      titulo: serie.name,
      descricao: serie.overview,
      poster: `${TMDB_IMAGE_URL}${serie.poster_path}`,
      backdrop: `${TMDB_IMAGE_URL}${serie.backdrop_path}`,
      generos: serie.genre_ids,
      nota: serie.vote_average,
      lancamento: serie.first_air_date,
      popularidade: serie.popularity
    }));
    
    res.json({ series });
  } catch (error) {
    console.error('Erro ao buscar séries trending:', error.message);
    res.status(500).json({ erro: 'Erro ao buscar séries' });
  }
});

// Séries Populares (Antigos e Novos)
app.get('/api/series/populares', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/tv/popular`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'pt-BR',
        page: req.query.page || 1
      }
    });
    
    const series = response.data.results.map(serie => ({
      id: serie.id,
      titulo: serie.name,
      descricao: serie.overview,
      poster: `${TMDB_IMAGE_URL}${serie.poster_path}`,
      backdrop: `${TMDB_IMAGE_URL}${serie.backdrop_path}`,
      generos: serie.genre_ids,
      nota: serie.vote_average,
      lancamento: serie.first_air_date,
      popularidade: serie.popularity
    }));
    
    res.json({ series, totalPages: response.data.total_pages });
  } catch (error) {
    console.error('Erro ao buscar séries populares:', error.message);
    res.status(500).json({ erro: 'Erro ao buscar séries' });
  }
});

// Séries Melhores Avaliadas (Clássicas)
app.get('/api/series/classicas', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/tv/top_rated`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'pt-BR',
        page: req.query.page || 1
      }
    });
    
    const series = response.data.results.map(serie => ({
      id: serie.id,
      titulo: serie.name,
      descricao: serie.overview,
      poster: `${TMDB_IMAGE_URL}${serie.poster_path}`,
      backdrop: `${TMDB_IMAGE_URL}${serie.backdrop_path}`,
      generos: serie.genre_ids,
      nota: serie.vote_average,
      lancamento: serie.first_air_date,
      popularidade: serie.popularity
    }));
    
    res.json({ series, totalPages: response.data.total_pages });
  } catch (error) {
    console.error('Erro ao buscar séries clássicas:', error.message);
    res.status(500).json({ erro: 'Erro ao buscar séries' });
  }
});

// Buscar Filmes e Séries por Termo
app.get('/api/buscar', async (req, res) => {
  try {
    const { query, tipo } = req.query;
    
    if (!query) {
      return res.status(400).json({ erro: 'Query é obrigatória' });
    }
    
    const endpoint = tipo === 'serie' ? '/search/tv' : '/search/movie';
    const response = await axios.get(`${TMDB_BASE_URL}${endpoint}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'pt-BR',
        query: query
      }
    });
    
    const resultados = response.data.results.map(item => ({
      id: item.id,
      titulo: item.title || item.name,
      descricao: item.overview,
      poster: `${TMDB_IMAGE_URL}${item.poster_path}`,
      backdrop: `${TMDB_IMAGE_URL}${item.backdrop_path}`,
      generos: item.genre_ids,
      nota: item.vote_average,
      lancamento: item.release_date || item.first_air_date,
      popularidade: item.popularity
    }));
    
    res.json({ resultados });
  } catch (error) {
    console.error('Erro ao buscar:', error.message);
    res.status(500).json({ erro: 'Erro ao realizar busca' });
  }
});

// Detalhes de um Filme
app.get('/api/filme/:id', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${req.params.id}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'pt-BR'
      }
    });
    
    const filme = {
      id: response.data.id,
      titulo: response.data.title,
      descricao: response.data.overview,
      poster: `${TMDB_IMAGE_URL}${response.data.poster_path}`,
      backdrop: `${TMDB_IMAGE_URL}${response.data.backdrop_path}`,
      generos: response.data.genres,
      nota: response.data.vote_average,
      lancamento: response.data.release_date,
      duracao: response.data.runtime,
      popularidade: response.data.popularity,
      companies: response.data.production_companies
    };
    
    res.json(filme);
  } catch (error) {
    console.error('Erro ao buscar detalhes do filme:', error.message);
    res.status(500).json({ erro: 'Erro ao buscar detalhes' });
  }
});

// Detalhes de uma Série
app.get('/api/serie/:id', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/tv/${req.params.id}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'pt-BR'
      }
    });
    
    const serie = {
      id: response.data.id,
      titulo: response.data.name,
      descricao: response.data.overview,
      poster: `${TMDB_IMAGE_URL}${response.data.poster_path}`,
      backdrop: `${TMDB_IMAGE_URL}${response.data.backdrop_path}`,
      generos: response.data.genres,
      nota: response.data.vote_average,
      lancamento: response.data.first_air_date,
      temporadas: response.data.number_of_seasons,
      episodios: response.data.number_of_episodes,
      popularidade: response.data.popularity,
      networks: response.data.networks
    };
    
    res.json(serie);
  } catch (error) {
    console.error('Erro ao buscar detalhes da série:', error.message);
    res.status(500).json({ erro: 'Erro ao buscar detalhes' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🎬 Servidor rodando na porta ${PORT}`);
  console.log(`✅ TMDB API integrada com sucesso!`);
});
