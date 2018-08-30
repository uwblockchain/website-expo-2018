import React from 'react';
import { render } from 'enzyme';
import NavTabs from './NavTabs';

var wrapper;

beforeEach(() => {
  wrapper = render(<NavTabs />);
});

it('renders without crashing', () => {});

it('renders 4 tabs', () => {
  expect(wrapper.find('#nav-text').length === 5).toBe(true);
});
