import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const BuyTicketCard = props => (
  <Card style={{ padding: '1rem' }}>
    <div className="pl-4">
      <h3 className="card-title">{props.title}</h3>
      <h3 className="card-sub">{props.sub && props.sub} </h3>
    </div>
    <div className="text-center">
      <Row>
        <Col xs={6}>
          <h1 className="card-price text-right">{props.price}</h1>
        </Col>
        <Col xs={6}>
          <h4 className="card-fee text-left"> + {props.fee} fee</h4>
        </Col>
      </Row>
    </div>
    <div className="card-button text-center">
      <a
        href="https://www.eventbrite.com/e/university-of-washington-blockchain-exposition-2020-tickets-98153175791"
        target="#"
        className="btn btn-primary"
      >
        PURCHASE
      </a>
    </div>
  </Card>
);

export default BuyTicketCard;
