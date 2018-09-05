import React from 'react';
import { shallow } from 'enzyme';
import Video from './Video';

var wrapper;

beforeEach(() => {
  wrapper = shallow(<Video />);
});

it('renders without crashing', () => {});
