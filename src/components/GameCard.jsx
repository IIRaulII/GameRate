import { memo, useCallback } from 'react';
import StarRating from './StarRating';
import './GameCard.css';

const GameCard = memo(({ 
  game, 
  onToggleFavorite, 
  onRateChange 
}) => {
  const { 
    id, 
    nombre, 
    descripcion, 
    genero, 
    precio, 
    plataforma, 
    imagen, 
    puntuacion, 
    favorito 
  } = game;

  const handleToggleFavorite = useCallback(() => {
    onToggleFavorite(id);
  }, [id, onToggleFavorite]);

  const handleRateChange = useCallback((newRating) => {
    onRateChange(id, newRating);
  }, [id, onRateChange]);

  return (
    <article className="game-card">
      <div className="game-card-image-container">
        <img src={imagen} alt={nombre} className="game-card-image" />
        <button 
          className={`favorite-button ${favorito ? 'favorite' : ''}`}
          onClick={handleToggleFavorite}
          aria-label={favorito ? 'Quitar de favoritos' : 'Añadir a favoritos'}
        >
          ❤
        </button>
      </div>
      <div className="game-card-content">
        <h3 className="game-card-title">{nombre}</h3>
        <div className="game-card-meta">
          <span className="game-card-genre">{genero}</span>
          <span className="game-card-platform">{plataforma}</span>
        </div>
        <p className="game-card-description">{descripcion}</p>
        <div className="game-card-footer">
          <span className="game-card-price">{precio.toFixed(2)}€</span>
          <StarRating 
            initialRating={puntuacion} 
            onRateChange={handleRateChange} 
          />
        </div>
      </div>
    </article>
  );
});

export default GameCard; 