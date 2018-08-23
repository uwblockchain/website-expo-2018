import React from 'react';
import { shallow } from 'enzyme';
import Schedule from './Schedule';

var wrapper;

beforeEach(() => {
  wrapper = shallow(<Schedule />);
});

it('renders without crashing', () => {});

it('renders 10 items', () => {
  expect(wrapper.find('.item').length === 10).toBe(true);
});

it('renders the line', () => {
  expect(wrapper.find('.line').length === 1).toBe(true);
});
