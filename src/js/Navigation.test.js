import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

it('renders without crashing', () => {
  shallow(<Navigation />);
});

it('renders 4 tabs', () => {
  const wrapper = shallow(<Navigation />);
  expect(wrapper.find('.tab').length === 4).toBe(true);
});