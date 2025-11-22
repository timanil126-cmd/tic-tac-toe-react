import { useEffect, useState } from 'react';
import GameLayout from './GameLayout';
import { subscribe, getState, dispatch } from '../../redux/store';
import { makeMove, restartGame } from '../../redux/actions';

const Game = () => {
  const [gameState, setGameState] = useState(getState());

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setGameState(getState());
    });

    return unsubscribe;
  }, []);

  const handleCellClick = (index) => {
    dispatch(makeMove(index));
  };

  const handleRestart = () => {
    dispatch(restartGame());
  };

  return (
    <GameLayout
      currentPlayer={gameState.currentPlayer}
      isGameEnded={gameState.isGameEnded}
      isDraw={gameState.isDraw}
      field={gameState.field}
      onCellClick={handleCellClick}
      onRestart={handleRestart}
    />
  );
};

export default Game;
