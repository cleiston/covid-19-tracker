import React from 'react';
import {Bar} from 'react-chartjs-2';
import './styles.css';

export default function BarChart({country, countryInfo}) {


const {confirmed, recovered, deaths} = countryInfo;
const data = {
    labels: ['Confirmed', 'Recovered', 'Deaths'],
    datasets: [
      {
        backgroundColor: ['rgba(100, 100, 255, 0.4)', 'rgba(100, 255, 100, 0.4)', 'rgba(255, 100, 100, 0.4)'],
        borderColor: 'rgba(120,120,120,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(120,120,120,0.4)',
        hoverBorderColor: 'rgba(120,120,120,1)',
        data: [confirmed, recovered, deaths]
      }
    ]
  };

    return (
    <div className="container-barchart">
        <Bar
        data={data}
        width={100}
        height={80}
        options={{
          maintainAspectRatio: false,
          legend: { display: false },
          title: { display: true, text: `Current numbers in ${country}` }
        }}
        />
    </div>
    );
}