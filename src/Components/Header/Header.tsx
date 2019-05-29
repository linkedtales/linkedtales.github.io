import React from 'react';
import './Header.scss';

const companies = ['airbnb','apple','aws','facebook',
'google','linkedin','microsoft','netflix','spotify',
'hewlett-packard','booking','oracle','intel','adobe',
'cisco','ibm','uber','zoom','twitter','yahoo']

interface Props {
  title: string;
  subtitle: string;
}

const Header : React.FC<Props>  = ({ title, subtitle } : Props) =>
  <div className="header">
    <div className="header__title title">
      Top Software Engineer
    </div>
    <div className="header__subtitle">
      {title}
    </div>
    <div className="header__companies">
      {
        [companies.slice(0, companies.length / 2),
         companies.slice(companies.length / 2)]
        .map((companiesGroup, i) =>
          (<div className="header__companies__group" key={i}>
          {
            companiesGroup.map((company, j) =>
              (<img src={`assets/companies/${company}.png`} alt={company} key={`${i}-${j}`} />))
          }
          </div>))
      }
    </div>
    <div className="header__headline" dangerouslySetInnerHTML={{__html: subtitle }} />
  </div>
  
export default Header;
