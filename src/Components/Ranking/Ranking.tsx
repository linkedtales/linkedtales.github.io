import React from 'react';
import './Ranking.scss';

const Ranking = ({ title, image, items } : { title: string, image: string, items: any[] }) =>
  <div className="ranking">
    <div className="ranking__title">
      <img src={`assets/${image}`} />
      { title }
    </div>
    {
      items.map(({ title, subitems} : { title: string, subitems: any[]}) =>
        <div className="ranking__table">
          <div className="ranking__table__title">{ title }</div>
          {
            subitems.map(({ company, number } : { company: string, number: string}, i: number) =>
              <div className="ranking__table__item">
                <img className="ranking__table__item__image" src={`assets/companies/${company}.png`} />
                <div className="ranking__table__item__number">{ number }</div>
              </div>
            )
          }
        </div>
      )
    }
  </div>
  
export default Ranking;
