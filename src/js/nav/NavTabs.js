import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavTabs = () => (
  <Nav className="nav-tabs">
    <NavItem eventKey={1} href="#">
      <Link id="nav-text" to="speaker-previews" smooth={true}>
        Speakers
      </Link>
    </NavItem>
    <NavItem eventKey={2} href="#">
      <Link id="nav-text" to="schedule" smooth={true} offset={-30}>
        Schedule
      </Link>
    </NavItem>
    {/* <NavItem eventKey={3} href="#">
      <Link id="nav-text" to="workshops" smooth={true}>
        Workshops
      </Link>
    </NavItem> */}
    <NavItem eventKey={4} href="#">
      <Link id="nav-text" to="sponsors" smooth={true}>
        Sponsors
      </Link>
    </NavItem>
    <NavItem eventKey={5} href="#">
      <Link id="nav-text" to="contact" smooth={true}>
        Contact
      </Link>
    </NavItem>
  </Nav>
);

export default NavTabs;
