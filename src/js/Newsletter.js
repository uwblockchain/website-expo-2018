import '../css/App.css';
import React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const Newsletter = () => (
  <div className="Newsletter">
    <h2>
      Join our mail list
      <br />
      to receive expo updates:
      <Form inline>
        <FormGroup controlId="formInlineEmail">
          <FormControl type="email" placeholder="email" />
        </FormGroup>{' '}
        <Button type="submit">SUBMIT</Button>
      </Form>;
    </h2>
  </div>
);

export default Newsletter;
