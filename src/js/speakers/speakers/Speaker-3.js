import React from 'react';
import speakerImg from '../../../img/speakers/joshua_shane.jpg';
import SpeakerPreview from '../SpeakerPreview';

const Speaker3Preview = () => (
  <SpeakerPreview 
    img={speakerImg} 
    job=
    {
      <p>CHIEF MARKETING OFFICER, <br/>LIFEID</p>
    } 
    name=
    {
      <b>Joshua Shane</b>
    }
    body=
    {
      <p>
        Over the past 25 years, Joshua has built and run marketing organizations for Silicon
        Valley startups and global Seattle tech giants. His passion is bringing technology into
        service for local, regional and global communities. Prior to being CMO at lifeID,
        Joshua was Managing Director and VP of Strategy for Viewstream, a marketing
        agency focused on “deep technology,” where he started and ran the agency’s
        Blockchain marketing practice. 
      </p>  
    }
  />
)

export default Speaker3Preview;
