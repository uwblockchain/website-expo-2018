import React from 'react';
import { Navbar, Nav, NavItem, Tabs, Tab, Button } from 'react-bootstrap';

const Navigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a>UW Blockchain Expo</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Text>
      Oct 13
      <br />
      2018  
    </Navbar.Text>
    <Nav pullRight>
      <NavItem>
        <Button>Get Tickets</Button>
      </NavItem>
      <NavItem eventKey={1} href="#">
        Speakers
      </NavItem>
      <NavItem eventKey={2} href="#">
        Workshops
      </NavItem>
      <NavItem eventKey={3} href="#">
        Sponsors
      </NavItem>
      <NavItem eventKey={4} href="#">
        Contact
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;