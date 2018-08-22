import React from 'react';
import { Panel, Row, Col } from 'react-bootstrap';

class BuyTicketCard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <Panel>
                <div className="card-title">
                    <h3 className="pl-4">{this.props.title}</h3>
                </div>
                <div className="cardPrice text-center">
                    <Row>
                        <Col xs={6}>
                            <h1 className="text-right">{this.props.price}</h1>
                        </Col>
                        <Col xs={6}>
                            <h4 className="card-fee text-left py-4"> + {this.props.fee} fee</h4>
                        </Col>
                    </Row>
                </div>
                <div className="card-button text-center">
                    <a href="#" className="btn btn-primary">PURCHASE</a>
                </div>
            </Panel>
        )
    }
    

}

export default BuyTicketCard;