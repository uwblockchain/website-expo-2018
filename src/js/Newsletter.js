import '../css/App.css';
import React from 'react';

const formURL = "https://docs.google.com/forms/d/e/1FAIpQLScop3n8W-Agyc9McdWQJL74PGGpSoA3WJfTJHhL1M2dG-ArHw/formResponse?";

const Newsletter = () => (
  <div className="Newsletter">
    <h2 className="newsletter-text">
      Join our mailing list
      <br />
      to receive expo updates:
    </h2>
    <div className="form newsletter-form">
      <form name="gform" id="gform" encType="text/plain" action={formURL}>
        <input type="text" name="entry.1619487764" id="entry.1619487764" placeholder="example@email.com"/>
          
        <input type="submit" value="SUBMIT" className="btn-hero" />
      </form>
    </div>
  </div>
);

export default Newsletter;
