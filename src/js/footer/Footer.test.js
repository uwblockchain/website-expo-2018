import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

var wrapper;

beforeEach(() => {
  wrapper = shallow(<Footer />);
});

it('renders without crashing', () => {});

it('renders the footer', () => {
  expect(wrapper.find('.footer').length == 1).toBe(true);
});

it('renders the footer text', () => {
  expect(wrapper.find('.footer-text').length == 1).toBe(true);
});

it('renders the footer button', () => {
  expect(wrapper.find('.footer-button').length == 1).toBe(true);
});
