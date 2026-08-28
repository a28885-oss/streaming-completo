import React from 'react';
import './Series.css';
import CardGrid from '../components/CardGrid';

function Series() {
  return (
    <div className="series">
      <div className="series-header">
        <h1>📺 SÉRIES</h1>
        <p>Explore nossa coleção de séries</p>
      </div>

      <div className="container">
        <CardGrid
          title="Em Destaque"
          endpoint="/api/series/trending"
          tipo="serie"
        />
        
        <CardGrid
          title="Populares (Novos e Antigos)"
          endpoint="/api/series/populares"
          tipo="serie"
        />
        
        <CardGrid
          title="Clássicas (Melhores Avaliadas)"
          endpoint="/api/series/classicas"
          tipo="serie"
        />
      </div>
    </div>
  );
}

export default Series;
