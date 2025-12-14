import React from 'react';
import PropTypes from 'prop-types';

class FieldLayout extends React.Component {
  render() {
    const { field, onCellClick, isGameEnded } = this.props;

    return (
      <div className="grid grid-cols-3 gap-2 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
        {field.map((cell, index) => (
          <button
            key={index}
            className={`
              w-24 h-24 text-5xl font-bold rounded-lg transition-all duration-300
              ${cell ? (cell === 'X' ? 'text-red-500' : 'text-cyan-400') : 'text-gray-300'}
              ${cell ? 'bg-white/90 hover:bg-white' : 'bg-white/80 hover:bg-white hover:scale-105'}
              disabled:cursor-not-allowed disabled:opacity-80
            `}
            onClick={() => onCellClick(index)}
            disabled={cell !== '' || isGameEnded}
          >
            {cell}
          </button>
        ))}
      </div>
    );
  }
}

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.oneOf(['', 'X', '0'])).isRequired,
  onCellClick: PropTypes.func.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
};

export default FieldLayout;
