import React from 'react';
import { shallow } from 'enzyme';
import BuyTicketCard from './BuyTicketCard';

var wrapper;

beforeEach(() => {
  wrapper = shallow(<BuyTicketCard title="Students" price="$5" fee="$2.00" />);
});

it('renders without crashing', () => {});

it('renders the title', () => {
  expect(wrapper.find('.card-title').length == 1).toBe(true);
});

it('renders the price', () => {
  expect(wrapper.find('.card-price').length == 1).toBe(true);
});

it('renders the fee', () => {
  expect(wrapper.find('.card-fee').length == 1).toBe(true);
});

it('renders the button', () => {
  expect(wrapper.find('.card-button').length == 1).toBe(true);
});
