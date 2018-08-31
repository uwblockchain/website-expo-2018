import React from 'react';
import { Form, FormGroup, Col, Button, FormControl, ControlLabel, OverlayTrigger, Popover } from 'react-bootstrap';

const Contact = () => (
  <div name="contact">
    <Form name="contact" horizontal>
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
    </Form>
  </div>
);

export default Contact;
