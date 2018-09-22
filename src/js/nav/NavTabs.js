import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import { scroller } from 'react-scroll';

function scrollTo(elementToScroll) {
  scroller.scrollTo(elementToScroll, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart'
  });
}

const NavTabs = () => (
  <Nav className="nav-tabs">
    <NavItem
      id="nav-text"
      eventKey={1}
      onClick={() => scrollTo('speaker-previews')}
    >
      Speakers
    </NavItem>
    <NavItem id="nav-text" eventKey={2} onClick={() => scrollTo('schedule')}>
      Schedule
    </NavItem>
    <NavItem id="nav-text" eventKey={3} onClick={() => scrollTo('workshops')}>
      Workshops
    </NavItem>
    <NavItem id="nav-text" eventKey={5} onClick={() => scrollTo('advisors')}>
      Advisors
    </NavItem>
    <NavItem id="nav-text" eventKey={4} onClick={() => scrollTo('sponsors')}>
      Sponsors
    </NavItem>
    <NavItem id="nav-text" eventKey={6} onClick={() => scrollTo('contact')}>
      Contact
    </NavItem>
  </Nav>
);

export default NavTabs;
