import React from 'react';
import { Nav } from 'react-bootstrap';
import { scroller } from 'react-scroll';

function scrollTo(elementToScroll) {
  scroller.scrollTo(elementToScroll, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart'
  });
}

const NavTabs = () => (
  <Nav fill>
    <Nav.Item
      id="nav-text"
      eventKey={1}
      onClick={() => scrollTo('speaker-previews')}
    >
      Speakers
    </Nav.Item>
    <Nav.Item id="nav-text" eventKey={2} onClick={() => scrollTo('schedule')}>
      Schedule
    </Nav.Item>
    <Nav.Item id="nav-text" eventKey={3} onClick={() => scrollTo('workshops')}>
      Workshops
    </Nav.Item>
    <Nav.Item id="nav-text" eventKey={5} onClick={() => scrollTo('advisors')}>
      Advisors
    </Nav.Item>
    <Nav.Item id="nav-text" eventKey={4} onClick={() => scrollTo('sponsors')}>
      Sponsors
    </Nav.Item>
    <Nav.Item id="nav-text" eventKey={6} onClick={() => scrollTo('contact')}>
      Contact
    </Nav.Item>
  </Nav>
);

export default NavTabs;
