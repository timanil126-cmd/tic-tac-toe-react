import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameLayout from './GameLayout';
import { restartGame } from '../../redux/actions';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleRestart = this.handleRestart.bind(this);
  }

  handleRestart() {
    this.props.dispatch(restartGame());
  }

  render() {
    return <GameLayout onRestart={this.handleRestart} />;
  }
}

Game.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Game);
