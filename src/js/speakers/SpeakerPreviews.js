import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import { Speaker1Preview } from './Speaker-1';
import { Speaker2Preview } from './Speaker-2';
import { Speaker3Preview } from './Speaker-3';

const previewTitle = {
    fontWeight: 700,
    color: '#474747',
    lineHeight: 1.5,
}

const previewSubTitle = {
    fontWeight: 700,
    color: '#7B7B7B',
    lineHeight: 1.5,
}

var mdash = '\mdash'

const SpeakerPreviews = () => (
    <div className="container">
        <Row>
            <Col md={12} id="col">
                <h2 style={previewTitle}>Engage with blockchain <br/>{'professionals \u2014'}</h2>
                <h4 style={previewSubTitle}>Speakers from various industries will share <br/>their insights.</h4>
            </Col>
        </Row>
        <Row>
            <Col md={4} id="col">
                <Speaker1Preview />
            </Col>
            <Col md={4} id="col">
                <Speaker2Preview />
            </Col>
            <Col md={4} id="col">
                <Speaker3Preview />
            </Col>
        </Row>
        <Row>
            <Col md={4} id="col">
                <Speaker1Preview />
            </Col>
            <Col md={4} id="col">
                <Speaker2Preview />
            </Col>
            <Col md={4} id="col">
                <Speaker3Preview />
            </Col>
        </Row>
    </div>
    
)

export default SpeakerPreviews;