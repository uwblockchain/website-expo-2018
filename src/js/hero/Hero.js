import React from 'react';
import { Row, Image, Col, Container } from 'react-bootstrap';
import heroBG from '../../img/heroBG-2.png';
import title from '../../img/Title.png';
import { Link } from 'react-scroll';

const Hero = () => (
  <div className="container-flex">
    <Image src={heroBG} responsive className="hero-image" />
    <div className="text-center hero-text">
      <Container>
        <Row>
          <Col lg={8} lgOffset={2}>
            <img
              className="img-responsive"
              id="title-img"
              src={title}
              alt="title"
            />
            <h4 id="hero-tagline">
              Connecting students and industry in blockchain
            </h4>
            <Link to="speaker-previews" smooth={true} className="btn btn-hero">
              Learn More
            </Link>
            <a
              href="https://www.eventbrite.com/e/uw-blockchain-expo-tickets-47000447604"
              target="#"
              className="btn btn-hero btn-purple"
            >
              Get Tickets
            </a>
          </Col>
        </Row>
        <Row className="hero-bottom">
          <Col lg={6} lgOffset={6}>
            <h1 className="hero-bottom-title">About the Expo</h1>
            <h4 className="hero-bottom-text">
              The UW Blockchain Society connects students and blockchain
              industry professionals to provide opportunities for education,
              innovation, and employment. The UW Blockchain Expo will host
              expert speakers, and offer two tracks of educational workshops by
              industry professionals with expertise in a variety of disciplines.
              They will share their experiences, insights, and the projects they
              are currently working on. The UW blockchain expo provides
              unrivaled value for the minimal amount of investment. An
              opportunity to enjoy a new type of blockchain experience where you
              not only learn new skills and make connections, but leave
              energized having spent the day with enthusiastic students on one
              of Americas best university campuses.
            </h4>
            <a
              href="https://www.eventbrite.com/e/uw-blockchain-expo-tickets-47000447604"
              target="#"
              className="btn btn-hero btn-purple"
              style={{ marginLeft: '0em' }}
            >
              GET TICKETS
            </a>
            <Link to="contact" smooth={true} className="btn btn-hero">
              CONTACT US
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Hero;
