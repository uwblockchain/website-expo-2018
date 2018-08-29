import React from 'react';
import { shallow } from 'enzyme';
import Speakers from './Speakers';

var wrapper;

beforeEach(() => {
  wrapper = shallow(<Speakers />);
});

it('renders without crashing', () => {});

it('renders the page header', () => {
  expect(wrapper.find('.speaker-header').length == 1).toBe(true);
});

it('renders at least one speaker', () => {
  expect(wrapper.find('.speaker').length >= 1).toBe(true);
});
