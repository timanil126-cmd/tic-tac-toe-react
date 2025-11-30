import { useSelector, useDispatch } from 'react-redux';
import FieldLayout from './FieldLayout';
import { makeMove } from '../../redux/actions';

const Field = () => {
  const dispatch = useDispatch();
  const { field, isGameEnded } = useSelector((state) => state);

  const handleCellClick = (index) => {
    dispatch(makeMove(index));
  };

  return <FieldLayout field={field} onCellClick={handleCellClick} isGameEnded={isGameEnded} />;
};

export default Field;
