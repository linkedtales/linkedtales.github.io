import React from 'react';
import './Chart.scss';

interface Dataset {
  backgroundColor: string
  data: number[]
}

interface Props {
  type: string;
  labels: string[];
  datasets: Dataset[],
  displayLegend: boolean,
  legendPosition: string
};

declare global {
  interface Window {
    Chart: any;
  }
}

class Chart extends React.Component<Props> {
  state = {
    chartId: Math.floor(Math.random() * 100000)
  };

  chartReference = React.createRef<HTMLCanvasElement>()

  componentDidMount() {
    const chartOptions = {
      type: this.props.type,
      data: {
        labels: this.props.labels,
        datasets: this.props.datasets
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: this.props.displayLegend || true,
          position: this.props.legendPosition || 'undefined'
        }
      }
    }

    //ar ctx = document.getElementById('chart1').getContext('2d');
    const chartDiv = this.chartReference.current;
    new window.Chart(chartDiv, chartOptions);

  }

  render() {
    return (
      <div className="chart" >
        <canvas id={this.state.chartId.toString()} ref={this.chartReference}></canvas>
      </div>
    );
  }
}

export default Chart;
