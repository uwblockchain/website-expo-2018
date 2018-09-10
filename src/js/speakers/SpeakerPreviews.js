import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {
  Speaker1Preview,
  Speaker2Preview,
  Speaker3Preview,
  Speaker4Preview,
  Speaker5Preview,
  Speaker6Preview,
  Speaker7Preview,
  Speaker8Preview
} from './Speakers';

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
        <Col md={4} xs={6} id="col">
          <Speaker1Preview />
        </Col>
        <Col md={4} xs={6} id="col">
          <Speaker2Preview />
        </Col>
        <Col md={4} xs={6} id="col">
          <Speaker3Preview />
        </Col>

        <Col md={4} xs={6} id="col">
          <Speaker4Preview />
        </Col>
        <Col md={4} xs={6} id="col">
          <Speaker5Preview />
        </Col>
        <Col md={4} xs={6} id="col">
          <Speaker6Preview />
        </Col>
        <Col md={4} xs={6} id="col">
          <Speaker7Preview />
        </Col>
        <Col md={4} xs={6} id="col">
          <Speaker8Preview />
        </Col>
        <Col md={4} xs={6} id="col" />
      </Row>
    </div>
  </div>
);

export default SpeakerPreviews;
