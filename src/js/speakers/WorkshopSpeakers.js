import React from 'react';
import SpeakerPreview from './SpeakerPreview';
import speaker3Img from '../../img/speakers/joshua_shane.jpg';
import speaker4Img from '../../img/speakers/soumya-basu.jpg';
import speaker6Img from '../../img/speakers/james-gan.jpeg';
import speaker9Img from '../../img/speakers/kory_hoang.jpg';
import speaker11Img from '../../img/speakers/alex_tinsman.jpg';
import speaker12Img from '../../img/speakers/kara_zucker.jpg';
import speaker13Img from '../../img/speakers/aaron_mccloud.jpg';
import speaker14Img from '../../img/speakers/simon_yu.jpg';

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
  />,
  <SpeakerPreview
    key={keyGen++}
    img={speaker12Img}
    job={
      <p>
        HEAD OF OPERATIONS, <br />
        BLOCKCHAIN ASSEMBLY
      </p>
    }
    name={<b>Kara Zucker</b>}
    body={
      <p>
        Kara Zucker is a operations, marketing, and technology professional with
        experience in political campaigns, international development, nonprofit
        and startups. Kara focuses on building leadership among teams, tackling
        new problems, and creating a measurable impact by educating others about
        the possibilities of Blockchain. She brings extensive experience
        launching new products, creating onboarding workflows, and business
        processes in a variety of markets. She takes a data-driven approach to
        leading and mobilizing teams which allows them to focus on a company’s
        strategy and ability to scale. Kara’s past professional experience
        includes working for Congressman Jared Polis (CO), Congressman Michael
        Bennet, Rotary International Headquarters, the United States Peace Corps
        in El Salvador, and lead operations at Moneythink (financial inclusion
        startup), and marketing at FrontFundr (FinTech investment startup).
        She’s contributed to the greater tech and education community through
        being a founding member of Tech Ladies, Young Women in Business Mentor,
        Leeds School of Business Mentor, and Board member at The Juno
        Collaborative. Kara received her Bachelor’s from the University of
        Colorado at Boulder in political science and Jewish studies and is
        currently an Executive MBA candidate at the Foster School of Business at
        the University of Washington. When she’s not reading about Blockchain
        regulation and possibilities, she loves to hike, travel to places on her
        bucket list, and listening to Bachata music.
      </p>
    }
    linkedIn="https://www.linkedin.com/in/kzucky/?originalSubdomain=ca"
    email="kara@blockchainassembly.io"
  />,
  <SpeakerPreview
    key={keyGen++}
    img={speaker13Img}
    job={
      <p>
        CEO, <br />
        PURPLE COW FINANCIAL INSTRUMENTS
      </p>
    }
    name={<b>Aaron McCloud</b>}
    body={
      <p>
        Aaron McCloud is an entrepreneur with an eclectic background & skill
        combination. Aaron received his B.A. in Chinese at Reed College before
        launching a web startup, studying martial arts in Japan & Thailand, and
        working at Amazon and Microsoft after teaching himself software
        engineering. When not working on his blockchain startup he enjoys
        listening to audiobooks, lifting weights, and writing movie scripts.
      </p>
    }
    linkedIn="https://www.linkedin.com/in/aaronmccloud/"
    email="mcclouda@gmail.com"
  />,
  <SpeakerPreview
    key={keyGen++}
    img={speaker14Img}
    job={
      <p>
        CEO AND CO-FOUNDER, <br />
        STORMX
      </p>
    }
    name={<b>Simon Yu</b>}
    body={
      <p>
        "The Business Prodigy": At the age of 19, Simon turned a $100 gift into
        a $500,000 business. Soon after, Simon became fascinated with Bitcoin
        and Blockchain technology when he was working at his last job in
        banking. In 2014, Bitcoin filled the media due to the negative aftermath
        of Mt. Gox and Silk Road but Simon dove into the technology and saw an
        opportunity from Blockchain that would disrupt multi trillion dollar
        industries. Since then, Simon has used his unique vision and ability to
        execute joined to grow a small dorm room project into a multi million
        dollar venture with millions of users. Simon has been featured in
        Forbes, Reader’s Digest, Nasdaq, Business Insider, and more.
      </p>
    }
    linkedIn="https://www.linkedin.com/in/simonyu0311/"
    email="simon-yu@hotmail.com"
  />
];

export default WorkshopSpeakers;
