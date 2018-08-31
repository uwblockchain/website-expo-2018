import React from  'react'
import { Row, Image, Col } from 'react-bootstrap'
import heroBG from '../../img/heroBG.png'

const Hero = () => (
    <div>
        <Image src={heroBG} responsive className="hero-image"/>
        <div  className="container-flex text-center hero-text">
            <Row>
                <Col md={6} mdOffset={3}>
                    <p id="uw-hero">UNIVERSITY OF WASHINGTON</p>
                    <h2 id="block-hero">BLOCK</h2>
                    <h1 id="chain-hero">CHAIN</h1>
                    <h2 id="expo-hero">EXPOSITION</h2>
                    <h4 id="hero-tagline">Connecting students and industry in blockchain</h4>
                    <a href="#" className="btn btn-hero">Learn More</a>
                    <a href="#" className="btn btn-primary">Get Tickets</a>
                </Col>
            </Row>
        </div>
        
    </div>
)

export default Hero;