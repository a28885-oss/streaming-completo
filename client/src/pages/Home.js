import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import Hero from '../components/Hero';
import CardGrid from '../components/CardGrid';

function Home() {
  const [heroItem, setHeroItem] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await axios.get('/api/filmes/trending');
        if (response.data.filmes && response.data.filmes.length > 0) {
          setHeroItem(response.data.filmes[0]);
        }
      } catch (error) {
        console.error('Erro ao carregar hero:', error);
      }
    };

    fetchHero();
  }, []);

  return (
    <div className="home">
      {heroItem && (
        <Hero
          backdrop={heroItem.backdrop}
          titulo={heroItem.titulo}
          descricao={heroItem.descricao}
          nota={heroItem.nota}
        />
      )}
      
      <div className="container">
        <CardGrid
          title="🔥 Filmes em Destaque"
          endpoint="/api/filmes/trending"
          tipo="filme"
        />
        
        <CardGrid
          title="⭐ Filmes Clássicos"
          endpoint="/api/filmes/classicos"
          tipo="filme"
        />
        
        <CardGrid
          title="📺 Séries em Destaque"
          endpoint="/api/series/trending"
          tipo="serie"
        />
        
        <CardGrid
          title="🎯 Séries Populares"
          endpoint="/api/series/populares"
          tipo="serie"
        />
      </div>
    </div>
  );
}

export default Home;
