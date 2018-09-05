import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Contact = () => (
  <div name="contact">
    <div className="container">
      <Row>
        <Col md={6} mdOffset={3}>
          <form name="gform" id="gform" encType="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSeot5RwBo1pB2nHlBhJ7vwc01f099L7bZ77jjeIUdxgJZO7vA/formResponse?">
            Name:<br/>
            <input type="text" name="entry.421613487" id="entry.421613487" placeholder="John Doe"/>
            <br/>Email:<br/>
            <input type="email" name="entry.1113741343" id="entry.1113741343" placeholder="example@email.com"/>
            <br/>Inquiry:<br/>
            <textarea name="entry.410895613" id="entry.410895613" rows="6"></textarea>
            <input type="submit" value="Submit" id="contact-form-submit"/>
          </form>
        </Col>
      </Row>
    </div>
  </div>
);

export default Contact;
