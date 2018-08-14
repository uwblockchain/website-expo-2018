import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';


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

const Navigation = () => (
  <Navbar className="main-navbar" inverse fluid collapseOnSelect>
    <Navbar.Header left >
      <Navbar.Brand>
          <p id="nav-brand">UW BLOCKCHAIN EXPO</p>
      </Navbar.Brand>
      <div className="pull-left">
      <Navbar.Text pullLeft id="nav-date">
        Oct 13
        <br />
        <span id="nav-year">2018</span>
      </Navbar.Text>
      </div>
    </Navbar.Header>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem className="button" href="https://www.eventbrite.com/e/uw-blockchain-expo-tickets-47000447604">
          <Button>Get Tickets</Button>
        </NavItem>
        <Nav onSelect={handleSelect}>
          <NavItem className="tab" eventKey={1} href="#">
            <div id="nav-text">
              Speakers
            </div>
          </NavItem>
          <NavItem className="tab" eventKey={2} href="#">
            <div id="nav-text">
              Workshops
            </div>
          </NavItem>
          <NavItem className="tab" eventKey={3} href="#">
            <div id="nav-text">
              Sponsors
            </div>
          </NavItem>
          <NavItem className="tab" eventKey={4} href="#">
            <div id="nav-text">
              Contact
            </div>
          </NavItem>
        </Nav>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;