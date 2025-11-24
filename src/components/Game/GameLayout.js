import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Information from '../Information/Information';
import Field from '../Field/Field';
import { store, subscribe } from '../../redux/store';
import styles from './Game.module.css';

const GameLayout = ({ onRestart }) => {
  const [gameState, setGameState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setGameState(store.getState());
    });

    return unsubscribe;
  }, []);

  return (
    <div className={styles.game}>
      <h1 className={styles.title}>Крестики-Нолики</h1>
      <Information
        currentPlayer={gameState.currentPlayer}
        isGameEnded={gameState.isGameEnded}
        isDraw={gameState.isDraw}
      />
      <Field field={gameState.field} />
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
