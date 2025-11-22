import { ACTION_TYPES } from './actionTypes';

export const makeMove = (index) => ({
  type: ACTION_TYPES.MAKE_MOVE,
  payload: { index },
});

export const restartGame = () => ({
  type: ACTION_TYPES.RESTART_GAME,
});

export const setWinner = (winner) => ({
  type: ACTION_TYPES.SET_WINNER,
  payload: { winner },
});

export const setDraw = (isDraw) => ({
  type: ACTION_TYPES.SET_DRAW,
  payload: { isDraw },
});
