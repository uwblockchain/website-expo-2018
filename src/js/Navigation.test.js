import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navigation />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders 4 tabs', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navigation />, div);
  expect(div.querySelectorAll('.tab').length === 4).toBe(true);
});