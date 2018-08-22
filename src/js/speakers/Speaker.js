import React from 'react';
import { Image, Media } from 'react-bootstrap';

const Speaker = (props) => (
  <Media>
    <Media.Left>
    <Image src={props.img} />
    </Media.Left>
    <Media.Body>
      <Media.Heading>        
        {props.head}
      </Media.Heading>
      {props.body}
    </Media.Body>
  </Media>
);

export default Speaker;
