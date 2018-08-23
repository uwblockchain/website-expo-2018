import React from 'react';
import { Image, Media, Row, Col } from 'react-bootstrap';

const jobStyle = {
  color: '#572AAF',
  paddingTop: '1em',
  fontWeight: '400',
  fontSize: 'medium',
};

const Speaker = (props) => (
    <Media className="speaker-entry">
      <Media.Left>
        <div className="speaker-image">
          <Image rounded src={props.img}/>
        </div>
      </Media.Left>
      <Media.Body>
        <Row>
          <Col md={9} mdOffset={1}>
            <Media.Heading>        
              <div className="pt-4" style={jobStyle}>{props.job}</div>
              <h2 className="speaker-name">{props.name}</h2>
            </Media.Heading>
            <div className="speaker-body">{props.body}</div>
          </Col>
        </Row>
      </Media.Body>
    </Media>
);

export default Speaker;
