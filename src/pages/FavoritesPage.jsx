import { useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../components/GameCard';
import useGames from '../hooks/useGames';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const { favoriteGames, toggleFavorite, rateGame } = useGames();

  const handleToggleFavorite = useCallback((gameId) => {
    toggleFavorite(gameId);
  }, [toggleFavorite]);

  const handleRateGame = useCallback((gameId, rating) => {
    rateGame(gameId, rating);
  }, [rateGame]);

  // Mensaje cuando no hay favoritos
  const emptyMessage = useMemo(() => (
    <div className="empty-state">
      <h3>No tienes juegos favoritos</h3>
      <p>Da ❤️ a los juegos para añadirlos a favoritos</p>
      <Link to="/juegos" className="link-button">
        Ver todos los juegos
      </Link>
    </div>
  ), []);

  return (
    <section className="favorites-page">
      <div className="container">
        <h2 className="favorites-title">Mis Favoritos</h2>
        
        {favoriteGames.length === 0 ? (
          emptyMessage
        ) : (
          <div className="favorites-grid">
            {favoriteGames.map(game => (
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

export default FavoritesPage; 