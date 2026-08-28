import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './Detalhes.css';

function Detalhes() {
  const { tipo, id } = useParams();
  const [detalhes, setDetalhes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetalhes = async () => {
      try {
        const endpoint = tipo === 'filme' ? `/api/filme/${id}` : `/api/serie/${id}`;
        const response = await axios.get(endpoint);
        setDetalhes(response.data);
      } catch (err) {
        setError('Erro ao carregar detalhes');
      } finally {
        setLoading(false);
      }
    };

    fetchDetalhes();
  }, [id, tipo]);

  if (loading) return <div className="loading">Carregando detalhes...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!detalhes) return <div className="error">Conteúdo não encontrado</div>;

  const isSerie = tipo === 'serie';

  return (
    <div className="detalhes">
      <div
        className="detalhes-backdrop"
        style={{
          backgroundImage: `url(${detalhes.backdrop})`,
        }}
      >
        <div className="detalhes-overlay"></div>
      </div>

      <div className="detalhes-container">
        <Link to={isSerie ? '/series' : '/filmes'} className="btn-voltar">
          ← Voltar
        </Link>

        <div className="detalhes-content">
          <div className="detalhes-poster">
            {detalhes.poster ? (
              <img src={detalhes.poster} alt={detalhes.titulo} />
            ) : (
              <div className="no-image">{isSerie ? '📺' : '🎬'}</div>
            )}
          </div>

          <div className="detalhes-info">
            <h1>{detalhes.titulo}</h1>

            <div className="detalhes-meta">
              <span className="meta-item">
                <strong>Avaliação:</strong> ⭐ {detalhes.nota.toFixed(1)}/10
              </span>
              <span className="meta-item">
                <strong>Lançamento:</strong> {detalhes.lancamento || 'N/A'}
              </span>
              {isSerie ? (
                <>
                  <span className="meta-item">
                    <strong>Temporadas:</strong> {detalhes.temporadas}
                  </span>
                  <span className="meta-item">
                    <strong>Episódios:</strong> {detalhes.episodios}
                  </span>
                </>
              ) : (
                <span className="meta-item">
                  <strong>Duração:</strong> {detalhes.duracao} minutos
                </span>
              )}
            </div>

            {detalhes.generos && detalhes.generos.length > 0 && (
              <div className="detalhes-generos">
                <strong>Gêneros:</strong>
                <div className="generos-list">
                  {detalhes.generos.map(genero => (
                    <span key={genero.id} className="genero-tag">
                      {genero.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="detalhes-sinopse">
              <h2>Sinopse</h2>
              <p>{detalhes.descricao || 'Sem descrição disponível'}</p>
            </div>

            <button className="btn-assistir">▶️ Assistir Agora</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detalhes;
