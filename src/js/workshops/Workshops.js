import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import computerImg from '../../img/workshops/computer.png';
import biziconImg from '../../img/workshops/bizicon.png';

const styleRows = {
  marginBottom: '0.7rem',
  fontSize: '1.5rem',
  fontWeight: '100'
};

const Workshops = () => (
  <div className="container workshops">
    <Container style={{ paddingBottom: '5em', paddingTop: '5em' }}>
      <Row style={{ color: 'white' }}>
        <h2 style={{ fontWeight: '600' }}>Workshops</h2>
        <h4 className="workshop-description">
          Workshops are extended interactive sessions with professionals
          designed to <br />
          facilitate learning opportunities and skill development. <br />
          <br />
          Choose various workshops from two different tracks:
        </h4>
      </Row>
      <Row style={{ color: 'white', fontWeight: '600', paddingTop: '1.5em' }}>
        <Col xs={4} smOffset={5} xsOffset={1}>
          <h3
            style={{
              marginLeft: '-3rem',
              fontWeight: '600',
              paddingBottom: '0.5em'
            }}
          >
            TECHNOLOGY
          </h3>
        </Col>
      </Row>
      <Row>
        <Col sm={3} xs={4} xsOffset={0} smOffset={2}>
          <Image src={computerImg} responsive width={128} heigh={128} />
        </Col>
        <Col sm={3} xs={4} style={{ color: 'white' }}>
          <Row style={styleRows}>Cryptography</Row>
          <Row style={styleRows}>
            <p>
              Identity on the <br /> Blockchain
            </p>
          </Row>
          <Row style={styleRows}>
            Supply chain IoT <br /> conditions
          </Row>
        </Col>
        <Col sm={2} xs={3} style={{ color: 'white' }}>
          <Row style={styleRows}>Dapps</Row>
          <Row style={styleRows}>Smart Contracts</Row>
          <Row style={styleRows}>Social Media</Row>
          <Row style={styleRows}>Paying Crypto</Row>
        </Col>
      </Row>
      <Row
        style={{ color: 'white', paddingTop: '1.5em', paddingBottom: '0.5em' }}
      >
        <Col xs={4} smOffset={5} xsOffset={1}>
          <h3 style={{ marginLeft: '-3rem', fontWeight: '600' }}>BUSINESS</h3>
        </Col>
      </Row>
      <Row>
        <Col sm={3} xs={4} xsOffset={0} smOffset={2}>
          <Image src={biziconImg} responsive width={128} heigh={128} />
        </Col>
        <Col sm={3} xs={4} style={{ color: 'white' }}>
          <Row style={styleRows}>Blockchain 101</Row>
          <Row style={styleRows}>Reverse Game Theory</Row>
          <Row style={styleRows}>Tokenomics</Row>
          <Row style={styleRows}>Legal (entity/IP)</Row>
        </Col>
        <Col sm={2} xs={3} style={{ color: 'white' }}>
          <Row style={styleRows}>Exchanging Crypto</Row>
          <Row style={styleRows}>
            How to get beginners <br /> into blockchain?
          </Row>
          <Row style={styleRows}>Crypto Taxes</Row>
          <Row style={styleRows}>Elections/Voting</Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Workshops;
