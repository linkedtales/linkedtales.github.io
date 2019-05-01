import React from 'react';
import './Header.scss';

const companies = ['airbnb','apple','aws','facebook',
'google','linkedin','microsoft','netflix','spotify',
'hewlett-packard','booking','oracle','intel','adobe',
'cisco','ibm','uber','zoom','twitter','yahoo']

const Header = () =>
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
        .map((companiesGroup) =>
          (<div className="header__companies__group">
          {
            companiesGroup.map((company) =>
              (<img src={`assets/companies/${company}.png`} alt={company} />))
          }
          </div>))
      }
    </div>
  </div>
  
export default Header;
