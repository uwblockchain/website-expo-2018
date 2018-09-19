import React from 'react';
import { Row, Col } from 'react-bootstrap';

const WhyAttend = () => (
  <div className="container">
    <Row>
      <h1 className="attend-title">Why Attend?</h1>
      <Col sm={8} style={{ paddingLeft: '0' }}>
        <p className="attend-description">
          <b>Not your everyday blockchain event. </b>
          Created by students with professional industry mentors, the
          expositions goals are education and access, not profits. We have
          designed a day of interactive programming that is a fresh take on the
          exploration of blockchain. Don’t miss an opportunity to meet
          likeminded people, learn new concepts and leave armed with the tools
          to find your blockchain path.
        </p>
      </Col>
    </Row>
  </div>
);

export default WhyAttend;
