import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Schedule from '../Schedule';

function handleSelect(selectedKey) {
  var renderContent; //Used as the out parameter
  switch(selectedKey) {
    case 1:
      renderContent = <div>Speaker Content</div>;
      break;
    case 2:
      renderContent = <Schedule />;
      break;
    case 3:
      renderContent = <div>Workshop Content</div>;
      break;
    case 4:
      renderContent = <div>Sponsor Content</div>;
      break;
    case 5:
      renderContent = <div>Contact Content</div>;
      break;
    default:
      renderContent = <div>No Content</div>
      break;
  }
  //Render the content to the DOM
  ReactDOM.render(renderContent, document.getElementById('content'));
}

const NavTabs = () => (
  <Nav onSelect={handleSelect}>
    <NavItem eventKey={1} href="#">
      <div id="nav-text">
        Speakers
      </div>
    </NavItem>
    <NavItem eventKey={2} href="#">
      <div id="nav-text">
        Schedule
      </div>
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
