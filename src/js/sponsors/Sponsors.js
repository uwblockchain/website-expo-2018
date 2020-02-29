import React from 'react';
import { Container, Row, Image, Col } from 'react-bootstrap';
import Contact from '../contact/Contact';
import { Element } from 'react-scroll';

const SponsorImg = ({ src, imgClass }) => (
  <Col sm={10} smOffset={1}>
    <Image
      fluid
      className={'sponsors-logo ' + imgClass}
      src={require('../../img/sponsors/' + src)}
    />
  </Col>
);

const Sponsors = () => (
  <div className="sponsors container">
    <Container>
      <Row>
        <h2 className="sponsors-title">Sponsors</h2>
        <p className="sponsors-text">
          This exposition would not be possible without
          <br />
          help from these great sponsors.
        </p>
      </Row>
      <Row className="sponsors-images">
        <Container>
          <Row>
            <Col md={6}>
              <SponsorImg src={'alfa-logo.png'} imgClass="coMotion-logo logo" />
            </Col>
            <Col md={6}>
              <SponsorImg src={'galvanize-logo.png'} imgClass="logo" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <SponsorImg
                src={'mousebelt-logo.png'}
                imgClass="coMotion-logo logo"
              />
            </Col>
            <Col md={6}>
              <SponsorImg src={'nem-logo.png'} imgClass="coMotion-logo logo" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <SponsorImg
                src={'stably-logo.png'}
                imgClass="coMotion-logo logo"
              />
            </Col>
            <Col md={6}>
              <SponsorImg
                src={'comotion-logo-white.png'}
                imgClass="coMotion-logo logo"
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <SponsorImg src={'damm-logo.png'} imgClass="coMotion-logo logo" />
            </Col>
          </Row>
        </Container>
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
        <Contact />
      </Row>
    </Container>
  </div>
);

export default Sponsors;
