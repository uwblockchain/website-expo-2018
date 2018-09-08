import React from 'react';
import { Grid, Row, Image, Col } from 'react-bootstrap';
import comotionImg from '../../img/sponsors/comotion-logo-white.png';
import galvanizeImg from '../../img/sponsors/galvanize-logo.png';
import Contact from '../contact/Contact';
import { Element } from 'react-scroll';

const Sponsors = () => (
  <div className="sponsors container">
    <Grid>
      <Row>
        <h2 className="sponsors-title">Sponsors</h2>
        <p className="sponsors-text">
          This exposition would not be possible without
          <br />
          help from these great sponsors.
        </p>
      </Row>
      <Row className="sponsors-images">
        <Col md={6}>
          <Image responsive className="sponsors-logo" src={galvanizeImg} />
        </Col>
        <Col md={6}>
          <Image
            responsive
            className="sponsors-logo coMotion-logo"
            src={comotionImg}
          />
        </Col>
      </Row>
      <Row>
        <p className="sponsors-text">
          If your company is interested in supporting this
          <br />
          event, contact us at{' '}
          <a href="mailto:info@blockchainsocietyuw.com">
            info@blockchainsocietyuw.com or fill out the form below.
          </a>
        </p>
      </Row>
      <Row>
        <Element name="contact">
          <Contact />
        </Element>
      </Row>
    </Grid>
  </div>
);

export default Sponsors;
