import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FieldLayout from './FieldLayout';
import { store, subscribe, dispatch } from '../../redux/store';
import { makeMove } from '../../redux/actions';

const Field = ({ field }) => {
  const [gameState, setGameState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setGameState(store.getState());
    });

    return unsubscribe;
  }, []);

  const handleCellClick = (index) => {
    dispatch(makeMove(index));
  };

  return (
    <FieldLayout
      field={field}
      onCellClick={handleCellClick}
      isGameEnded={gameState.isGameEnded}
    />
  );
};

Field.propTypes = {
  field: PropTypes.arrayOf(PropTypes.oneOf(['', 'X', '0'])).isRequired,
};

export default Field;
