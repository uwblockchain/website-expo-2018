import React from 'react';
import speakerImg from '../../../img/speakers/james-gan.jpeg';
import SpeakerPreview from '../SpeakerPreview';

const Speaker6Preview = () => (
  <SpeakerPreview
    img={speakerImg}
    job={
      <p>
        PROGRAM MANAGER, <br />
        SRND
      </p>
    }
    name={<b>James Gan</b>}
    body={
      <p>
        James Gan is a Program Manager at SRND, and an incoming Masters student
        at the University of Washington who graduated with a Bachelors from
        Cornell University in 2018. He has taught various workshops on
        Blockchain technologies, covering theory and development. As a student
        at Cornell, James researched the Bancor Network. Since arriving in
        Seattle, he has organized Blockchain events, including one funded by a
        Tezos Commons Foundation Grant.
      </p>
    }
  />
);

export default Speaker6Preview;
