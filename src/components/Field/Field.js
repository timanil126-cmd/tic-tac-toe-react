import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FieldLayout from './FieldLayout';
import { makeMove } from '../../redux/actions';

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.handleCellClick = this.handleCellClick.bind(this);
  }

  handleCellClick(index) {
    this.props.makeMove(index);
  }

  render() {
    const { field, isGameEnded } = this.props;

    return (
      <FieldLayout field={field} onCellClick={this.handleCellClick} isGameEnded={isGameEnded} />
    );
  }
}

Field.propTypes = {
  makeMove: PropTypes.func.isRequired,
  field: PropTypes.arrayOf(PropTypes.oneOf(['', 'X', '0'])).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  field: state.field,
  isGameEnded: state.isGameEnded,
});

const mapDispatchToProps = {
  makeMove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
