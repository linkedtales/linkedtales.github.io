import React from 'react';
import './Ranking.scss';

interface Props {
  title: string;
  image: string;
  items: any[];
  isAlternative?: boolean;
}

const Ranking = ({ title, image, items, isAlternative = false } : Props) =>
  <section className={`ranking${isAlternative && ' alternative'}`}>
    <div className="ranking__title title">
      <div className="ranking__title__text">
        { title }
      </div>
      <div className="ranking__title__image" >
        <img src={`assets/${image}`} alt={image}  />
      </div>      
    </div>
    <div className="ranking__content">
      {
        items.map(({ title, subitems} : { title: string, subitems: any[]}, i: number) =>
          <div className="ranking__content__table" key={i}>
            <div className="ranking__content__table__title">{ title }</div>
            {
              subitems.map(({ company, number, arrow } : { company: string, number: string, arrow: string}, j: number) =>
                <div className="ranking__content__table__item" key={`${i}-${j}`}>
                  {
                    (arrow === "-")
                      ? <span className="ranking__content__table__item__arrowimage">-</span>
                      : (arrow)
                        ? <img src={`assets/${arrow}.png`} className="ranking__content__table__item__arrowimage" alt={`${arrow} arrow`}/> 
                        : <span className="ranking__content__table__item__numeral">#{j}</span>
                  }
                  <img className="ranking__content__table__item__image border" src={`assets/companies/${company}.png`} alt={company} />
                  <div className="ranking__content__table__item__number">
                    { number }
                  </div>
                </div>
              )
            }
          </div>
        )
      }
    </div>
  </section>
  
export default Ranking;
