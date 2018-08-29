import React from 'react';
import speakerImg from '../../../img/speakers/soumya-basu.jpg';
import Speaker from '../Speaker';
import SpeakerPreview from '../SpeakerPreview';

const Speaker4 = () => (
  <Speaker 
    img={speakerImg} 
    job=
    {
      <p>GRADUATE STUDENT, <br/>CORNELL</p>
    } 
    name=
    {
      <b>Soumya Basu</b>
    } 
    body=
    {
      <p>
        Currently, he is a graduate student at Cornell working on the systems aspect of blockchain technologies. 
        His projects include measuring and building infrastructure to make public cryptocurrencies faster, exploring 
        different security needs for users of blockchain technologies, and examining the economics of transaction fees. 
        He built the Falcon Network to speed up public blockchains. He is advised by the renowned Emin Gün Sirer.
      </p>  
    }
  /> 
);

export const Speaker4Preview = () => (
  <SpeakerPreview 
    img={speakerImg} 
    job=
    {
      <p>GRADUATE STUDENT, <br/>CORNELL</p>
    } 
    name=
    {
      <b>Soumya Basu</b>
    }
  />
)

export default Speaker4;
