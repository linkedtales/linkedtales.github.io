import React from 'react';
import './Chart.scss';

interface Dataset {
  backgroundColor: string
  data: number[]
}

interface Props {
  title: string;
  chartOptions: object;
  isAlternative?: boolean;
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
    const chartOptions = this.props.chartOptions

    //ar ctx = document.getElementById('chart1').getContext('2d');
    const chartDiv = this.chartReference.current;
    
    window.Chart.defaults.global.defaultFontColor = 'white';
    window.Chart.defaults.scale.gridLines.display = false;

    new window.Chart(chartDiv, chartOptions);
  }

  render() {
    return (
      <div className={`chart ${this.props.isAlternative && ' alternative'}`} >
        <canvas id={this.state.chartId.toString()} ref={this.chartReference}></canvas>
      </div>
    );
  }
}

export default Chart;
