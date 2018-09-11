import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

var wrapper;

beforeEach(() => {
  wrapper = shallow(<Contact />);
});

it('renders without crashing', () => {});

it('renders the form', () => {
  expect(wrapper.find('#gform').length == 1).toBe(true);
});

it('renders the submit button', () => {
  expect(wrapper.find('#contact-form-submit').length == 1).toBe(true);
});
