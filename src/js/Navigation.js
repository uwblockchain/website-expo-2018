import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

const navigation = {
  background: 'inherit',
  border: 'none',
};

const text = {
  color: 'white',
};

const date = {
  color: 'white',
  textAlign: 'center',
}

const button = {
  background: 'inherit', 
  color: 'white',
};

const Navigation = () => (
  <Navbar style={navigation}>
    <Navbar.Header>
      <Navbar.Brand style={text}>
        UW Blockchain Expo
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Text style={date}>
      Oct 13
      <br />
      2018
    </Navbar.Text>
    <Nav pullRight>
      <NavItem>
        <Button style={button}>Get Tickets</Button>
      </NavItem>
      <NavItem className="tab" eventKey={1} href="#">
        <div style={text}>
          Speakers
        </div>
      </NavItem>
      <NavItem className="tab" eventKey={2} href="#">
        <div style={text}>
          Workshops
        </div>
      </NavItem>
      <NavItem className="tab" eventKey={3} href="#">
        <div style={text}>
          Sponsors
        </div>
      </NavItem>
      <NavItem className="tab" eventKey={4} href="#">
        <div style={text}>
          Contact
        </div>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;