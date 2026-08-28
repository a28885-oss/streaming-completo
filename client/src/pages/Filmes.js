import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Filmes.css';
import CardGrid from '../components/CardGrid';

function Filmes() {
  return (
    <div className="filmes">
      <div className="filmes-header">
        <h1>🎬 FILMES</h1>
        <p>Explore nossa coleção de filmes</p>
      </div>

      <div className="container">
        <CardGrid
          title="Em Destaque"
          endpoint="/api/filmes/trending"
          tipo="filme"
        />
        
        <CardGrid
          title="Populares (Novos e Antigos)"
          endpoint="/api/filmes/populares"
          tipo="filme"
        />
        
        <CardGrid
          title="Clássicos (Melhores Avaliados)"
          endpoint="/api/filmes/classicos"
          tipo="filme"
        />
        
        <CardGrid
          title="Próximos Lançamentos"
          endpoint="/api/filmes/lancamentos"
          tipo="filme"
        />
      </div>
    </div>
  );
}

export default Filmes;
