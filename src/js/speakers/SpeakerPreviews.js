import React from 'react';
import { Container, Row } from 'react-bootstrap';

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

const SpeakerPreviews = ({ title, subtitle, speakers }) => (
  <div className="container-flex speaker-previews">
    <div className="container">
      <div className="speakers-title">
        <h2 style={previewTitle}>{title}</h2>
        <h4 style={previewSubTitle}>{subtitle}</h4>
      </div>
      <Container>
        <Row>{speakers}</Row>
      </Container>
    </div>
  </div>
);

export default SpeakerPreviews;
