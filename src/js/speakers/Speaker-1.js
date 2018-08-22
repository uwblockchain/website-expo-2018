import React from 'react';
import speakerImg from '../../img/ahmad-alkabra.jpg';
import { Media } from 'react-bootstrap';

const Speaker1 = () => (
  <Media>
    <Media.Left align="middle">
      <img src={speakerImg} alt="Speaker 1"/>
    </Media.Left>
    <Media.Body>
      <Media.Heading>
        Global Director of Product, Appsolutely
        <br />
        <b>Ahmad Alkabra</b>
      </Media.Heading>
      <p>
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
      </p>
    </Media.Body>
  </Media>
);

export default Speaker1;