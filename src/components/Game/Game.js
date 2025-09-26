import React, { useState } from 'react';
import GameLayout from './GameLayout';

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(Array(9).fill(''));

  const checkWinner = currentField => {
    for (const pattern of WIN_PATTERNS) {
      const [a, b, c] = pattern;
      if (
        currentField[a] &&
        currentField[a] === currentField[b] &&
        currentField[a] === currentField[c]
      ) {
        return currentField[a];
      }
    }
    return null;
  };

  const checkDraw = currentField => {
    const isBoardFull = currentField.every(cell => cell !== '');
    const hasWinner = checkWinner(currentField);
    return isBoardFull && !hasWinner;
  };

  const handleCellClick = index => {
    if (field[index] !== '' || isGameEnded) {
      return;
    }

    const newField = [...field];
    newField[index] = currentPlayer;
    setField(newField);

    const winner = checkWinner(newField);
    if (winner) {
      setIsGameEnded(true);
    } else if (checkDraw(newField)) {
      setIsDraw(true);
      setIsGameEnded(true);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
    }
  };

  const handleRestart = () => {
    setCurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
    setField(Array(9).fill(''));
  };

  return (
    <GameLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
      field={field}
      onCellClick={handleCellClick}
      onRestart={handleRestart}
    />
  );
};

export default Game;
