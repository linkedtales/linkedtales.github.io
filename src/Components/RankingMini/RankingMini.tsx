import React from 'react';
import './RankingMini.scss';

interface Props {
  title: string;
  items: any[];
  isAlternative?: boolean;
}

const RankingMini = ({ title, items, isAlternative = false } : Props) =>
  <section className={`rankingmini ${isAlternative && ' alternative'}`}>
    <div className="rankingmini__title title">
      <div className="detail">% of top-company engineers which stayed more than 60 months</div>
    </div>
    <div className="rankingmini__ranking">     
      {
        items.map(({ company, number } : {company: string, number: string}) =>
          <div className="rankingmini__ranking__item">
            <img src={`assets/companies/${company}.png`} className="border" alt={company} />
            <div>{number} %</div>
          </div>
        ) 
      } 
    </div>
  </section>
  
export default RankingMini;
