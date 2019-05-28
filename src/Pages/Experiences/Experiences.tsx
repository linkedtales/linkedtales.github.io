import React from 'react';
import Header from '../../Components/Header/Header';
import Share from '../../Components/Share/Share';
import VerticalCarousel from '../../Components/VerticalCarousel/VerticalCarousel';
import Ranking from '../../Components/Ranking/Ranking';
import Chart from '../../Components/Chart/Chart';

import './Experiences.scss';

const subtitle = 'What previous jobs from best sotware engineering companies show us?'
const items = [
  {
    image: "calendar",
    title: "30 months",
    subtitle: "Is the average time on past experience, The average of all past experiences is 25 months."
  },
  {
    image: "baby",
    title: "4.6 companies",
    subtitle: "Is the average number of past experiences, only 14% has less than 3 experiences and 50% has more than 5 experiences."
  },
  { 
    image: "people",
    title: "18% worked at Google or Microsoft",
    subtitle: "These are the most common background among top-company professionals."
  }
]

const lowStayRanking = {
  title: 'Companies where engineers doesn\'t stay for too long...',
  items: [
    {
      title: "average months",
      subitems: [
        { company: "linkedin", number: "15" },
        { company: "hewlett-packard", number: "16" },
        { company: "booking", number: "17" },
        { company: "intel", number: "17" },
        { company: "zoom", number: "18" }
      ]
    },
    {
      title: "average months excluding the first 2 years",
      subitems: [
        { company: "intel", number: "35" },
        { company: "linkedin", number: "35" },
        { company: "facebook", number: "37" },
        { company: "booking", number: "38" },
        { company: "airbnb", number: "40" },
      ]
    }
  ]
}

const highStayRanking = {
  title: 'Companies where engineers stays more',
  items: [
    {
      title: "average months",
      subitems: [
        { company: "twitter", number: "15" },
        { company: "netflix", number: "16" },
        { company: "google", number: "17" },
        { company: "adobe", number: "17" },
        { company: "apple", number: "18" }
      ]
    },
    {
      title: "average months excluding more than 60 months",
      subitems: [
        { company: "twitter", number: "31" },
        { company: "oracle", number: "29" },
        { company: "uber", number: "27" },
        { company: "adobe", number: "25" },
        { company: "netflix", number: "24" },
      ]
    }
  ]
}

const averageYearsChart =  {
  title: 'Average years working on past companies',
  chartOptions: {
    type: 'line',
    data: {
        labels: ["", "1", "", "2", "", "3", "", "4", "", "5", "5+"],
        datasets: [{
            label: '% on top companies',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            data: [7,16,16,13,10,9,6,6,3,5,12]
        },{
            label: '% on non-top companies',
            backgroundColor: 'rgba(255, 0, 0, 1)',
            data: [22,21,17,9,7,6,4,2,2,2,5]
        }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        position: 'bottom'
      }
    }
  }
}

const averageMonthsChart = {
  title: 'Average months working on past companies',
  chartOptions: {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
        labels: ["last", "2nd last", "3rd last", "4th last", "5th last"],
        datasets: [{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            data: [30, 26, 21, 18, 18]
        }],
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
          yAxes: [{
              ticks: {
                  min: 0
              }
          }]
      }
    }
  }
}

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header subtitle={subtitle} />
      <VerticalCarousel items={items} background={"background.jpg"} />
      <Ranking {...lowStayRanking} image={"baby.png"}  />
      <Ranking {...highStayRanking} image={"old.png"} isAlternative={true} />
      <Chart {...averageYearsChart} />
      <Chart {...averageMonthsChart} isAlternative={true} />
      <Share />
    </div>
  );
}

export default App;
