import React from 'react';
import './Share.scss';

interface Share {
  url: string;
  title: string;
  description: string;
  keywords: string;
  image: string;
}

interface Props {
  share: Share;
  isAlternative?: boolean;
}

const createMedias = (share: Share) => {
  const title = encodeURI(share.title);
  const url = encodeURI(share.url);

  return [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${url}%2F&quote=${title}`,
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?source=${url}%2F&text=${title}`,
    },
    {
      name: 'Reddit',
      url: `http://www.reddit.com/submit?url=${url}%2F&title=${title}`
    },{
      name: 'LinkedIn',
      url: `http://www.linkedin.com/shareArticle?mini=true&url=${url}%2F&title=${title}&summary=Discover%20insights%20about%20your%20career%20based%20on%20statistics%20from%20thousands%20of%20top%20company%20professionals%20worldwide%2C%20it\'s%20totally%20free!&source=https%3A%2F%2Flinkedtales.github.io%2Fsoftware-engineering-experiences%2F`
    }
  ]
}

const Share = ({ share, isAlternative = false } : Props) =>
  <section className={`share ${isAlternative && 'alternative'}`}>
    <div className="share share-text">
      help us do more, please share it!
    </div>
    <ul className="share__buttons">
      {
        createMedias(share).map(({ name, url }, i) =>
          <li key={i}>
            <a href={url} title={`Share on ${name}`} target="_blank" rel="noopener noreferrer">
              <img alt={`Share on ${name}`} src={`assets/social/${name}.svg`} />
            </a>
          </li>
        )
      }
    </ul>
  </section>

export default Share;
