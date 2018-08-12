import React from 'react';
import { Form, FormGroup, Col, Button, FormControl, ControlLabel } from 'react-bootstrap';

const FormWrapper = () => (
  <Form horizontal>
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
        Comment
      </Col>
      <Col sm={10}>
        <FormControl componentClass="textarea" placeholder="Comment..." />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit">Submit</Button>
      </Col>
    </FormGroup>
  </Form>
);

export default FormWrapper;
