import React from 'react';
import Header from '../../Components/Header/Header';
import Share from '../../Components/Share/Share';
import VerticalCarousel from '../../Components/VerticalCarousel/VerticalCarousel';
import Ranking from '../../Components/Ranking/Ranking';
import Chart from '../../Components/Chart/Chart';

import './Experiences.scss';

const items = [
  { image: "calendar", title: "30 months", subtitle: "Is the average time on past experience, The average of all past experiences is 25 months." },
  { image: "baby", title: "4.6 companies", subtitle: "Is the average number of past experiences, only 14% has less than 3 experiences and 50% has more than 5 experiences." },
  { image: "people", title: "18% worked at Google or Microsoft", subtitle: "These are the most common background among top-company professionals." }
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
    <div className="wrapper">
      <Header subtitle="ople" />
      <VerticalCarousel items={items} background={"background.jpg"} />
      <Ranking title={"olear"} image={"baby.png"} items={rankingItems} />
      <Chart {...chart} />
      <Share />
    </div>
  );
}

export default App;
