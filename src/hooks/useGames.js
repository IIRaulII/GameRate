import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const useGames = () => {
  const context = useContext(GameContext);
  
  if (!context) {
    throw new Error('useGames debe utilizarse dentro de un GameProvider');
  }
  
  return context;
};

export default useGames; 