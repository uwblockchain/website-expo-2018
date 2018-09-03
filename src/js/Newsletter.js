import '../css/App.css';
import React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const Newsletter = () => (
  <div className="Newsletter">
    <h2 className="newsletter-text">
      Join our mail list
      <br />
      to receive expo updates:
    </h2>
    <div className="form newsletter-form">
      <Form >
        <FormGroup controlId="formInlineEmail">
          <FormControl type="email" placeholder="email" bsSize="large" />
        </FormGroup>{' '}
        <a type="submit" className="btn-hero">SUBMIT</a>
      </Form>
    </div>
  </div>
);

export default Newsletter;
