import React from 'react';
import { render } from 'enzyme';
import Speaker from './Speaker';
import speakerImg from '../../img/speakers/ahmad-alkabra.jpg';
 
const SpeakerTest = () => (
  <Speaker 
    img={speakerImg}
    job=
    {
      <p>TEST JOB</p>
    } 
    name=
    {
      <b>TEST NAME</b>
    }
    body=
    {
      <p>
        TEST BODY
      </p>  
    } 
  />  
)

var wrapper;

beforeEach(() => {
  wrapper = render(<SpeakerTest />);
});

it('renders without crashing', () => {});

it('renders the image', () => {
  expect(wrapper.find('.speaker-image').length == 1).toBe(true);
});

it('renders the icons', () => {
  expect(wrapper.find('.speaker-icons').length == 1).toBe(true);
});

it('renders the name', () => {
  expect(wrapper.find('.speaker-name').length == 1).toBe(true);
});

it('renders the body', () => {
  expect(wrapper.find('.speaker-body').length == 1).toBe(true);
});
