import React from 'react';
import { Image, Media } from 'react-bootstrap';
import cube from '../img/cube.png'; 
import LineTo from 'react-lineto';

const textStyle = {
  // color: 'white',
  marginLeft: '70%'
}

const itemStyle = {
  width: '50%',
  marginRight: 'auto',
  marginBottom: '8em'
}

const Item = (props) => (
  <Media style={itemStyle}>
    <Media.Body align="middle">
      <p style={textStyle}>{props.text}</p>
    </Media.Body>
    <Media.Right>
      <Image className={props.classImg} width={64} height={64} src={cube} />
    </Media.Right>
  </Media>
);

const start = "schedule-start";
const end = "schedule-end";

const Schedule = () => (
  <div name="schedule">
    <Item className="item" text="Introduction" classImg={start} />
    <Item className="item" text="Ethics of Blockchain" />
    <Item className="item" text="Investment Panel" />
    <Item className="item" text="Panel: Diversity in Blockchain" />
    <Item className="item" text="Debate: 'Is Bitcoin a Fad'" />
    <Item className="item" text="Speaker: 'Reinventing Customer Loyalty'" />
    <Item className="item" text="Food Provenance" />
    <Item className="item" text="Big Panel: 'Cryptos'" />
    <Item className="item" text="Keynote TBD" />
    <Item className="item" text="Closing Remarks" classImg={end} />
    <LineTo className="line" from={start} to={end} borderColor="black" borderWidth={3} zIndex={-1} delay={200} />
  </div>
);

export default Schedule;
