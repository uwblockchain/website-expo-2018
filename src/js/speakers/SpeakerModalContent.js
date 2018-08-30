import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

const jobStyle = {
  color: '#C86DD7',
  paddingTop: '0.7em',
  fontWeight: '400',
  fontSize: 'medium',
};

const SpeakerModalContent = (props) => (
    <Row className="speaker-entry">
      <Col sm={4}>
        {props.btn}
        <div className="speaker-image">
          <Image rounded responsive src={props.img}/>
        </div>
      </Col>
      <Col sm={8}>
        <div>        
          <div className="pt-4" style={jobStyle}>{props.job}</div>
          <h2 className="speaker-name">{props.name}</h2>
        </div>
        <div className="speaker-body">{props.body}</div>
        <div className="speaker-icons">
          <a className="fab fa-linkedin" href={props.linkedIn}></a>
          <a className="fas fa-envelope" href={"mailto:" + props.email}></a>
        </div>
      </Col>
    </Row>
);

export default SpeakerModalContent;
