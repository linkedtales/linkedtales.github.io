import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

import Footer from '../../Components/Footer/Footer';


import './Index.scss';
import Share from '../../Components/Share/Share';

const share = {
  url: 'https://linkedtales.github.io/',
  title: 'LinkedTales',
  description: 'Discover free insights about your career based on statistics from thousands of top company professionals worldwide.',
  image: 'https://linkedtales.github.io/assets/experiences.png'
}

const Index: React.FC = () =>
  <div className="wrapper">
    <Helmet>
      <title>LinkedTales - Top Software Engineer Professional Experiences</title>
      <meta name="title" content="LinkedTales - Inisghts for your career" />
      <meta name="description" content="Discover insights about your career based on statistics from thousands of top company professionals worldwide, it's totally free!" />
      <meta name="keywords" content="statistics, company, career, profession, infographic" />
    
      <meta property="og:url" content={share.url} />
      <meta property="og:title" content={share.title} />
      <meta property="og:description" content={share.description} />
      <meta property="og:image" content={share.image} />

      <meta property="twitter:url" content={share.url} />
      <meta property="twitter:title" content={share.title} />
      <meta property="twitter:description" content={share.description} />
      <meta property="twitter:image" content={share.image} />
    </Helmet>
    <header>
      <div className="index__header">
        <div className="index__header__logo alternative">
          <img src={"/assets/logo.png"} alt="logo"/>
        </div>
      </div>
      <div className="index__body alternative">
        <div className="index__body__text">
          The best insights for your carrer development from professionals worldwide!
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
        </ul>
      </nav>
    </main>
    <Share />
    <Footer hasToSeeMore={false}  isAlternative={true} />
  </div>

export default Index;
