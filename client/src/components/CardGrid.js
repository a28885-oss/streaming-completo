import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CardGrid.css';

function CardGrid({ title, endpoint, tipo }) {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint);
        setItens(response.data.filmes || response.data.series || []);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar dados');
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <section className="card-grid-section">
      <h2>{title}</h2>
      <div className="card-grid">
        {itens.slice(0, 12).map(item => (
          <Link
            key={item.id}
            to={`/detalhes/${tipo}/${item.id}`}
            className="card"
          >
            <div className="card-image">
              {item.poster ? (
                <img src={item.poster} alt={item.titulo} />
              ) : (
                <div className="no-image">{tipo === 'filme' ? '🎬' : '📺'}</div>
              )}
            </div>
            <div className="card-info">
              <h3>{item.titulo}</h3>
              <p className="card-nota">⭐ {item.nota.toFixed(1)}</p>
              <p className="card-ano">{item.lancamento ? item.lancamento.split('-')[0] : 'N/A'}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CardGrid;
