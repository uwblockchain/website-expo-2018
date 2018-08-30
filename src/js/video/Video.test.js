import React from 'react';
import { shallow } from 'enzyme';
import Video from './Video';

var wrapper;

beforeEach(() => {
  wrapper = shallow(<Video />);
});

it('renders without crashing', () => {});

it('renders the sub-title', () => {
  expect(wrapper.find('.video-sub-title').length === 1).toBe(true);
});

it('renders the title', () => {
  expect(wrapper.find('.video-title').length === 1).toBe(true);
});

it('renders the par', () => {
  expect(wrapper.find('.video-par').length === 1).toBe(true);
});
