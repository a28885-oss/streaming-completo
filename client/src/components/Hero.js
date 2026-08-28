import React from 'react';
import './Hero.css';

function Hero({ backdrop, titulo, descricao, nota }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${backdrop})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{titulo || 'StreamFlix'}</h1>
        <p>{descricao || 'Assista aos seus filmes e séries favoritos em qualquer lugar, a qualquer hora'}</p>
        {nota && <p className="hero-nota">⭐ {nota.toFixed(1)}/10</p>}
        <button className="btn-primary">▶️ Assistir Agora</button>
      </div>
    </section>
  );
}

export default Hero;
