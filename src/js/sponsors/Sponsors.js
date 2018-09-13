import React from 'react';
import { Grid, Row, Image, Col } from 'react-bootstrap';
import comotionImg from '../../img/sponsors/comotion-logo-white.png';
import galvanizeImg from '../../img/sponsors/galvanize-logo.png';
import mousebeltLogo from '../../img/sponsors/mousebelt-logo.jpeg';
import nemLogo from '../../img/sponsors/nem-logo.png';
import Contact from '../contact/Contact';
import { Element } from 'react-scroll';

const SponsorImg = ({ src, imgClass }) => (
  <Col md={3}>
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
        <SponsorImg src={galvanizeImg} />
        <SponsorImg src={comotionImg} imgClass="coMotion-logo" />
        <SponsorImg src={mousebeltLogo} imgClass="coMotion-logo" />
        <SponsorImg src={nemLogo} imgClass="coMotion-logo" />
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
