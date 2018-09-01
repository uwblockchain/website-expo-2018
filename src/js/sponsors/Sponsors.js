import React from 'react';
import { Grid, Row, Button, Image } from 'react-bootstrap';
import comotionImg from '../../img/sponsors/comotion-logo-white.png';
import galvanizeImg from '../../img/sponsors/galvanize-logo.png';

const Sponsors = () => (
  <div name="sponsors">
    <Grid>
      <Row>
        <h2>Sponsors</h2>
        <h4>This exposition would not be possible without help from these great sponsors.</h4>
      </Row>
      <Row md={2}>
        <Image src={galvanizeImg} />
        <Image src={comotionImg}/>
      </Row>
      <Row>
        <h4>
          If your company is interested in supporting this
          event, contact us at info@blockchainsocietyuw.com.
        </h4>
      </Row>
      <Row>
        <Button href="mailto:info@blockchainsocietyuw.com">LEARN MORE</Button>
      </Row>
    </Grid>
  </div>
);

export default Sponsors;
