import React from 'react';
import { Image, Media } from 'react-bootstrap';
import cube from '../img/cube.png'; 
import LineTo from 'react-lineto';

const textStyle = {
  color: 'white'
}

const itemStyle = {
  marginRight: '50%',
  marginLeft: '35%'
}

const Item = (props) => (
  <Media style={itemStyle}>
    <Media.Body align="middle">
      <p style={textStyle}>{props.text}</p>
    </Media.Body>
    <Media.Right>
      <Image className={props.classImg}width={64} height={64} src={cube} />
    </Media.Right>
  </Media>
);

const Schedule = () => (
  <div>
    <Item text="Introduction" classImg="start" />
    <Item text="Ethics of Blockchain" />
    <Item text="Investment Panel" />
    <Item text="Panel: Diversity in Blockchain" />
    <Item text="Debate: 'Is Bitcoin a Fad'" />
    <Item text="Speaker: 'Reinventing Customer Loyalty'" />
    <Item text="Food Provenance" />
    <Item text="Big Panel: 'Cryptos'" />
    <Item text="Keynote TBD" />
    <Item text="Closing Remarks" classImg="end" />
    <LineTo from="start" to="end" borderColor="white" borderWidth={3} zIndex={-1} delay={0} />
  </div>
);

export default Schedule;
