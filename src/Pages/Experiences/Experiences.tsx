import React from 'react';
import Header from '../../Components/Header/Header';
import Share from '../../Components/Share/Share';
import VerticalCarousel from '../../Components/VerticalCarousel/VerticalCarousel';
import Ranking from '../../Components/Ranking/Ranking';
import Chart from '../../Components/Chart/Chart';

import './Experiences.scss';

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

const chart = {
  type: 'bar',
  
  labels: ["last", "2nd last", "3rd last", "4th last", "5th last"],
  datasets: [{
    backgroundColor: 'rgba(255, 255, 255, 1)',
    data: [30, 26, 21, 18, 18]
  }],
  displayLegend: true,
  legendPosition: 'bottom'
}

const App: React.FC = () => {
  return (
    <div className="app">
      <Header subtitle="ople" />
      <Share />
      <VerticalCarousel items={items} background={"background.jpg"} />
      <Ranking title={"olear"} image={"baby.png"} items={rankingItems} />
      <Chart {...chart} />
    </div>
  );
}

export default App;
