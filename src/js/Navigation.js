import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

const navigation = {
  background: 'inherit',
  border: 'none',
  textAlign: 'center',
};

const title = {
  color: 'white',
  fontWeight: 'bold',
}

const text = {
  color: 'white',
};

const date = {
  color: 'white',
  textAlign: 'center',
}

const year = {
  fontSize: '150%',
}

const button = {
  background: 'inherit', 
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

const Navigation = () => (
  <Navbar style={navigation} inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand style={title}>
        UW BLOCKCHAIN EXPO
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Text style={date}>
      Oct 13
      <br />
      <span style={year}>2018</span>
    </Navbar.Text>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem href="https://www.eventbrite.com/e/uw-blockchain-expo-tickets-47000447604">
          <Button style={button}>Get Tickets</Button>
        </NavItem>
        <Nav onSelect={handleSelect}>
          <NavItem className="tab" eventKey={1} href="#">
            <div style={text}>
              Speakers
            </div>
          </NavItem>
          <NavItem className="tab" eventKey={2} href="#">
            <div style={text}>
              Workshops
            </div>
          </NavItem>
          <NavItem className="tab" eventKey={3} href="#">
            <div style={text}>
              Sponsors
            </div>
          </NavItem>
          <NavItem className="tab" eventKey={4} href="#">
            <div style={text}>
              Contact
            </div>
          </NavItem>
        </Nav>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;