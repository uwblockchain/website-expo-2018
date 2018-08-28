import React from 'react';
import { render } from 'enzyme';
import Speaker1 from './speakers/Speaker-1'; //Using the first speaker as a test

var wrapper;

beforeEach(() => {
  wrapper = render(<Speaker1 />);
});

it('renders without crashing', () => {});

it('renders the image', () => {
  expect(wrapper.find('.speaker-image').length == 1).toBe(true);
});

it('renders the icons', () => {
  expect(wrapper.find('.speaker-icons').length == 2).toBe(true);
});

it('renders the name', () => {
  expect(wrapper.find('.speaker-name').length == 1).toBe(true);
});

it('renders the body', () => {
  expect(wrapper.find('.speaker-body').length == 1).toBe(true);
});
