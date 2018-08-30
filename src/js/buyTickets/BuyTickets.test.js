import React from 'react';
import { shallow } from 'enzyme';
import BuyTickets from './BuyTickets';

var wrapper;

beforeEach(() => {
  wrapper = shallow(<BuyTickets />);
});

it('renders without crashing', () => {});

it('renders the three ticket buttons', () => {
  expect(wrapper.find('.ticket').length == 3).toBe(true);
});
