import React from 'react';
import renderer from 'react-test-renderer';
import Route from '../../components/Route';

describe('Route', () => {
  it('should render clickable navbar', () => {
    const tree = renderer.create(<Route />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
