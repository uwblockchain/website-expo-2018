import React from 'react';
import speakerImg from '../../img/ahmad-alkabra.jpg';

const Speaker1 = () => (
  <div className="speaker">
    <img src={speakerImg} alt="Speaker 1"/>
    <div className="text">
      <div className="occupation">
        <h3>
          Global Director of Product,
          <br />
          Appsolutely
        </h3>
      </div>
      <div className="name">
        <h2>
          Ahmad Alkabra
        </h2>
      </div>
      <div className="description">
      Ahmad Alkabra is the Global Director of Product at Appsolutely, a company that is 
      disrupting and reimagining the customer loyalty space and ecosystem with LoyalCoin 
      - the next-generation customer loyalty solution on the blockchain. At Appsolutely,
      Ahmad guides LoyalCoin's product strategy and spearheads the delivery of apps,
      services, and solutions related to the LoyalCoin ecosystem.
      <br />
      <br />
      Prior to joining Appsolutely, Ahmad had a stellar run at T-Mobile where he co-
      started, built and launched T-Mobile Tuesdays – an innovative customer
      engagement, and industry first customer loyalty app and platform that has been an
      instant success since its launch in 2016.
      <br />
      <br />
      He sees blockchain as the next evolution in the loyalty space and LoyalCoin as a
      universal and interoperable solution that utilizes the power of cryptocurrency and
      blockchain technology to incentivize customers into becoming more engaged and
      satisfied with loyalty/rewards programs, driving customer acquisition and retention
      for merchants and brands.
      </div>
    </div>
  </div>

);

export default Speaker1;
