import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    expect(shallow(<App />).html()).toMatchSnapshot();
  });
});
