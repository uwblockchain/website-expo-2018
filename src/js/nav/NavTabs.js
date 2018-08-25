import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Speakers from '../speakers/Speakers';

function handleSelect(selectedKey) {
  var renderContent; //Used as the out parameter
  switch(selectedKey) {
    case 1:
      renderContent = <Speakers />;
      break;
    case 2:
      renderContent = <div>Workshop Content</div>;
      break;
    case 3:
      renderContent = <div>Sponsor Content</div>;
      break;
    case 4:
      renderContent = <div>Contact Content</div>;
      break;
    default:
      renderContent = <div>No Content</div>
      break;
  }
  //Render the content to the DOM
  ReactDOM.render(renderContent, document.getElementById('content'));
}

var keys = 1;

const NavTab = (props) => (
  <Nav onSelect={handleSelect}>
    <NavItem eventKey={keys++} href="#">
      <div id="nav-text">
        {props.text}
      </div>
    </NavItem>
  </Nav>
);

const NavTabs = () => (
  <Nav>
    <NavTab className="tab" text="Speakers" />
    <NavTab className="tab" text="Workshops" />
    <NavTab className="tab" text="Sponsors" />
    <NavTab className="tab" text="Contact" />
  </Nav>
);

export default NavTabs;
