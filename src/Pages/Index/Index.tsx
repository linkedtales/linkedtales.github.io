import React from 'react';
import { Link } from "react-router-dom";

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


import './Index.scss';
import Share from '../../Components/Share/Share';

const Index: React.FC = () =>
  <div className="wrapper">
    <div className="index__header">
      <div className="index__header__logo alternative">
        <img src={"/assets/logo.png"}/>
      </div>
    </div>
    <div className="index__body alternative">
      <div className="index__body__text">
        We bring the best insights for carrer development from professionals worldwide!
      </div>
      <div className="index__body__image">
        <img src={"/assets/people.png"}/>
      </div>
    </div>
    <div className="index__list">
      <strong>Published Articles:</strong>
      <ul>
        <li>
          <Link to="/">Professional Title / Headline</Link>
        </li>
        <li>
          <Link to="/">Description / Summary</Link>
        </li>
        <li>
          <Link to="/software-engineer-professional-experiences">Professional Experiences</Link>
        </li>
        <li>
          <Link to="/">Education</Link>
        </li>
        <li>
          <Link to="/">Recommendations</Link>
        </li>
        <li>
          <Link to="/">Skills</Link>
        </li>
      </ul>
    </div>
    <Share isAlternative={true} />
    <Footer hasToSeeMore={false} />
  </div>

export default Index;
