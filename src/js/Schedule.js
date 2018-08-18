import React from 'react';
import { Image, Grid, Row, Col, Media } from 'react-bootstrap';
import cube from '../img/cube.png'; 

const col = {
  display: 'block',
  textAlign: 'center',
}

const body = {
  color: 'white',
  marginLeft: '150px',
}

const rightText = {
  textAlign: 'center',
}

const Schedule = () => (
  <Grid>
    <Col style={col}>
      <Row style={rightText}>
        <Image width={64} height={64} src={cube} />
        <p style={body}>Introduction</p>
      </Row>
    </Col>
  </Grid>
);

export default Schedule;
