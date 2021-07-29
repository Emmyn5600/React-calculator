import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../../components/Quote';

describe('Quote', () => {
  it('it should render Quote page', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
