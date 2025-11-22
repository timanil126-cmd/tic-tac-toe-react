import { ACTION_TYPES } from './actionTypes';
import { checkWinner, checkDraw } from '../gameLogic';

const initialState = {
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
  winner: null,
  field: Array(9).fill(''),
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.MAKE_MOVE: {
      const { index } = action.payload;

      if (state.isGameEnded || state.field[index] !== '') {
        return state;
      }
      const newField = [...state.field];
      newField[index] = state.currentPlayer;

      const winner = checkWinner(newField);
      const draw = checkDraw(newField);

      let nextPlayer = state.currentPlayer;
      if (!winner && !draw) {
        nextPlayer = state.currentPlayer === 'X' ? '0' : 'X';
      }

      return {
        ...state,
        field: newField,
        currentPlayer: nextPlayer,
        isGameEnded: !!winner || draw,
        isDraw: draw,
        winner: winner || state.winner,
      };
    }

    case ACTION_TYPES.RESTART_GAME: {
      return {
        ...initialState,
      };
    }

    case ACTION_TYPES.SET_WINNER: {
      return {
        ...state,
        winner: action.payload.winner,
        isGameEnded: true,
      };
    }

    case ACTION_TYPES.SET_DRAW: {
      return {
        ...state,
        isDraw: action.payload.isDraw,
        isGameEnded: action.payload.isDraw,
      };
    }

    default: {
      return state;
    }
  }
};
