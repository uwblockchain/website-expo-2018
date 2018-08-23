import React from 'react';
import { Panel, Row, Col } from 'react-bootstrap';

class BuyTicketCard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <Panel>
                <div className="card-title pl-4">
                    <h3 className="card-title">{this.props.title}</h3>
                    <h3 className="card-sub">{this.props.sub && this.props.sub} </h3>
                </div>
                <div className="text-center">
                    <Row>
                        <Col xs={6}>
                            <h1 className="card-price text-right">{this.props.price}</h1>
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