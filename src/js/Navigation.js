import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import NavTabs from './NavTabs';

// Styles 
const navigation = {
  background: 'inherit',
  border: 'none',
  textAlign: 'center',
};

const title = {
  color: 'white',
  fontWeight: 'bold',
  letterSpacing: '2px',
}

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

const buttonLink = "https://www.eventbrite.com/e/uw-blockchain-expo-tickets-47000447604";

const Navigation = () => (
  <Navbar style={navigation} inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand className="title" style={title}>
        UW BLOCKCHAIN EXPO
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Text className="date" style={date}>
      Oct 13
      <br />
      <span style={year}>2018</span>
    </Navbar.Text>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem className="button" href={buttonLink}>
          <Button style={button}>Get Tickets</Button>
        </NavItem>
        <NavTabs />
      </Nav> 
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;