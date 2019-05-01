import React from 'react';
import './Share.less';

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

const Share = () =>
  <div className="share">
    <div className="share share-text">
      Do you liked this project? Please share it on social media and help it grows, we want to do more!
    </div>
    <ul className="share-buttons">
      {
        medias.map(({ name, url }) =>
          <li>
            <a href={url} title={`Share on ${name}`} target="_blank" rel="noopener noreferrer">
              <img alt={`Share on ${name}`} src={`assets/social/${name}.svg`} />
            </a>
          </li>
        )
      }
    </ul>
  </div>

export default Share;
