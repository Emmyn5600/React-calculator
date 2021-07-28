/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, handleClick, btn } = props;

  return (

    <button type="button" name={name} onClick={handleClick} className={btn}>

      {name}

    </button>
  );
};

Button.propTypes = {

  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
