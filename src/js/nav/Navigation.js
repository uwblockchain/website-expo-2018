import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import NavTabs from './NavTabs';

const buttonLink = "https://www.eventbrite.com/e/uw-blockchain-expo-tickets-47000447604";

const NavButton = () => (
  <NavItem href={buttonLink}>
    <Button>Get Tickets</Button>
  </NavItem>
);

const NavDate = () => (
  <div className="pull-left">
    <Navbar.Text pullLeft id="nav-date">
      Oct 13
      <br />
      <span id="nav-year">2018</span>
    </Navbar.Text>
  </div>
);

const NavTitle = () => (
  <Navbar.Brand>
    <a href="http://www.uwbce.com" id="nav-brand">UW BLOCKCHAIN EXPO</a>
  </Navbar.Brand>
);

const Navigation = () => (
  <Navbar className="main-navbar" fluid collapseOnSelect fixedTop>
    <Navbar.Header left="true">
      <NavTitle className="title" />
      <Navbar.Toggle />
    </Navbar.Header>
    <NavDate className="date" />
    <Navbar.Collapse>
      <Nav pullRight>
        <NavButton className="button" />
        <NavTabs className="tabs" />
      </Nav> 
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;