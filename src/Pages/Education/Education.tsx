import React from 'react';

import SEO from '../../Components/SEO/SEO';
import Chart from '../../Components/Chart/Chart';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Share from '../../Components/Share/Share';
import Ranking from '../../Components/Ranking/Ranking';
import Tip from '../../Components/Tip/Tip';
import VerticalCarousel from '../../Components/VerticalCarousel/VerticalCarousel';

import './Education.scss';

const title = 'Professional Education'
const subtitle = 'What do education from <strong>best company</strong> employees show us?'
const items = [
  {
    image: "education",
    title: "5 years",
    subtitle: "Is the average professional education time."
  },
  {
    image: "master",
    title: "32%",
    subtitle: "Has a <strong>master</strong> degree."
  },
  { 
    image: "books",
    title: "1.6 courses done",
    subtitle: "Is the average declared number.<br />The average of other professionals is <strong>1.2</strong>"
  }
]

const lowStayRanking = {
  title: 'Companies with the highest education average',
  items: [
    {
      title: "average years",
      subitems: [
        { company: "booking", number: "5.5" },
        { company: "hewlett-packard", number: "5.5" },
        { company: "intel", number: "5.3" },
        { company: "linkedin", number: "5.1" },
        { company: "aws", number: "5" }
      ]
    },
    {
      title: "average excluding more than 10 years",
      subitems: [
        { company: "booking", number: "5.3", arrow: "-" },
        { company: "yahoo", number: "5.2", arrow: "up" },
        { company: "twitter", number: "5.1", arrow: "up" },
        { company: "google", number: "5.1", arrow: "up" },
        { company: "hewlett-packard", number: "4.9", arrow: "down" },
      ]
    }
  ]
}

const rankingTip = 'Excluding professionals with more than 10 years declared education may bring us a more realistic average'
const averageYearsChartTip = 'Non-top company professionals focus more on short duration courses and stay at most on 6 years compared to top companies professionals.'

const highStayRanking = {
  title: 'Companies with the lowest education average',
  items: [
    {
      title: "average months",
      subitems: [
        { company: "zoom", number: "4.4" },
        { company: "adobe", number: "4.5" },
        { company: "airbnb", number: "4.5" },
        { company: "ibm", number: "4.5" },
        { company: "uber", number: "4.7" }
      ]
    },
    {
      title: "average excluding more than 10 years",
      subitems: [
        { company: "intel", number: "4.2", arrow: "up" },
        { company: "zoom", number: "4.5", arrow: "down" },
        { company: "ibm", number: "4.5", arrow: "up" },
        { company: "cisco", number: "4.5", arrow: "up" },
        { company: "oracle", number: "4.6", arrow: "up" },
      ]
    }
  ]
}

const averageYearsChart =  {
  title: 'Average years of the education distribution',
  chartOptions: {
    type: 'line',
    data: {
        labels: ["0-2", "3", "4", "5", "6", "7-8", "9-10", "10+"],
        datasets: [{
            label: '% on top companies',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            data: [1,4,17,13,14,8,4,0.7]
        },{
            label: '% on non-top companies',
            backgroundColor: 'rgba(255, 0, 0, 1)',
            data: [3,6,17,15,15,3,4,2,0.9]
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
  title: 'Distribution of education degree',
  chartOptions: {
    // The type of chart we want to create
    type: 'pie',
    // The data for our dataset
    data: {
        datasets: [{
            data: [63.7,32.4,3.8],
            backgroundColor: [
              'rgba(255, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(0, 0, 255, 0.5)'
            ],
            
        }],
        labels: ['Barchelor', 'Master', 'PhD / Doctor']
       
        
    },
    options: {
      legend: {
        position: 'bottom'
      }
    }
  }
}

const share = {
  url: 'https://linkedtales.github.io/software-engineering-experiences',
  title: 'Top Companies Software Engineers Education',
  description: 'Discover free insights about your career based on statistics from thousands of top company professionals worldwide.',
  keywords: 'professionals, experiences',
  image: 'https://linkedtales.github.io/assets/experiences.png'
}

const App: React.FC = () =>
  <main className="wrapper">
    <SEO share={share} />

    <Header title={title} subtitle={subtitle} />
    <VerticalCarousel items={items} background={"background-education.jpg"} />
    <Ranking {...lowStayRanking} image={"teacher.png"}  />
    <Tip text={rankingTip} />
    <Ranking {...highStayRanking} image={"nerd.png"} isAlternative={true} />
    
    <Chart {...averageYearsChart} />
    <Tip text={averageYearsChartTip}/>
    <Chart {...averageMonthsChart} isAlternative={true} />

    <Share share={share} />
    <Footer isAlternative={true}  />
    
  </main>


export default App;
