import React from 'react';
import './VerticalCarousel.scss';

interface Props {
  items: any[];
  background: string;
}

const VerticalCarousel = ({ items, background }: Props) =>
  <div className="vertical-carousel">
    <div className="vertical-carousel__title">
      a title
    </div>
    <div className="vertical-carousel__parallax" style={{backgroundImage: `url(assets/${background})`}}>
      {
        items.map(({ image, title, subtitle }, i) => (
          <div className="vertical-carousel__parallax__item" key={i}>
            <img src={`assets/${image}.png`} alt={image} />
            <div className="title">{ title }</div>
            <div className="subtitle">{ subtitle }</div>
          </div>
        ))
      }
    </div>
  </div>

export default VerticalCarousel;
