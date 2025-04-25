import { createContext, useReducer, useCallback, useMemo } from 'react';
import { gameReducer, initialState, GAME_ACTIONS } from '../reducers/gameReducer';

// Crear el contexto
export const GameContext = createContext();

// Proveedor del contexto
export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  // Acciones memoizadas para evitar re-renderizados innecesarios
  const addGame = useCallback((game) => {
    dispatch({
      type: GAME_ACTIONS.ADD_GAME,
      payload: {
        ...game,
        id: crypto.randomUUID(),
        puntuacion: 0,
        favorito: false
      }
    });
  }, []);

  const toggleFavorite = useCallback((gameId) => {
    dispatch({
      type: GAME_ACTIONS.TOGGLE_FAVORITE,
      payload: gameId
    });
  }, []);

  const rateGame = useCallback((gameId, rating) => {
    dispatch({
      type: GAME_ACTIONS.RATE_GAME,
      payload: { gameId, rating }
    });
  }, []);

  const deleteGame = useCallback((gameId) => {
    dispatch({
      type: GAME_ACTIONS.DELETE_GAME,
      payload: gameId
    });
  }, []);

  // Valores filtrados memoizados
  const favoriteGames = useMemo(() => {
    return state.games.filter(game => game.favorito);
  }, [state.games]);

  // Value del contexto memoizado
  const contextValue = useMemo(() => ({
    games: state.games,
    favoriteGames,
    addGame,
    toggleFavorite,
    rateGame,
    deleteGame
  }), [state.games, favoriteGames, addGame, toggleFavorite, rateGame, deleteGame]);

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider; 