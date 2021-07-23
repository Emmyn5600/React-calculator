import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ value }) => <div className="display-value">{value}</div>;

Display.defaultProps = {
  value: '0',
};

Display.propTypes = {
  value: PropTypes.string,
};

export default Display;