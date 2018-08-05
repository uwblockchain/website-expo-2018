import React from 'react';
import speakerImg from '../../img/joshua_shane.jpg';

const Speaker3 = () => (
  <div className="speaker">
    <img src={speakerImg} alt="Speaker 1"/>
    <div className="text">
      <div className="occupation">
        <h3>
          Chief Marketing Officer,
          <br />
          lifeID
        </h3>
      </div>
      <div className="name">
        <h2>
          Joshua Shane
        </h2>
      </div>
      <div className="description">
        Over the past 25 years, Joshua has built and run marketing organizations for Silicon
        Valley startups and global Seattle tech giants. His passion is bringing technology into
        service for local, regional and global communities. Prior to being CMO at lifeID,
        Joshua was Managing Director and VP of Strategy for Viewstream, a marketing
        agency focused on “deep technology,” where he started and ran the agency’s
        Blockchain marketing practice.
      </div>
    </div>
  </div>

);

export default Speaker3;
