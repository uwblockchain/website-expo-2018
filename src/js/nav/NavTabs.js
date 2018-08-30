import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavTabs = () => (
  <Nav>
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
    <NavItem eventKey={3} href="#">
      <div id="nav-text">
        Workshops
      </div>
    </NavItem>
    <NavItem eventKey={4} href="#">
      <div id="nav-text">
        Sponsors
      </div>
    </NavItem>
    <NavItem eventKey={5} href="#">
      <div id="nav-text">
        Contact
      </div>
    </NavItem>
  </Nav>
);

export default NavTabs;
