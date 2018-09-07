import React from 'react';
import { Panel, Row, Col } from 'react-bootstrap';

const BuyTicketCard = props => (
  <Panel>
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
          <h4 className="card-fee text-left py-4"> + {props.fee} fee</h4>
        </Col>
      </Row>
    </div>
    <div className="card-button text-center">
      <a
        href="https://www.eventbrite.com/e/uw-blockchain-expo-tickets-47000447604"
        target="#"
        className="btn btn-primary"
      >
        PURCHASE
      </a>
    </div>
  </Panel>
);

export default BuyTicketCard;
