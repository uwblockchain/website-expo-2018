import '../../css/Speakers.css';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Speaker1 from './speakers/Speaker-1';
import Speaker2 from './speakers/Speaker-2';
import Speaker3 from './speakers/Speaker-3';
import Speaker4 from './speakers/Speaker-4';
import Speaker5 from './speakers/Speaker-5';
import Speaker6 from './speakers/Speaker-6';
import Speaker7 from './speakers/Speaker-7';
import Speaker8 from './speakers/Speaker-8';



const Speakers = () => (
  <div className="container" name="speakers">
    <Row>
      <Col md={8} mdOffset={2}>
      <h1 className="speaker-header">
        SPEAKERS
      </h1>
      <Speaker1 className="speaker" />
      <Speaker2 className="speaker" />
      <Speaker3 className="speaker" />
      <Speaker4 className="speaker" />
      <Speaker5 className="speaker" />
      <Speaker6 className="speaker" />
      <Speaker7 className="speaker" />
      <Speaker8 className="speaker" />
      </Col>
    </Row>
    
  </div>
);

export default Speakers;
