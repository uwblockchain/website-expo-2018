import React from 'react';
import { shallow } from 'enzyme';
import NavTabs from './NavTabs';

var wrapper;

beforeEach(() => {
  wrapper = shallow(<NavTabs />);
});

it('renders without crashing', () => {});

it('renders 4 tabs', () => {
  expect(wrapper.find('.tab').length === 5).toBe(true);
});
