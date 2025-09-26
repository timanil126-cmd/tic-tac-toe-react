import PropTypes from 'prop-types';
import Information from '../Information/Information';
import Field from '../Field/Field';
import styles from './Game.module.css';

// prettier-ignore
const GameLayout = ({ currentPlayer, isGameEnded, isDraw, field, onCellClick, onRestart }) => {
  return (
    <div className={styles.game}>
      <h1 className={styles.title}>Крестики-Нолики</h1>
      <Information currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
      <Field field={field} onCellClick={onCellClick} />
      <button className={styles.restartButton} onClick={onRestart}>
        Начать заново
      </button>
    </div>
  );
};

GameLayout.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
  field: PropTypes.arrayOf(PropTypes.oneOf(['', 'X', '0'])).isRequired,
  onCellClick: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
};

export default GameLayout;
