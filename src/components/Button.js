import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {name} = props;
  return (<button type="button" className="calc">{name}</button>);
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Button;