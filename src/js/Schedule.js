import React from 'react';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import cube from '../img/cube.png'; 

const col = {
  display: 'block',
  textAlign: 'center',
};

const leftAlign = {
  color: 'white',
  marginLeft: '150px',
};

const rightAlign = {
  color: 'white',
  marginRight: '150px',
}

const rightText = {
  textAlign: 'center',
};

var switchStyling = false;

function handleStyling() {
  var out;
  if(switchStyling) {
    switchStyling = false;
    out = rightAlign;
  } else {
    switchStyling = true;
    out = leftAlign;
  }
  return out;
};

const Item = (props) => (
  <Row style={rightText}>
    <Image width={64} height={64} src={cube} />
    <p style={handleStyling()}>{props.text}</p>
  </Row>
);

const Schedule = () => (
  <Grid>
    <Col style={col}>
      <Item text="Introduction" />
      <Item text="Ethics of Blockchain" />
      <Item text="Investment Panel" />
      <Item text="Panel: Diversity in Blockchain" />
      <Item text="Debate: 'Is Bitcoin a Fad'" />
      <Item text="Speaker: 'Reinventing Customer Loyalty'" />
      <Item text="Food Provenance" />
      <Item text="Big Panel: 'Cryptos'" />
      <Item text="Keynote TBD" />
      <Item text="Closing Remarks" />
    </Col>
  </Grid>
);

export default Schedule;
