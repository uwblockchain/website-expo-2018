import React from 'react';
import speakerImg from '../../img/joshua_shane.jpg';
import { Media } from 'react-bootstrap';

const Speaker3 = () => (
  <Media>
    <Media.Left>
      <img src={speakerImg} alt="Speaker 3"/>
    </Media.Left>
    <Media.Body>
      <Media.Heading>        
        Chief Marketing Officer,
        <br />
        lifeID
        <br />
        Joshua Shane
      </Media.Heading>
      <p>
        Over the past 25 years, Joshua has built and run marketing organizations for Silicon
        Valley startups and global Seattle tech giants. His passion is bringing technology into
        service for local, regional and global communities. Prior to being CMO at lifeID,
        Joshua was Managing Director and VP of Strategy for Viewstream, a marketing
        agency focused on “deep technology,” where he started and ran the agency’s
        Blockchain marketing practice. 
      </p>
    </Media.Body>
  </Media>
);

export default Speaker3;
