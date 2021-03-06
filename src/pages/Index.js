import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Brian's personal website. UBC Sauder School of Business graduate, "
    + 'combined Major in Business and Computer Science.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A personalized website for everything about Brian and the things he loves .
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        read my <a rel="noreferrer" target="_blank" href="https://brianmli.medium.com/">blog</a>, {' '}
        or <Link to="/contact">contact</Link> me. {' '}
        Credit to <a rel="noreferrer" target="_blank" href="https://github.com/mldangelo/personal-site">Michael</a> for the template.
      </p>
      <p> My source code available <a rel="noreferrer" target="_blank" href="https://github.com/BrianMLi/site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
