import React from 'react';
import SpeakerPreview from './SpeakerPreview';
import speaker3Img from '../../img/speakers/joshua_shane.jpg';
import speaker4Img from '../../img/speakers/soumya-basu.jpg';
import speaker6Img from '../../img/speakers/james-gan.jpeg';
import speaker9Img from '../../img/speakers/kory_hoang.jpg';
import speaker11Img from '../../img/speakers/alex_tinsman.jpg';

var keyGen = 0;

const WorkshopSpeakers = () => [
  <SpeakerPreview
    key={keyGen++}
    img={speaker3Img}
    job={
      <p>
        CHIEF MARKETING OFFICER, <br />
        LIFEID
      </p>
    }
    name={<b>Joshua Shane</b>}
    body={
      <p>
        Over the past 25 years, Joshua has built and run marketing organizations
        for Silicon Valley startups and global Seattle tech giants. His passion
        is bringing technology into service for local, regional and global
        communities. Prior to being CMO at lifeID, Joshua was Managing Director
        and VP of Strategy for Viewstream, a marketing agency focused on “deep
        technology,” where he started and ran the agency’s Blockchain marketing
        practice.
      </p>
    }
  />,
  <SpeakerPreview
    key={keyGen++}
    img={speaker6Img}
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
  />,
  <SpeakerPreview
    key={keyGen++}
    img={speaker4Img}
    job={
      <p>
        GRADUATE STUDENT, <br />
        CORNELL
      </p>
    }
    name={<b>Soumya Basu</b>}
    body={
      <p>
        Currently, he is a graduate student at Cornell working on the systems
        aspect of blockchain technologies. His projects include measuring and
        building infrastructure to make public cryptocurrencies faster,
        exploring different security needs for users of blockchain technologies,
        and examining the economics of transaction fees. He built the Falcon
        Network to speed up public blockchains. He is advised by the renowned
        Emin Gün Sirer.
      </p>
    }
    linkedIn="https://www.linkedin.com/in/soumya-basu-a31bb746/"
    email="soumya@cs.cornell.edu"
  />,
  <SpeakerPreview
    key={keyGen++}
    img={speaker9Img}
    job={
      <p>
        CO-FOUNDER AND CEO, <br />
        STABLY
      </p>
    }
    name={<b>Kory Hoang</b>}
    body={
      <p>
        Prior to founding Stably, Kory was a Private Equity Data Analyst for
        PitchBook in Seattle. Kory is also a quant who has consulted for money
        managers, hedge funds and CTAs on many subjects ranging from VIX
        derivatives to cryptocurrencies and algorithmic trading. In addition, he
        is currently a board advisor at Strix Leviathan, a Seattle FinTech
        start-up that specializes in developing AI/ML-based trading strategies
        for cryptocurrencies. Kory holds a BBA with double major in Finance and
        Marketing from the University of Washington - Bothell.
      </p>
    }
    linkedIn="https://www.linkedin.com/in/kory-hoang-8999056a/"
    email="kory@stably.io"
  />,
  <SpeakerPreview
    key={keyGen++}
    img={speaker11Img}
    job={
      <p>
        ADVISOR, <br />
        NEM
      </p>
    }
    name={<b>Alex Tinsman</b>}
    body={
      <p>
        Alex is the North America lead for NEM and is a member and advisor of
        the NEM Foundation. She created the Inside NEM YouTube series which
        quickly became an official channel of NEM and is now translated into
        multiple languages. Alex brings two decades of software analytics,
        marketing, and community development experience, with a focus on online
        gaming. She worked on some of the world’s first digital tradable assets
        in Pokémon Online and Magic: The Gathering Online. She also led launches
        for League of Legends, the world’s number one grossing PC game, as well
        as product launches for Xbox and Raptr, a game data analytics startup.
      </p>
    }
    linkedIn="https://www.linkedin.com/in/alextinsman/"
  />
];

export default WorkshopSpeakers;
