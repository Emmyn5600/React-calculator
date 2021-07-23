/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPanel';
import calculate from '../logic/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const calculation = calculate(buttonName, this.state);
    this.setState({
      total: calculation.total,
      next: calculation.next,
      operation: calculation.operation,
    });
  }

  render() {
    const { total, next } = this.state;
    return (
      <>
        <Display calculation={next || total} />
        <ButtonPannel clickHandler={(e) => this.handleClick(e.target.innerText)} />
      </>
    );
  }
}
export default App;
