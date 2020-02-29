import React from 'react';
import { NavButton } from '../nav/Navigation';
import { Row, Col } from 'react-bootstrap';

const Footer = () => (
  <div className="container-flex footer">
    <div className="container">
      <Row className="">
        <Col md={{ span: 4, offset: 2 }} sm={6}>
          <p className="footer-text" style={{ color: 'white' }}>
            Copyright © 2018 Blockchain Society at the UW
            <br />
            info@uwblockchain.org
          </p>
        </Col>
        <Col md={4} style={{ textAlign: 'right', paddingTop: '0.05em' }} sm={6}>
          <NavButton className="footer-button" />
        </Col>
      </Row>
    </div>
  </div>
);

export default Footer;
