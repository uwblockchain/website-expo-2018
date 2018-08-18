import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import ReactDOM from 'react-dom';

// Styles 
const textStyle = {
  color: 'white',
};

function handleSelect(selectedKey) {
  var renderContent; //Used as the out parameter
  switch(selectedKey) {
    case 1:
      renderContent = <div>Speaker Content</div>;
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
  <NavItem className="tab" eventKey={keys++} href="#">
    <div style={textStyle}>
      {props.text}
    </div>
  </NavItem>
  </Nav>
);

const NavTabs = () => (
  <Nav onSelect={handleSelect}>
    <NavTab text="Speakers" />
    <NavTab text="Workshops" />
    <NavTab text="Sponsors" />
    <NavTab text="Contact" />
  </Nav>
);

export default NavTabs;
