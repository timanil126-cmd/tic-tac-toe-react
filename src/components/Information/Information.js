import React from 'react';
import PropTypes from 'prop-types';
import InformationLayout from './InformationLayout';

class Information extends React.Component {
  render() {
    const { currentPlayer, isGameEnded, isDraw } = this.props;

    let status;

    if (isDraw) {
      status = 'Ничья';
    } else if (isGameEnded) {
      status = `Победа: ${currentPlayer}`;
    } else {
      status = `Ходит: ${currentPlayer}`;
    }

    return <InformationLayout status={status} />;
  }
}

Information.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
};

export default Information;
