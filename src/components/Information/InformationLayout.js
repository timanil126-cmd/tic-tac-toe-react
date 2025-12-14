import React from 'react';
import PropTypes from 'prop-types';

class InformationLayout extends React.Component {
  render() {
    const { status } = this.props;

    return (
      <div className="mb-6 text-center">
        <div className="text-2xl text-white bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm border border-white/20">
          {status}
        </div>
      </div>
    );
  }
}

InformationLayout.propTypes = {
  status: PropTypes.string.isRequired,
};

export default InformationLayout;
