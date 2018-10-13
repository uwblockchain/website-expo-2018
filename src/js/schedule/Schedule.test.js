import React from 'react';
import { shallow } from 'enzyme';
import Schedule from './Schedule';

var wrapper;

beforeEach(() => {
  wrapper = shallow(<Schedule />);
});

it('renders without crashing', () => {});

it('renders at least one item', () => {
  expect(wrapper.find('Image').length >= 1).toBe(true);
});
