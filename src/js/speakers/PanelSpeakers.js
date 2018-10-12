import React from 'react';
import SpeakerPreview from './SpeakerPreview';

var keyGen = 0;

const PanelSpeakers = () => [
  <SpeakerPreview
    key={keyGen++}
    img="tony_tran.jpg"
    job={
      <p>
        FOUNDER AND CHIEF EXECUTIVE, <br />
        ALFA-ENZO FOUNDATION
      </p>
    }
    name={<b>Tony Tran</b>}
    body={
      <p>
        Tony is an inventor, blockchain technologist, award-winning designer,
        and serial entrepreneur. He is the Founder and Chief Executive of the
        Alfa-Enzo Foundation. At Alfa-Enzo, Tony leads a team of architect
        around the world to take on FAMGA (Facebook, Apple, Microsoft, Google,
        Amazon) using a blockchain model of his own invention. In the past, Tony
        has led strategy, creative advertising, and product development for
        notable names like Microsoft, US Army, Inrix, Geico, EMC, Seagate, AT&T,
        US Olympics, Kelloggs, Caterpillar and many other fortune 50 accounts.
      </p>
    }
  />,
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
    img="simon_manka.jpg"
    job={
      <p>
        GROWTH LEAD, <br />
        <a href="https://www.iost.io" target="#">
          IOS FOUNDATION
        </a>
      </p>
    }
    name={<b>Simon Manka</b>}
    body={
      <p>
        Simon spent the last 11 years focused on growth for Fortune 500
        companies and fast growing technology start ups. In his role he leads
        partnerships, business development and marketing efforts for the IOS
        Foundation. Simon has been a blockchain enthusiast since 2013 and is a
        cryptocurrency advocate who can see the advantages and disadvantages
        associated with decentralized systems.
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
    email="Galya@Plazus.com"
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
    job={<p>CO-FOUNDER / ENTERTAINMENT AND TECH PR AT ROUSSEAU LINARES</p>}
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
  />,
  <SpeakerPreview
    key={keyGen++}
    img="fedor.jpg"
    job={
      <p>
        CO-FOUNDER and CEO, <br />
        ASPACE
      </p>
    }
    name={<b>Fedor Paretsky</b>}
    body={
      <p>
        Fedor Paretsky is a young Entrepreneur studying Physics at the
        University of Washington. \Inspired by evolving platforms in the IoT and
        blockchain spaces, he is the Co-Founder and CEO of aspace, Inc. – an
        infrastructure/consumer startup connecting car commuters to the
        last-mile transportation sectors. Starting in 2011, Fedor has been
        actively developing applications and command-line tools assisting in CPU
        mining. His focus has consistently been on developing platforms in their
        early stages, such as Android 3.0.
      </p>
    }
  />,
  <SpeakerPreview
    key={keyGen++}
    img="michael-smyers.jpg"
    job={
      <p>
        CO-FOUNDER and VP OF ENGINEERING, <br />
        COINME
      </p>
    }
    name={<b>Michael Smyers</b>}
    body={
      <p>
        As a serial entrepreneur, Michael is the VP Engineering and Co-Founder
        of Coinme, a Bitcoin ATM headquartered in Seattle. In 2007, Michael
        co-founded{' '}
        <a href="https://www.crunchbase.com/organization/zipwhip">Zipwhip</a>, a
        cloud-based texting platform, currently valued at $281M. In 2002,
        Michael founded CourseScheduler while completing a Bachelor of Science
        in Electrical Engineering from Kansas State University.
      </p>
    }
  />,
  <SpeakerPreview
    key={keyGen++}
    img="marielle_saums.jpg"
    job={
      <p>
        INDEPENDENT WRITER
        <br />
        AND RESEARCHER
      </p>
    }
    name={<b>Marielle Saums</b>}
    body={
      <p>
        Marielle Saums is a technical writer currently working on content
        development and documentation for Telos, a new blockchain network based
        on EOSIO software. They developed technical expertise in challenging
        settings such as remote field research stations and architectural
        salvage yards, leading to an interest in inventory management and small
        business logistics for emerging industries. Currently, Marielle is
        interested in the potential for blockchain technology to resolve
        environmental challenges through peer-to-peer resource exchange, supply
        chain transparency, and decentralized system management.
      </p>
    }
  />,
  <SpeakerPreview
    key={keyGen++}
    img="kate_mitselmakher.jpg"
    job={
      <p>
        CEO, FOUNDER & GENERAL PARTNER, <br />
        BLOCCELERATE VC
      </p>
    }
    name={<b>Kate Mitselmakher</b>}
    body={
      <p>
        Kate Mitselmakher is the CEO, Founder & General Partner of Bloccelerate
        VC, a blockchain fund and an accelerator looking to invest in 50-100
        blockchain companies over the next 5 years. Kate has not only been one
        of the early investors in blockchain technologies since 2013, but also a
        passionate blockchain advocate for social impact and enterprise
        applications across global governments and Fortune 500 companies. In the
        past three years, as a part of Gartner Invest group, Kate has advised
        numerous venture-based companies and accelerators, such as Alchemist
        Accelerator. She also worked alongside some of the top investors in
        Silicon Valley, thereby creating a strong network of top entrepreneurs,
        VCs, and technology buyers. During her free time, Kate also runs
        Seattle-based blockchain meet-up and completes her master’s thesis on
        Blockchain from Harvard University.
      </p>
    }
  />,

  <SpeakerPreview
    key={keyGen++}
    img="Monohan_M.jpg"
    job={
      <p>
        CEO, <br />
        BAZAAR.market
      </p>
    }
    name={<b>Mike Monohan</b>}
    body={
      <p>
        Mike Monohan’s professional experience includes 13 years at Microsoft
        finance, including 6 years as the CFO of their Enterprise Services
        divisions in Amsterdam and subsequently seven Gulf Region countries
        based out of Dubai. He conceived of and launched CryptoDelegate.com, the
        first Proof of Stake Blockchain Delegation service for Tezos, a 3rd
        generation blockchain. He is currently the founder and CEO of
        BAZAAR.market. BAZAAR is a blockchain platform that facilitates and
        white labels the “Tokenization” of asset ownership and loan
        collateralization. Mike has a MBA from University of Washington and an
        executive MBA from Harvard Business School.
      </p>
    }
  />,
  <SpeakerPreview
    key={keyGen++}
    img="Badri_Narayanan.jpeg"
    job={
      <p>
        FOUNDER AND PARTNER,
        <br />
        INFINITE SUM MODELING
      </p>
    }
    name={<b>Dr. Badri Narayanan Gopalakrishnan</b>}
    body={
      <p>
        Dr. Gopalakrishnan is a Seattle based Economist, UW Affiliate Professor
        and strategy consultant and the CEO and Founder of Infinite Sum
        Modeling, an economic/management consulting firm with offices in US,
        Canada China and India, and clients worldwide. He also have an
        affiliation with McKinsey, with whom he works very closely as an insider
        on several client-facing projects for the governments and Fortune 500
        companies across the board. He has been involved with several
        blockchain/disruptive tech companies as an advisor (Vermouth, Digital
        Town, RAYS network, TIM Blockchain, Applicature, Avatar Blockchain,
        Robodub, Radii Robotics, Make in LA, to name just a few.) He was a
        speaker at Blockchain Economic Forum San Francisco in June 2018.
      </p>
    }
    linkedIn="https://www.linkedin.com/in/badrinarayanang/"
  />
];

export default PanelSpeakers;
