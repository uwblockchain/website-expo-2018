import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Tab = (props) => (
  <NavItem eventKey={props.key} href="#">
    <Link id="nav-text" to={props.to} smooth={true}>
      {props.name}
    </Link>
  </NavItem>
);

const NavTabs = () => (
  <Nav>
    <Tab key={1} name="Speakers" to="speaker-previews" />
    <Tab key={2} name="Schedule" to="schedule" />
    <Tab key={3} name="Workshops" to="none" />
    <Tab key={4} name="Sponsors" to="none" />
    <Tab key={5} name="Contact" to="none" />
  </Nav>
);

export default NavTabs;
