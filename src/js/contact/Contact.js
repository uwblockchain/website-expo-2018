import React from 'react';
import { Row, Form, FormGroup, Col, Button, FormControl, ControlLabel, OverlayTrigger, Popover } from 'react-bootstrap';

const Contact = () => (
  <div name="contact">
    {/* <Form name="contact" horizontal>
      <FormGroup controlId="Name">
        <Col componentClass={ControlLabel} sm={2}>
          Name
        </Col>
        <Col sm={10}>
          <FormControl type="name" placeholder="Name" />
        </Col>
        </FormGroup>
        <FormGroup controlId="Email">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl type="email" placeholder="Email" />
        </Col>
        </FormGroup>
        <FormGroup controlId="Comment">
        <Col componentClass={ControlLabel} sm={2}>
          Inquiry
        </Col>
        <Col sm={10}>
          <FormControl componentClass="textarea" placeholder="Question..." />
        </Col>
        </FormGroup>
        <FormGroup>
        <Col smOffset={2} sm={10}>
          <OverlayTrigger trigger="click" placement="right" overlay={<Popover>We'll contact you shortly</Popover>}>
            <Button>Submit</Button>
          </OverlayTrigger>
        </Col>
      </FormGroup>
    </Form> */}
    <div className="container">
      <Row>
        <Col md={6} mdOffset={3}>
        <form name="gform" id="gform" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLScqWh13INbTOAO_Acqwtq3vsDjs0VvpT24Xeuwe4-7Ph9o0rg/formResponse?" target="hidden_iframe" onsubmit="submitted=true;">
          Name:<br/>
          <input type="text" name="entry.1465724548" id="entry.1465724548" placeholder="John Doe"/>
          <br/>Email:<br/>
          <input type="email" name="entry.1347977438" id="entry.1347977438" placeholder="example@email.com"/>
          <br/>Inquiry:<br/>
          <textarea name="entry.2033481424" id="entry.2033481424" rows="6"></textarea>
          <input type="submit" value="Submit" id="contact-form-submit"/>
        </form>

        
        <iframe name="hidden_iframe" id="hidden_iframe" style={{display:'none'}} onLoad="if(submitted) {}"></iframe>
        </Col>
      </Row>
    </div>
  </div>
);

export default Contact;
