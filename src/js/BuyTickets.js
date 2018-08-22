import React from 'react';
import BuyTicketCard from './BuyTicketCard';
import { Row, Col } from 'react-bootstrap';

class BuyTickets extends React.Component {

    render() {
        return(
            <div className="container">
                <Row>
                    <Col xs={4}>
                        <BuyTicketCard className="" title="Students" price="$5" fee="$2.00"/>
                    </Col>
                    <Col xs={4}>
                        <BuyTicketCard title="General Admission" price="$99" fee="$7.57"/>
                    </Col>
                    <Col xs={4}>
                        <BuyTicketCard title="General Admission" price="$149" fee="$13.15"/>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default BuyTickets