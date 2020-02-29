import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Video = () => (
  <div className="main-video container-flex">
    <div className="container">
      <Row>
        <Col md={{ span: 8, offset: 2 }} className="text-center">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="promo-video"
              src="https://www.youtube.com/embed/RcFew7UT0Ew?rel=0&amp;showinfo=0"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default Video;
