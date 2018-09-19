import React from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero';

var wrapper;

beforeEach(() => {
  wrapper = shallow(<Hero />);
});

it('renders without crashing', () => {});

it('renders the hero image', () => {
  expect(wrapper.find('.hero-image').length == 1).toBe(true);
});

it('renders the hero text', () => {
  expect(wrapper.find('.hero-text').length == 1).toBe(true);
});

it('renders the title image', () => {
  expect(wrapper.find('#title-img').length == 1).toBe(true);
});

it('renders the hero tagline', () => {
  expect(wrapper.find('#hero-tagline').length == 1).toBe(true);
});

it('renders at least one hero button', () => {
  expect(wrapper.find('.btn-hero').length >= 1).toBe(true);
});

it('renders the hero bottom', () => {
  expect(wrapper.find('.hero-bottom').length == 1).toBe(true);
});
