import React from 'react';
import Header from './Components/Header/Header';
import Share from './Components/Share/Share';
import './App.scss';
import VerticalCarousel from './Components/VerticalCarousel/VerticalCarousel';
import Ranking from './Components/Ranking/Ranking';

const items = [
  { image: "calendar", title: "ae", subtitle: "opa" },
  { image: "baby", title: "ole", subtitle: "opa" }
]

const rankingItems = [
  {
    title: "duduu",
    subitems: [
      { company: "airbnb", number: "45" },
      { company: "airbnb", number: "45" },
      { company: "airbnb", number: "45" }
    ]
  },
  {
    title: "daaa",
    subitems: [
      { company: "google", number: "45" },
      { company: "google", number: "45" },
      { company: "google", number: "45" }
    ]
  }
]

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Share />
      <VerticalCarousel items={items} background={"background.jpg"} />
      <Ranking title={"olear"} image={"baby.png"} items={rankingItems} />
    </div>
  );
}

export default App;
