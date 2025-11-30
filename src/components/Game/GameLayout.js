import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Information from '../Information/Information';
import Field from '../Field/Field';
import styles from './Game.module.css';

const GameLayout = ({ onRestart }) => {
  const { currentPlayer, isGameEnded, isDraw } = useSelector((state) => state);

  return (
    <div className={styles.game}>
      <h1 className={styles.title}>Крестики-Нолики</h1>
      <Information currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
      <Field />
      <button className={styles.restartButton} onClick={onRestart}>
        Начать заново
      </button>
    </div>
  );
};

GameLayout.propTypes = {
  onRestart: PropTypes.func.isRequired,
};

export default GameLayout;
