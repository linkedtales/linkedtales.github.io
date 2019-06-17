import React from 'react';
import { Link } from "react-router-dom";

import SEO from '../../Components/SEO/SEO';
import Footer from '../../Components/Footer/Footer';

import './Index.scss';
import Share from '../../Components/Share/Share';

const share = {
  url: 'https://linkedtales.github.io/',
  title: 'LinkedTales',
  description: 'Discover free insights about your career based on statistics from thousands of top company professionals worldwide.',
  keywords: 'professionals, experiences',
  image: 'https://linkedtales.github.io/assets/experiences.png'
}

const Index: React.FC = () =>
  <div className="wrapper">
    <SEO share={share} />
    <header>
      <div className="index__header">
        <div className="index__header__logo alternative">
          <img src={"/assets/logo.png"} alt="logo"/>
        </div>
      </div>
      <div className="index__body alternative">
        <div className="index__body__text">
          The best insights for your carrer development from top company professionals worldwide!
        </div>
        <div className="index__body__image">
          <img src={"/assets/people.png"} alt="people" />
        </div>
      </div>
    </header>
    <main className="index__list">
      <strong>Published Articles:</strong>
      <nav>
        <ul>
          <li>
            <Link to="/software-engineer-professional-experiences">Professional Experiences</Link>
          </li>
          <li>
            <Link to="/software-engineer-education">Professional Education</Link>
          </li>
        </ul>
      </nav>
    </main>
    <Share share={share} />
    <Footer hasToSeeMore={false}  isAlternative={true} />
  </div>

export default Index;
