import React from 'react';
import { Image, Media } from 'react-bootstrap';

const jobStyle = {
  color: 'blue',
};

const Speaker = (props) => (
  <Media>
    <Media.Left>
    <Image rounded src={props.img} />
    </Media.Left>
    <Media.Body>
      <Media.Heading>        
        <div style={jobStyle}>{props.job}</div>
        {props.name}
      </Media.Heading>
      {props.body}
    </Media.Body>
  </Media>
);

export default Speaker;
