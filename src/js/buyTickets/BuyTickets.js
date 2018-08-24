import React from 'react';
import BuyTicketCard from './BuyTicketCard';
import { Row, Col } from 'react-bootstrap';

const BuyTickets = () => (
  <div className="container">
    <Row>
      <Col md={4}>
        <BuyTicketCard className="ticket" title="Students" price="$5" fee="$2.00"/>
      </Col>
      <Col md={4}>
        <BuyTicketCard className="ticket" title="General Admission" sub="(Early Bird)" price="$99" fee="$7.57"/>
      </Col>
      <Col md={4}>
        <BuyTicketCard className="ticket" title="General Admission" price="$149" fee="$13.15"/>
      </Col>
    </Row>
  </div>
);

export default BuyTickets;
