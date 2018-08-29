import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import { Speaker1Preview } from './speakers/Speaker-1';
import { Speaker2Preview } from './speakers/Speaker-2';
import { Speaker3Preview } from './speakers/Speaker-3';
import { Speaker4Preview } from './speakers/Speaker-4';
import { Speaker5Preview } from './speakers/Speaker-5';
import { Speaker6Preview } from './speakers/Speaker-6';
import { Speaker7Preview } from './speakers/Speaker-7';
import { Speaker8Preview } from './speakers/Speaker-8';

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
    <div className="container-flex speaker-previews" name="speaker-previews">
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
                    <Speaker4Preview />
                </Col>
                <Col md={4} id="col">
                    <Speaker5Preview />
                </Col>
                <Col md={4} id="col">
                    <Speaker6Preview />
                </Col>
            </Row>
            <Row>
                <Col md={4} id="col">
                    <Speaker7Preview />
                </Col>
                <Col md={4} id="col">
                    <Speaker8Preview />
                </Col>
                <Col md={4} id="col">
                    
                </Col>
            </Row>
        </div>
    </div>
    
)

export default SpeakerPreviews;