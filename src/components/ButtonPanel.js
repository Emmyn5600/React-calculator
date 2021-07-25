import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPannel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { clickHandler } = this.props;
    return (
      <div className="board">
        <div className="board-row">
          <Button name="AC" handleClick={clickHandler} />
          <Button name="+/-" handleClick={clickHandler} />
          <Button name="%" handleClick={clickHandler} />
          <Button name="÷" handleClick={clickHandler} />

        </div>
        <div className="board-row">
          <Button name="7" handleClick={clickHandler} />
          <Button name="8" handleClick={clickHandler} />
          <Button name="9" handleClick={clickHandler} />
          <Button name="X" handleClick={clickHandler} />

        </div>
        <div className="board-row">
          <Button name="4" handleClick={clickHandler} />
          <Button name="5" handleClick={clickHandler} />
          <Button name="6" handleClick={clickHandler} />
          <Button name="-" handleClick={clickHandler} />

        </div>
        <div className="board-row">
          <Button name="1" handleClick={clickHandler} />
          <Button name="2" handleClick={clickHandler} />
          <Button name="3" handleClick={clickHandler} />
          <Button name="+" handleClick={clickHandler} />

        </div>
        <div className="board-row">
          <Button name="0" handleClick={clickHandler} />
          <Button name="." handleClick={clickHandler} />
          <Button name="=" handleClick={clickHandler} />

        </div>

      </div>

    );
  }
}

ButtonPannel.propTypes = {
  clickHandler: PropTypes.func.isRequired,

};
export default ButtonPannel;
