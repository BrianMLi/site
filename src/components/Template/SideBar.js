import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Brian Li</h2>
        <p><a href="mailto:brianmli3598@gmail.com">brianmli3598@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Brian. I like playing games!
        I graduated from the Sauder School of Business at the University of British Columbia
        with a Combined Major in Business and Computer Science (Honours).
        I am currently working at Electronic Arts as an SE on DRE FIFA.
        Before EA, I worked at SAP as a front-end developer.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Brian Marco Li <Link to="/">brianmli.github.io/site/</Link>.</p>
    </section>
  </section>
);

export default SideBar;
