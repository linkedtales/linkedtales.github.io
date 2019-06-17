import React from 'react';
import './Footer.scss';

const Footer = ({ isAlternative = false, hasToSeeMore = true }) =>
  <footer className={`footer ${isAlternative && 'alternative'}`}>
    <div>
      <a href="/">
        <img src="/assets/logo.png" alt="logo" />
      </a>
    </div>
    <div>
      made to engineers by engineers
      <br />
      contact: <a href="mailto:linkedtales@gmail.com">linkedtales@gmail.com</a>
      <br/>
      {
        hasToSeeMore &&
        <div>
          <br />
          <a href="/">see more infographics!</a>
        </div>
      }
      
      <div>
        <br/>
        <a href="https://github.com/linkedtales/linkedtales.github.io/">It's open-source, contribute!</a>
        <br /><a className="github-button" href="https://github.com/linkedtales/linkedtales.github.io" data-show-count="true" aria-label="Star linkedtales/linkedtales.github.io on GitHub">Star</a>
      </div>
      
      <br />
      
    </div>
  </footer>

export default Footer;
