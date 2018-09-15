import React from 'react';
import SpeakerPreview from './SpeakerPreview';
import speaker1Img from '../../img/speakers/ahmad-alkabra.jpg';
import speaker2Img from '../../img/speakers/mark_cooley.jpg';
import speaker5Img from '../../img/speakers/eric-weaver.jpg';
import speaker7Img from '../../img/speakers/david-ritter.jpg';
import speaker8Img from '../../img/speakers/neal-koblitz.png';
import speaker10Img from '../../img/speakers/oyedeji_oluwoye.jpg';

var keyGen = 0;

const PanelSpeakers = () => [
  <SpeakerPreview
    key={keyGen++}
    img={speaker1Img}
    job={
      <p>
        CHIEF TECHNOLOGY OFFICER, <br />
        APPSOLUTELY
      </p>
    }
    name={<b>Ahmad Alkabra</b>}
    body={
      <p>
        Ahmad Alkabra is the Global Director of Product at Appsolutely, a
        company that is disrupting and reimagining the customer loyalty space
        and ecosystem with LoyalCoin - the next-generation customer loyalty
        solution on the blockchain. At Appsolutely, Ahmad guides LoyalCoin's
        product strategy and spearheads the delivery of apps, services, and
        solutions related to the LoyalCoin ecosystem.
        <br />
        <br />
        Prior to joining Appsolutely, Ahmad had a stellar run at T-Mobile where
        he co- started, built and launched T-Mobile Tuesdays – an innovative
        customer engagement, and industry first customer loyalty app and
        platform that has been an instant success since its launch in 2016.
        <br />
        <br />
        He sees blockchain as the next evolution in the loyalty space and
        LoyalCoin as a universal and interoperable solution that utilizes the
        power of cryptocurrency and blockchain technology to incentivize
        customers into becoming more engaged and satisfied with loyalty/rewards
        programs, driving customer acquisition and retention for merchants and
        brands.
      </p>
    }
  />,
  <SpeakerPreview
    key={keyGen++}
    img={speaker2Img}
    job={
      <p>
        BLOCKCHAIN STRATEGIST, <br />
        4BLOCK
      </p>
    }
    name={<b>Mark Cooley</b>}
    body={
      <p>
        Mark is a seasoned executive, consultant and educator having held
        various executive leadership positions in technology over the last 18
        years. He specializes in business strategy and the application of
        blockchain technologies. He is on the founding team of numerous
        blockchain companies including lifeID, Govurn and 4Block Solutions. The
        latter of which is supporting blockchain innovation with projects across
        the community. Mark is a speaker, professor and advisor, supporting
        institutions such as Seattle University, University of Washington, and
        General Assembly.
      </p>
    }
  />,
  <SpeakerPreview
    key={keyGen++}
    img={speaker5Img}
    job={
      <p>
        CEO, <br />
        TRANSPARENT PATH
      </p>
    }
    name={<b>Eric Weaver</b>}
    body={
      <p>
        Eric Weaver is a digital transformation veteran who has spent 29 years
        counseling large enterprises and governmental agencies on disruption and
        transformation. He has counseled over 80 blue-chip clients on everything
        from brand building to digital operations to blockchain use cases — and
        has built and led creative, production and strategy teams in New York,
        London, Washington DC, Los Angeles, Seattle, Detroit and Cincinnati.
        <br />
        <br />
        Most recently the VP of Customer Experience for Xerox, Weaver oversaw
        the company’s $550M marketing services team and led efforts around
        ledger technologies. He left Xerox in 2018 to launch Transparent Path –
        a management consultancy advising brands and governments around the
        globe on proving product origins, quality and marketing claims using
        blockchain-based validation and supply chain.
      </p>
    }
  />,
  <SpeakerPreview
    key={keyGen++}
    img={speaker7Img}
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
  />,
  <SpeakerPreview
    key={keyGen++}
    img={speaker8Img}
    job={
      <p>
        PROFESSOR AND AUTHOR, <br />
        UNIVERSITY OF WASHINGTON
      </p>
    }
    name={<b>Neal Koblitz</b>}
    body={
      <p>
        Neal Koblitz received his Ph.D. in mathematics at Princeton in 1974, and
        since 1979 has been at the University of Washington. The author of six
        books and coinventor of elliptic curve cryptography, he works in
        applications of mathematics to information security. In recent years he
        has coauthored a series of papers critiquing the use of mathematical
        techniques in cybersecurity. He is secretary of the Kovalevskaia Fund, a
        small foundation that supports women in STEM fields in the Global South.
      </p>
    }
  />,
  <SpeakerPreview
    key={keyGen++}
    img={speaker10Img}
    job={
      <p>
        FOUNDER, <br />
        COINCENTRIX
      </p>
    }
    name={<b>Oyedeji Oluwoye</b>}
    body={
      <p>
        Oyedeji Oluwoye is a Network Planning Engineer in the Global
        Implementation Team at AT&T Mobility; Cisco certified with
        concentrations in Wireless, Design and IP Networking. Oyedeji completed
        his Bachelors and Masters in Computer Science from Alabama A&M
        University. With a thesis focused on the Network Analysis of Bitcoin and
        Cryptocurrencies , he founded Coincentrix Capital, a Blockchain Research
        and Development firm. Coincentrix focuses on the trading and education
        of digital cryptocurrencies, and the development of the Blockchain
        ecosystem. November 20th 2017 The Zcash Foundation provided Coincentrix
        with an outreach grant to provide opportunities to expand educational
        efforts among university students to inform them on the fundamentals of
        blockchain and privacy driven innovations. Oyedeji also is an Advisor of
        Lamden, a smart contract system project focused on building
        developmental blockchain tools. Lamden successfully raised $10mm for
        their ICO which ended January 3rd 2018.
      </p>
    }
    linkedIn="https://www.linkedin.com/in/oyedeji-oluwoye-2b9562110/"
    email="o.oluwoye@coincentrix.io"
  />
];

export default PanelSpeakers;
