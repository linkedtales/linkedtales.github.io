import React, { useEffect } from 'react'
import 'chart.js'
import './VerticalCarousel.scss'

interface Props {
  items: any[];
  background: string;
}

const VerticalCarousel: React.FC<Props> = ({ items, background } : Props) => {
  const parallaxRef = React.useRef<HTMLDivElement>(null)
  useEffect(() => {
    const e1 = parallaxRef.current;
    const TOP_OFFSET = 600
    const setBackgroundValue = (value: number) => {
      if(e1)
        e1.style.backgroundPositionY = value - TOP_OFFSET + "px"
    }
    setBackgroundValue(0)
    document.onscroll = () => {
      const scrollSize = window.scrollY;
      setBackgroundValue(scrollSize)
    }    
  })

  return <section className="vertical-carousel">
    <div className="vertical-carousel__parallax" ref={parallaxRef} style={{backgroundImage: `url(assets/${background})`}}>
      {
        items.map(({ image, title, subtitle }, i) => (
          <div className="vertical-carousel__parallax__item" key={i}>
            <img src={`assets/${image}.png`} alt={image}/>
            <div className="title">{ title }</div>
            <div className="subtitle" dangerouslySetInnerHTML={{__html: subtitle }} />
          </div>
        ))
      }
    </div>
  </section>
}

export default VerticalCarousel;
