import React from 'react';
import { NavButton } from '../nav/Navigation';

const Footer = () => (
  <div className="footer" style={{background: 'black'}}>
    <p style={{color: 'white'}}>
      Copyright © 2018 Blockchain Society at the UW
      <br />
      info@blockchainsocietyuw.com
    </p>
    <NavButton />
  </div>
);

export default Footer;
