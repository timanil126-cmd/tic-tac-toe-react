import PropTypes from 'prop-types';
import styles from './Field.module.css';

const FieldLayout = ({ field, onCellClick, isGameEnded }) => {
  return (
    <div className={styles.field}>
      {field.map((cell, index) => (
        <button
          key={index}
          className={`${styles.cell} ${cell ? styles[`cell${cell}`] : ''}`}
          onClick={() => onCellClick(index)}
          disabled={cell !== '' || isGameEnded}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.oneOf(['', 'X', '0'])).isRequired,
  onCellClick: PropTypes.func.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
};

export default FieldLayout;
