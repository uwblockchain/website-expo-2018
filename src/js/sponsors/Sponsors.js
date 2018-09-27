import React from 'react';
import { Grid, Row, Image, Col } from 'react-bootstrap';
import comotionImg from '../../img/sponsors/comotion-logo-white.png';
import galvanizeImg from '../../img/sponsors/galvanize-logo.png';
import mousebeltLogo from '../../img/sponsors/mousebelt-logo.png';
import nemLogo from '../../img/sponsors/nem-logo.png';
import aefLogo from '../../img/sponsors/alfa-logo.png';
import Contact from '../contact/Contact';
import { Element } from 'react-scroll';

const SponsorImg = ({ src, imgClass }) => (
  <Col sm={10} smOffset={1}>
    <Image responsive className={'sponsors-logo ' + imgClass} src={src} />
  </Col>
);

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
        <Grid>
          <Row>
            <Col md={6}>
              <SponsorImg src={galvanizeImg} imgClass="logo" />
            </Col>
            <Col md={6}>
              <SponsorImg src={comotionImg} imgClass="coMotion-logo logo" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <SponsorImg src={mousebeltLogo} imgClass="coMotion-logo logo" />
            </Col>
            <Col md={6}>
              <SponsorImg src={nemLogo} imgClass="coMotion-logo logo" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <SponsorImg src={aefLogo} imgClass="coMotion-logo logo" />
            </Col>
            <Col md={6} />
          </Row>
        </Grid>
      </Row>
      <Row>
        <p className="sponsors-text">
          If your company is interested in supporting this
          <br />
          event, contact us at{' '}
          <a href="mailto:info@uwblockchain.org">
            info@uwblockchain.org or fill out the form below.
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
