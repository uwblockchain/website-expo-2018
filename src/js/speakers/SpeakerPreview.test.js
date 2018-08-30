import React from 'react';
import { render } from 'enzyme';
import speakerImg from '../../img/speakers/ahmad-alkabra.jpg';
import SpeakerPreview from './SpeakerPreview';

var wrapper;

const SpeakerPreviewTest = () => (
  <SpeakerPreview 
  img={speakerImg}
  job=
  {
    <p>TEST JOB, <br />TEST ORGANIZATION</p>
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
);

beforeEach(() => {
  wrapper = render(<SpeakerPreviewTest />);
});

it('renders without crashing', () => {});

it('renders the name', () => {
  expect(wrapper.find('.speaker-preview-name').length === 1).toBe(true);
});

it('renders the job', () => {
  expect(wrapper.find('.speaker-preview-job').length === 1).toBe(true);
});
