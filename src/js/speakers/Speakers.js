import React from 'react';
import { Element } from 'react-scroll';
import SpeakerWorkshopPreviews from './SpeakerWorkshopPreviews';
import SpeakerPanelPreviews from './SpeakerPanelPreviews';

const previewTitle = {
  fontWeight: 700,
  color: 'white',
  lineHeight: 1.5
};

const previewSubTitle = {
  fontWeight: 400,
  color: 'white',
  lineHeight: 1.5
};

const Speakers = () => (
  <div>
    <div className="container-flex speaker-previews">
      <div className="container">
        <div className="speakers-title">
          <h1 style={previewTitle}>Engage with blockchain professionals</h1>
          <h3 style={previewSubTitle}>
            Speakers from various industries will share <br />
            their insights.
          </h3>
        </div>
      </div>
    </div>
    <Element name="speaker-previews">
      <SpeakerPanelPreviews />
    </Element>
    <SpeakerWorkshopPreviews />
  </div>
);

export default Speakers;
