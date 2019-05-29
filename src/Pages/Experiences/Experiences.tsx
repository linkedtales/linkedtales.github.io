import React from 'react';
import Chart from '../../Components/Chart/Chart';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Share from '../../Components/Share/Share';
import Ranking from '../../Components/Ranking/Ranking';
import RankingMini from '../../Components/RankingMini/RankingMini';
import Tip from '../../Components/Tip/Tip';
import VerticalCarousel from '../../Components/VerticalCarousel/VerticalCarousel';

import './Experiences.scss';

const title = 'professional experiences'
const subtitle = 'What do their jobs on the <strong>best companies</strong> show us?'
const items = [
  {
    image: "calendar",
    title: "30 months",
    subtitle: "Is the average time on past experience,<br/>The average of all past experiences are <br/><strong>25 months</strong>."
  },
  {
    image: "building",
    title: "4.6 companies",
    subtitle: "Is the average number of past experiences,<br/>only <strong>14%</strong> has less than <strong>3 experiences</strong> and<br/><strong>50%</strong> has more than <strong>5 experiences</strong>."
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
      title: "average excluding the first 2 years",
      subitems: [
        { company: "intel", number: "35", arrow: "up" },
        { company: "linkedin", number: "35", arrow: "down" },
        { company: "facebook", number: "37", arrow: "up" },
        { company: "booking", number: "38", arrow: "down" },
        { company: "airbnb", number: "40", arrow: "up" },
      ]
    }
  ]
}

const lowStayRankingTip = 'Excluding the first 2 years from the average show us companies where top-company engineers don\'t leave too early but don\'t stay for much longer as well.'
const highStayRankingTip = 'The total average is inflated by engineers which stayed almost a decade on the company, removing them we have a better average.'
const averageYearsChartTip = 'Top-company engineers stay 50% more in the first 2 years at top-companies, in addition, they also stay longer in the long term compared to non-top companies.'
const averageMonthsChartTip = 'Although engineers are known for not staying much longer in a company, they stay more and more at each new job.'

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
      title: "average excluding more than 60 months",
      subitems: [
        { company: "twitter", number: "31", arrow: "-" },
        { company: "oracle", number: "29", arrow: "up" },
        { company: "uber", number: "27", arrow: "up" },
        { company: "adobe", number: "25", arrow: "-" },
        { company: "netflix", number: "24", arrow: "down" },
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

const lowStayRankingMini = {
  title: '% of top-company engineers departures before 1 year',
  items: [
    { company: 'hewlett-packard', number: '54' },
    { company: 'microsoft', number: '48' },
    { company: 'zoom', number: '46' },
    { company: 'intel', number: '44' }
  ]
}

const highStayRankingMini = {
  title: '% of top-company engineers which stayed more than 60 months',
  items: [
    { company: 'netflix', number: '26' },
    { company: 'twitter', number: '23' },
    { company: 'apple', number: '21' },
    { company: 'google', number: '19' }
  ]
}

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header title={title} subtitle={subtitle} />
      <VerticalCarousel items={items} background={"background.jpg"} />
      <Ranking {...lowStayRanking} image={"baby.png"}  />
      <Tip text={lowStayRankingTip} />
      <RankingMini {...lowStayRankingMini} />
      <Ranking {...highStayRanking} image={"old.png"} isAlternative={true} />
      <Tip text={highStayRankingTip} isAlternative={true}/>
      <RankingMini {...highStayRankingMini} isAlternative={true} />
      <Chart {...averageYearsChart} />
      <Tip text={averageYearsChartTip}/>
      <Chart {...averageMonthsChart} isAlternative={true} />
      <Tip text={averageMonthsChartTip} isAlternative={true}/>
      <Footer />
      <Share isAlternative={true}  />
      
    </div>
  );
}

export default App;
