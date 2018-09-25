import React from 'react';
import SpeakerPreview from './SpeakerPreview';

var keyGen = 0;

const PanelSpeakers = () => [
  <SpeakerPreview
    key={keyGen++}
    img="ahmad-alkabra.jpg"
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
    img="mark_cooley.jpg"
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
    img="eric-weaver.jpg"
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
    img="david-ritter.jpg"
    job={
      <p>
        CEO, <br />
        PENTA GLOBAL
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
    img="neal-koblitz.png"
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
    img="oyedeji_oluwoye.jpg"
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
  />,
  <SpeakerPreview
    key={keyGen++}
    img="galya_westler.jpg"
    job={
      <p>
        CEO, <br />
        PLAZUS TECHNOLOGIES
      </p>
    }
    name={<b>Galya Westler</b>}
    body={
      <p>
        Galya Westler is a two-time tech entrepreneur and a product specialist;
        she is a Blockchain enthusiast and the CEO of a Blockchain startup,
        Plazus. Galya is a world wide public speaker and also delivered her TEDx
        talk about social media and loneliness on connecting people
        authentically within communities, as a follow up on that promise, she
        then founded Plazus as a tool that truly gives the power back to the
        people by trying to solve the well-known issue of data sovereignty and
        privacy. Plazus is a blockchain protocol for large groups communication
        to identify and reward their members with millions of users within
        tribes already signed up on the Plazus test net.
      </p>
    }
    linkedIn="https://www.linkedin.com/in/galya-westler-b0b63b42/"
    email="g.westler@gmail.com"
  />,
  <SpeakerPreview
    key={keyGen++}
    img="sean_hsieh.jpg"
    job={
      <p>
        CEO, <br />
        CONCREIT
      </p>
    }
    name={<b>Sean Hsieh</b>}
    body={
      <p>
        Sean is a serial entrepreneur. He currently serves as the CEO of
        Concreit, a commercial real estate marketplace powered by blockchain
        technologies to offer investments in security tokens. He was the Chief
        Product Officer of Flowroute (co-founder), a company built to drive
        business communications technology into the future through VoIP.
        Flowroute delivers cost savings, flexibility, and higher quality
        connections to thousands of businesses around the world. Sean thrives
        off a lifelong passion for entrepreneurship, technology, culture,
        design, and dancing. His talents have served Fortune 100 companies
        including Apple, Linksys (Cisco), and Motorola, pushing forward new
        marketing ventures and fostering rapid growth. Sean holds a degree in
        Information & Computer Science from the University of California,
        Irvine. developed his expertise in technology, marketing, and design
        growing up in Davis, CA.
      </p>
    }
    linkedIn="https://www.linkedin.com/in/seanhsieh/"
    email="sean@concreit.io"
  />,
  <SpeakerPreview
    key={keyGen++}
    img="william_george.jpg"
    job={
      <p>
        CRYPTOECONOMIST, <br />
        KLEROS
      </p>
    }
    name={<b>William George</b>}
    body={
      <p>
        William obtained a PhD in mathematics from University of Toronto. He
        researched applications of blockchains during postdocs at University of
        Toronto and École Polytechnique (France), and currently does
        cryptoeconomic research for Kleros.
      </p>
    }
    email="william.h.w.george@gmail.com"
  />,
  <SpeakerPreview
    key={keyGen++}
    img="alex_dicarlo.jpeg"
    job={
      <p>
        FOUNDER, <br />
        NEOTRACKER
      </p>
    }
    name={<b>Alex DiCarlo</b>}
    body={<p>Software Engineer at Facebook and CEO of NEO Tracker</p>}
    linkedIn="https://www.linkedin.com/in/alex-dicarlo/"
    email="alex.dicarlo@neotracker.io"
  />,
  <SpeakerPreview
    key={keyGen++}
    img="natacha_rousseau.jpg"
    job={
      <p>
        CO-FOUNDER / PUBLIC RELATIONS, <br />
        ROUSSEAU LINARES
      </p>
    }
    name={<b>Natacha Rousseau</b>}
    body={
      <p>
        Natacha Rousseau is a Public Relations consultant with more than 15
        years experience in the tech, corporate, non-profit and digital health
        industries. She is currently heading the Speaker's Office at Transform
        Group, a global Public Relations firm that represents 100+ clients in
        the blockchain field. As Account Director, she helps clients develop
        their roadshows in Asia, the United States, and Europe and secures
        speaking and sponsorship opportunities.
        <br />
        <br />
        See more at{' '}
        <a
          style={{ color: 'rgb(200, 109, 215)' }}
          href="https://www.rousseaulinares.com"
          target="#"
        >
          rosseaulinares.com
        </a>
        .
      </p>
    }
  />,
  <SpeakerPreview
    key={keyGen++}
    img="liz_linares.jpeg"
    job={
      <p>
        CO-FOUNDER / ENTERTAINMENT AND TECH PR, <br />
        ROUSSEAU LINARES
      </p>
    }
    name={<b>Liz “Lisi” Linares</b>}
    body={
      <p>
        A songwriter, recording artist, and former reality personality (Survivor
        Fiji), Lisi specializes in events geared toward the Blockchain /
        Cryptocurrency space where she enjoys using her background in
        entertainment to put people together. Lisi has organized parties and
        after-parties during most of the major summits and conferences in the
        Los Angeles area; she hosts and creates the environment where the deals
        are made. Lisi has also served as a consultant for social media
        strategies for companies that apply blockchain technology and are
        launching their ICOs. She’s been the architect behind many successful
        celebrity and influencer endorsements.
        <br />
        <br />
        See more at{' '}
        <a
          style={{ color: 'rgb(200, 109, 215)' }}
          href="https://www.rousseaulinares.com"
          target="#"
        >
          rosseaulinares.com
        </a>
        .
      </p>
    }
  />
];

export default PanelSpeakers;
