import { WIN_PATTERNS } from '../constants';

export const checkWinner = (currentField) => {
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

export const checkDraw = (currentField) => {
  const isBoardFull = currentField.every((cell) => cell !== '');
  const hasWinner = checkWinner(currentField);
  return isBoardFull && !hasWinner;
};
