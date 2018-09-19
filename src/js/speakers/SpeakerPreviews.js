import React from 'react';
import { Row } from 'react-bootstrap';
import Speakers from './Speakers';

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

const SpeakerPreviews = () => (
  <div className="container-flex speaker-previews">
    <div className="container">
      <div className="speakers-title">
        <h2 style={previewTitle}>Engage with blockchain professionals</h2>
        <h4 style={previewSubTitle}>
          Speakers from various industries will share <br />
          their insights.
        </h4>
      </div>
      <Row>
        <Speakers />
      </Row>
    </div>
  </div>
);

export default SpeakerPreviews;
