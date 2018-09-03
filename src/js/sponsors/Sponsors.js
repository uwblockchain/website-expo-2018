import React from 'react';
import { Grid, Row, Button, Image, Col } from 'react-bootstrap';
import comotionImg from '../../img/sponsors/comotion-logo-white.png';
import galvanizeImg from '../../img/sponsors/galvanize-logo.png';

const Sponsors = () => (
  <div name="sponsors" className="sponsors">
    <Grid>
      <Row>
        <h2 className="sponsors-title">Sponsors</h2>
        <p className="sponsors-text">This exposition would not be possible without<br/>help from these great sponsors.</p>
      </Row>
      <Row >
        <Col md={6}>
          <Image className="sponsors-logo" src={galvanizeImg} />
        </Col>
        <Col md={6}>
          <Image className="sponsors-logo coMotion-logo" src={comotionImg}/>
        </Col>
      </Row>
      <Row>
        <p className="sponsors-text">
          If your company is interested in supporting this<br/>
          event, contact us at <a href="mailto:info@blockchainsocietyuw.com">info@blockchainsocietyuw.com</a>.
        </p>
      </Row>
      <Row>
        <a className="btn btn-default" href="mailto:info@blockchainsocietyuw.com">LEARN MORE</a>
      </Row>
    </Grid>
  </div>
);

export default Sponsors;
