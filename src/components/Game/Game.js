import { useSelector, useDispatch } from 'react-redux';
import GameLayout from './GameLayout';
import { restartGame } from '../../redux/actions';

const Game = () => {
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(restartGame());
  };

  return <GameLayout onRestart={handleRestart} />;
};

export default Game;
