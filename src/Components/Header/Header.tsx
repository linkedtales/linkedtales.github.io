import React from 'react';
import './Header.scss';

const companies = ['airbnb','apple','aws','facebook',
'google','linkedin','microsoft','netflix','spotify',
'hewlett-packard','booking','oracle','intel','adobe',
'cisco','ibm','uber','zoom','twitter','yahoo']

interface Props {
  subtitle: string
}

const Header : React.FC<{ subtitle: string }>  = ({ subtitle } : Props) =>
  <div className="header">
    <div className="header__title">
      Top companies Software Engineers
    </div>
    <div className="header__subtitle">
      professional experiences
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
  </div>
  
export default Header;
