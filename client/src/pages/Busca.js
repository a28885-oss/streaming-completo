import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import './Busca.css';

function Busca() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tipoFiltro, setTipoFiltro] = useState('filme');

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/buscar', {
          params: {
            query: query,
            tipo: tipoFiltro
          }
        });
        setResultados(response.data.resultados || []);
        setError(null);
      } catch (err) {
        setError('Erro ao buscar conteúdo');
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, tipoFiltro]);

  return (
    <div className="busca">
      <div className="busca-header">
        <h1>🔍 Resultados para: "{query}"</h1>
        
        <div className="filtro-tipo">
          <button
            className={tipoFiltro === 'filme' ? 'active' : ''}
            onClick={() => setTipoFiltro('filme')}
          >
            Filmes
          </button>
          <button
            className={tipoFiltro === 'serie' ? 'active' : ''}
            onClick={() => setTipoFiltro('serie')}
          >
            Séries
          </button>
        </div>
      </div>

      <div className="container">
        {loading && <div className="loading">Carregando resultados...</div>}
        
        {error && <div className="error">{error}</div>}
        
        {!loading && resultados.length === 0 && (
          <div className="no-results">
            <p>Nenhum resultado encontrado para "{query}"</p>
          </div>
        )}
        
        {!loading && resultados.length > 0 && (
          <div className="resultados-grid">
            {resultados.map(item => (
              <Link
                key={item.id}
                to={`/detalhes/${tipoFiltro}/${item.id}`}
                className="resultado-card"
              >
                <div className="card-image">
                  {item.poster ? (
                    <img src={item.poster} alt={item.titulo} />
                  ) : (
                    <div className="no-image">{tipoFiltro === 'filme' ? '🎬' : '📺'}</div>
                  )}
                </div>
                <div className="card-info">
                  <h3>{item.titulo}</h3>
                  <p className="card-nota">⭐ {item.nota.toFixed(1)}</p>
                  <p className="card-descricao">{item.descricao.substring(0, 100)}...</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Busca;
