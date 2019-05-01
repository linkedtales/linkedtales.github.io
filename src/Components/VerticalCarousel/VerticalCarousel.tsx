import React from 'react';
import './VerticalCarousel.scss';

const VerticalCarousel = ({ items, background }: { items: any[], background: string }) =>
  <div className="vertical-carousel">
    <div className="vertical-carousel__title">
      a title
    </div>
    <div className="vertical-carousel__parallax" style={{backgroundImage: `url(assets/${background})`}}>
      {
        items.map(({ image, title, subtitle }) => (
          <div className="vertical-carousel__parallax__item">
            <img src={`assets/${image}.png`} alt={image} />
            <div className="title">{ title }</div>
            <div className="subtitle">{ subtitle }</div>
          </div>
        ))
      }
    </div>
  </div>

export default VerticalCarousel;
