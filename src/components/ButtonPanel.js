import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPannel = ({ clickHandler }) => (
  <div className="board">
    <div className="board-row">
      <Button name="AC" handleClick={clickHandler} btn="ac per" />
      <Button name="+/-" handleClick={clickHandler} btn="per" />
      <Button name="%" handleClick={clickHandler} btn="per" />
      <Button name="÷" handleClick={clickHandler} btn="ornge per" />

    </div>
    <div className="board-row">
      <Button name="7" handleClick={clickHandler} btn="ac" />
      <Button name="8" handleClick={clickHandler} />
      <Button name="9" handleClick={clickHandler} />
      <Button name="X" handleClick={clickHandler} btn="ornge" />

    </div>
    <div className="board-row">
      <Button name="4" handleClick={clickHandler} btn="ac" />
      <Button name="5" handleClick={clickHandler} />
      <Button name="6" handleClick={clickHandler} />
      <Button name="-" handleClick={clickHandler} btn="ornge" />

    </div>
    <div className="board-row">
      <Button name="1" handleClick={clickHandler} btn="ac" />
      <Button name="2" handleClick={clickHandler} />
      <Button name="3" handleClick={clickHandler} />
      <Button name="+" handleClick={clickHandler} btn="ornge" />

    </div>
    <div className="board-row">
      <Button name="0" handleClick={clickHandler} btn="zeros ac" />
      <Button name="." handleClick={clickHandler} />
      <Button name="=" handleClick={clickHandler} btn="ornge" />

    </div>

  </div>

);

ButtonPannel.propTypes = {
  clickHandler: PropTypes.func.isRequired,

};

export default ButtonPannel;
