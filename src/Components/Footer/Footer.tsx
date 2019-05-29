import React from 'react';
import './Footer.scss';

const medias = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flinkedtales.github.io%2Fsoftware-engineering-experiences%2F&quote=Top%20Companies%20Software%20Engineers%20Experiences',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/intent/tweet?source=https%3A%2F%2Flinkedtales.github.io%2Fsoftware-engineering-experiences%2F&text=Top%20Companies%20Software%20Engineers%20Experiences:%20https%3A%2F%2Flinkedtales.github.io%2Fsoftware-engineering-experiences%2F',
  },
  {
    name: 'Reddit',
    url: 'http://www.reddit.com/submit?url=https%3A%2F%2Flinkedtales.github.io%2Fsoftware-engineering-experiences%2F&title=Top%20Companies%20Software%20Engineers%20Experiences'
  },{
    name: 'LinkedIn',
    url: 'http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flinkedtales.github.io%2Fsoftware-engineering-experiences%2F&title=Top%20Companies%20Software%20Engineers%20Experiences&summary=Discover%20insights%20about%20your%20career%20based%20on%20statistics%20from%20thousands%20of%20top%20company%20professionals%20worldwide%2C%20it\'s%20totally%20free!&source=https%3A%2F%2Flinkedtales.github.io%2Fsoftware-engineering-experiences%2F'
  }
]

const Footer = ({ isAlternative = false }) =>
  <div className={`footer ${isAlternative && 'alternative'}`}>
    <div>
      <img src="assets/logo.png" />
      <br />
      <a className="github-button" href="https://github.com/linkedtales/linkedtales.github.io" data-show-count="true" aria-label="Star linkedtales/linkedtales.github.io on GitHub">Star</a>
    </div>
    <div>
      made to engineers by engineers
      <br/>
      <a href="http://linkedtales.github.io" target="_blank">see more of our infographics <br/> linkedtales.github.io</a>
      <br />
    </div>
  </div>

export default Footer;
