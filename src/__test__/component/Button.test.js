import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../components/Button';

describe('Button', () => {
  it('should render Buttons', () => {
    const clickHandler = () => '1';
    const tree = renderer.create(<Button name="1" handleClick={clickHandler} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});