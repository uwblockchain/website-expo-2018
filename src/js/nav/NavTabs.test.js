import React from 'react';
import { shallow } from 'enzyme';
import NavTabs from './NavTabs';

var wrapper;

beforeEach(() => {
  wrapper = shallow(<NavTabs />);
});

it('renders without crashing', () => {});

it('renders at least 1 tab', () => {
  expect(wrapper.find('#nav-text').length >= 1).toBe(true);
});
