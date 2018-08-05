import React from 'react';
import speakerImg from '../../img/mark_cooley.jpg';

const Speaker2 = () => (
  <div className="speaker">
    <img src={speakerImg} alt="Speaker 1"/>
    <div className="text">
      <div className="occupation">
        <h3>
          Blockchain Strategist
        </h3>
      </div>
      <div className="name">
        <h2>
          Mark Cooley
        </h2>
      </div>
      <div className="description">
        Mark is a seasoned executive, consultant and educator having held various executive
        leadership positions in technology over the last 18 years. He specializes in business
        strategy and the application of blockchain technologies. He is on the founding team
        of numerous blockchain companies including lifeID, Govurn and 4Block Solutions.
        The latter of which is supporting blockchain innovation with projects across the
        community.  Mark is a speaker,  professor and advisor, supporting institutions such
        as Seattle University, University of Washington, and General Assembly. 
      </div>
    </div>
  </div>

);

export default Speaker2;
