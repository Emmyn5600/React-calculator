import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../components/Home';


describe('Home', () => {
    it('it should render home navbar', () => {
      const tree = renderer.create(<Home/>).toJSON();
      expect(tree).toMatchSnapshot();
    });
});