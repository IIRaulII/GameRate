import { useMemo, useCallback } from 'react';
import GameCard from '../components/GameCard';
import useGames from '../hooks/useGames';
import './GamesPage.css';

const GamesPage = () => {
  const { games, toggleFavorite, rateGame } = useGames();

  const handleToggleFavorite = useCallback((gameId) => {
    toggleFavorite(gameId);
  }, [toggleFavorite]);

  const handleRateGame = useCallback((gameId, rating) => {
    rateGame(gameId, rating);
  }, [rateGame]);

  // Mensaje cuando no hay juegos
  const emptyMessage = useMemo(() => (
    <div className="empty-state">
      <h3>No hay juegos añadidos</h3>
      <p>Añade juegos desde la sección "Añadir Juego"</p>
    </div>
  ), []);

  return (
    <section className="games-page">
      <div className="container">
        <h2 className="games-title">Videojuegos</h2>
        
        {games.length === 0 ? (
          emptyMessage
        ) : (
          <div className="games-grid">
            {games.map(game => (
              <GameCard 
                key={game.id}
                game={game}
                onToggleFavorite={handleToggleFavorite}
                onRateChange={handleRateGame}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GamesPage; 