import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

var wrapper;

beforeEach(() => {
  wrapper = shallow(<Navigation />);
});

it('renders without crashing', () => {});

it('renders the button', () => {
  expect(wrapper.find('.button').length == 1).toBe(true);
});

it('renders the title', () => {
  expect(wrapper.find('.title').length == 1).toBe(true);
});

it('renders the date', () => {
  expect(wrapper.find('#nav-date').length == 1).toBe(true);
});
