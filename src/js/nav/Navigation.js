import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import NavTabs from './NavTabs';
import { animateScroll as scroll } from 'react-scroll';

const buttonLink =
  'https://www.eventbrite.com/e/uw-blockchain-expo-tickets-47000447604';

export const NavButton = () => (
  <Nav.Item href={buttonLink}>
    <Button>Get Tickets</Button>
  </Nav.Item>
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
  <div className="main-navbar" style={{ justifyItems: 'space-between' }}>
    <Navbar fixed="top" expand="lg" collapseOnSelect>
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <NavTitle className="title" />
        <NavDate className="date" />
      </div>
      <Navbar.Collapse className="justify-content-end">
        <NavButton className="button navbar-button" />
        <NavTabs className="tabs" />
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Navigation;
