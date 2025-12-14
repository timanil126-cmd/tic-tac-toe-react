import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Information from '../Information/Information';
import Field from '../Field/Field';

class GameLayout extends React.Component {
  render() {
    const { currentPlayer, isGameEnded, isDraw, field, onRestart } = this.props;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Крестики-Нолики</h1>
        <Information currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
        <Field field={field} />
        <button
          className="mt-8 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300 transform hover:-translate-y-1 shadow-lg"
          onClick={onRestart}
        >
          Начать заново
        </button>
      </div>
    );
  }
}

GameLayout.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
  field: PropTypes.arrayOf(PropTypes.oneOf(['', 'X', '0'])).isRequired,
  onRestart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
  isDraw: state.isDraw,
  field: state.field,
});

export default connect(mapStateToProps)(GameLayout);
