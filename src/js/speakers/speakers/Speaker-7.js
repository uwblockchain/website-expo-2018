import React from 'react';
import speakerImg from '../../../img/speakers/david-ritter.jpg';
import SpeakerPreview from '../SpeakerPreview';

const Speaker7Preview = () => (
  <SpeakerPreview
    img={speakerImg}
    job={
      <p>
        CEO, <br />
        PENTA GLOBAL BLOCKCHAIN FOUNDATION
      </p>
    }
    name={<b>David Ritter</b>}
    body={
      <p>
        David Ritter is the CEO of Penta Global Blockchain Foundation. Mr.
        Ritter received his degree in financial and sociopolitical history from
        the University of Southern California. Fluent in Chinese and French, he
        spent ten years in private equity, working on fund management and
        cross-border investment. He served as Project Director at DGI, where he
        managed a variety of fund projects with a portfolio value of more than 1
        billion (USD). Mr. Ritter was an early-phase investor of Bitcoin, and
        has served in an advisory capacity to many projects in the blockchain
        space. Penta recently became the first project to use a token to
        purchase shares of a publicly traded company, on the ASX exchange.
      </p>
    }
    linkedIn="https://www.linkedin.com/in/davidritter1984boulder/"
    email="dritter@penta.global"
  />
);

export default Speaker7Preview;
