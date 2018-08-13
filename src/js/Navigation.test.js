import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

var wrapper;

beforeEach(() => {
  wrapper = shallow(<Navigation />);
});

it('renders without crashing', () => {});

it('renders 4 tabs', () => {
  expect(wrapper.find('.tab').length === 4).toBe(true);
});

it('renders the button', () => {
  expect(wrapper.find('.button').length == 1).toBe(true);
});

it('renders the title', () => {
  expect(wrapper.find('.title').length == 1).toBe(true);
});

it('renders the date', () => {
  expect(wrapper.find('.date').length == 1).toBe(true);
});
