import { useEffect, useState } from 'react';
import GameLayout from './GameLayout';
import { store, subscribe, dispatch } from '../../redux/store';
import { restartGame } from '../../redux/actions';

const Game = () => {
  const [gameState, setGameState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setGameState(store.getState());
    });

    return unsubscribe;
  }, []);

  const handleRestart = () => {
    dispatch(restartGame());
  };

  return <GameLayout onRestart={handleRestart} />;
};

export default Game;
