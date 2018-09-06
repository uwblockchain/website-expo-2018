import React from 'react';
import { Row, Col, Grid, Image } from 'react-bootstrap'; 
import computerImg from '../../img/workshops/computer.png';
import biziconImg from '../../img/workshops/bizicon.png';

const styleRows={
  marginBottom: '10px'
}

const Workshops = () => (
  <div>
    <Grid>
      <Row style={{color: 'white'}}>
        <h2>Workshops</h2>
        <h4>Choose various workshops from two different tracks:</h4>
      </Row>
      <Row style={{color: 'white', textAlign: 'center'}}>
        <h3>TECHNOLOGY</h3>
      </Row>
      <Row>
        <Col md={3}>
          <Image src={computerImg} responsive width={128} heigh={128} />
        </Col>
        <Col md={3} style={{color: 'white'}}>
          <Row style={styleRows}>Cryptography</Row>
          <Row style={styleRows}>Identity on the <br /> Blockchain</Row>
          <Row>Supply chain IoT <br /> conditions</Row>
        </Col>
        <Col md={3} style={{color: 'white'}}>
          <Row style={styleRows}>Dapps</Row>
          <Row style={styleRows}>Smart Contracts</Row>
          <Row style={styleRows}>Social Media</Row>
          <Row>Paying Crypto</Row>
        </Col>
      </Row>
      <Row style={{color: 'white', textAlign: 'center'}}>
        <h3>BUSINESS</h3>
      </Row>
      <Row>
        <Col md={3}>
          <Image src={biziconImg} responsive width={128} heigh={128} />
        </Col>
        <Col md={3} style={{color: 'white'}}>
          <Row style={styleRows}>Blockchain 101</Row>
          <Row style={styleRows}>Reverse Game Theory</Row>
          <Row style={styleRows}>Tokenomics</Row>
          <Row>Legal (entity/IP)</Row>
        </Col>
        <Col md={3} style={{color: 'white'}}>
          <Row style={styleRows}>Exchanging Crypto</Row>
          <Row style={styleRows}>How to get beginners <br /> into blockchain?</Row>
          <Row style={styleRows}>Crypto Taxes</Row>
          <Row>Elections/Voting</Row>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Workshops