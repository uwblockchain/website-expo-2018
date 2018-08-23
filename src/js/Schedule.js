import React from 'react';
import { Image, Media } from 'react-bootstrap';
import cube from '../img/cube.png'; 
import LineTo from 'react-lineto';

const textStyle = {
  color: 'white'
}

// const leftStyle = {
//   marginLeft: '50%'
// }

const itemStyle = {
  marginRight: '50%',
  marginLeft: '35%'
}

// var switchStyling = false;

// function determineAlignment() {
//   if(switchStyling) {
//     switchStyling = false;
//   } else {
//     switchStyling = true;
//   }
//   return switchStyling;
// }

// const LeftItem = (props) => (
//   <Media style={leftStyle}>
//     <Media.Left align="middle">
//       <Image width={64} height={64} src={cube} />
//     </Media.Left>
//     <Media.Body>
//       <p style={textStyle}>{props.text}</p>
//     </Media.Body>
//   </Media>
// );

// const RightItem = (props) => (
//   <Media style={rigthStyle}>
//     <Media.Body>
//       <p style={textStyle}>{props.text}</p>
//     </Media.Body>
//     <Media.Right align="middle">
//       <Image width={64} height={64} src={cube} />
//     </Media.Right>
//   </Media>
// );

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
