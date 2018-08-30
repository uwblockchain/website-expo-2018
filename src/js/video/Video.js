import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Video = () => (
    <div className="main-video container-flex">
        <div className="container">
            <Row>
                <Col md={5}>
                    <h3 className="video-sub-title">University of Washington's First Annual</h3>
                    <h1 className="video-title">BLOCKCHAIN EXPO</h1>
                    <p className="video-par">The UW Blockchain Society seeks to connect industry and students interested 
                        in blockchain technology. The UW Blockchain Expo will feature speakers, 
                        workshops, and panels from companies and individuals involved in the blockchain 
                        space. They will share their experiences, insights, and the projects they 
                        are working on.
                    </p>
                    <div className="card-button text-center">
                        <a className="btn btn-primary btn-video" 
                            href="https://www.eventbrite.com/e/uw-blockchain-expo-tickets-47000447604">Get Tickets</a>
                    </div>
                    
                </Col>
                <Col md={7} className="text-center">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe src="https://www.youtube.com/embed/RcFew7UT0Ew?rel=0&amp;showinfo=0" 
                            frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                    
                </Col>
            </Row>
        </div>
    </div>
)

export default Video