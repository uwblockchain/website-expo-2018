import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

const jobStyle = {
  color: '#C86DD7',
  paddingTop: '0.7em',
  fontWeight: '400',
  fontSize: 'medium'
};

const SpeakerModalContent = ({
  btn,
  img,
  name,
  body,
  job,
  icons,
  email,
  linkedIn,
  twitter
}) => (
  <Row className="speaker-entry">
    <Col sm={4}>
      {btn}
      <div className="speaker-image">
        <Image rounded responsive src={img} />
      </div>
    </Col>
    <Col sm={8}>
      <div>
        <div className="pt-4" style={jobStyle}>
          {job}
        </div>
        <h2 className="speaker-name">{name}</h2>
      </div>
      <div className="speaker-body">{body}</div>
      {icons}
      <div className="speaker-icons">
        {linkedIn !== undefined ? (
          <a href={linkedIn}>
            <i className="fab fa-linkedin" />
          </a>
        ) : null}
        {email !== undefined ? (
          <a href={'mailto:' + email}>
            <i className="fas fa-envelope" />
          </a>
        ) : null}
        {twitter !== undefined ? (
          <a href={twitter}>
            <i className="fab fa-twitter" />
          </a>
        ) : null}
      </div>
    </Col>
  </Row>
);

export default SpeakerModalContent;
