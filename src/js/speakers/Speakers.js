import '../../css/Speakers.css';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Speaker1 from './Speaker-1';
import Speaker2 from './Speaker-2';
import Speaker3 from './Speaker-3';

const Speakers = () => (
  <div className="container">
    <Row>
      <Col md={8} mdOffset={2}>
      <h1 className="speaker-header">
        SPEAKERS
      </h1>
      <Speaker1 className="speaker" />
      <Speaker2 className="speaker" />
      <Speaker3 className="speaker" />
      </Col>
    </Row>
    
  </div>
);

export default Speakers;
