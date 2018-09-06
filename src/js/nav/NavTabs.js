import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import { scroller } from 'react-scroll';

export default class NavTabs extends React.Component {

  scrollTo(elementToScroll) {
    scroller.scrollTo(elementToScroll, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  render() {
    return(
      <Nav className="nav-tabs">
        <NavItem id="nav-text" eventKey={1} onClick={() => this.scrollTo('speaker-previews')}>
          Speakers
        </NavItem>
        <NavItem id="nav-text" eventKey={2} onClick={() => this.scrollTo('schedule')}>
          Schedule
        </NavItem>
        <NavItem id="nav-text" eventKey={3} onClick={() => this.scrollTo('workshops')}>
          Workshops
        </NavItem>
        <NavItem id="nav-text" eventKey={4} onClick={() => this.scrollTo('sponsors')}>
          Sponsors
        </NavItem>
        <NavItem id="nav-text" eventKey={5} onClick={() => this.scrollTo('contact')}>
          Contact
        </NavItem>
      </Nav>
    );
  }
};