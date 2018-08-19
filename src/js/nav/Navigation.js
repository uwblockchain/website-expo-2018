import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import NavTabs from './NavTabs';

const buttonLink = "https://www.eventbrite.com/e/uw-blockchain-expo-tickets-47000447604";

const Navigation = () => (
  <Navbar className="main-navbar" inverse fluid collapseOnSelect>
    <Navbar.Header left="true">
      <Navbar.Brand className="title">
        <p id="nav-brand">UW BLOCKCHAIN EXPO</p>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
      <div className="pull-left">
        <Navbar.Text pullLeft id="nav-date">
          Oct 13
          <br />
          <span id="nav-year">2018</span>
        </Navbar.Text>
      </div>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem className="button" href={buttonLink}>
          <Button>Get Tickets</Button>
        </NavItem>
        <NavTabs />
      </Nav> 
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;