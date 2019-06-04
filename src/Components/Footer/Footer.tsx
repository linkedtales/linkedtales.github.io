import React from 'react';
import './Footer.scss';

const Footer = ({ isAlternative = false, hasToSeeMore = true }) =>
  <footer className={`footer ${isAlternative && 'alternative'}`}>
    <div>
      <img src="assets/logo.png" alt="logo" />
      <br />
      <a className="github-button" href="https://github.com/linkedtales/linkedtales.github.io" data-show-count="true" aria-label="Star linkedtales/linkedtales.github.io on GitHub">Star</a>
    </div>
    <div>
      made to engineers by engineers
      <br/>
      {
        hasToSeeMore &&
        <a href="http://linkedtales.github.io">see more of our infographics <br/> linkedtales.github.io</a>
      }
      <br />
    </div>
  </footer>

export default Footer;
