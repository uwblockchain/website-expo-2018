import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import NavTabs from './NavTabs';
import { animateScroll as scroll } from 'react-scroll';

const buttonLink =
  'https://www.eventbrite.com/e/uw-blockchain-expo-tickets-47000447604';

export const NavButton = () => (
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
  <Navbar.Brand onClick={scroll.scrollToTop} id="nav-brand">
    UW BLOCKCHAIN EXPO
  </Navbar.Brand>
);

const Navigation = () => (
  <div className="main-navbar">
    <Navbar fixedTop collapseOnSelect>
      <Navbar.Header left="true">
        <NavTitle className="title" />
        <Navbar.Toggle />
      </Navbar.Header>
      <NavDate className="date" />
      <Navbar.Collapse>
        <Nav pullRight>
          <NavButton className="button navbar-button" />
          <NavTabs className="tabs" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Navigation;
