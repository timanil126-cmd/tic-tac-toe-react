import { ACTION_TYPES } from './actionTypes';

export const makeMove = (index) => ({
  type: ACTION_TYPES.MAKE_MOVE,
  payload: { index },
});

export const restartGame = () => ({
  type: ACTION_TYPES.RESTART_GAME,
});
