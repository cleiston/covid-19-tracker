import React from 'react';
import {Bar} from 'react-chartjs-2';
import './styles.css';

export default function BarChart({country, countryInfo}) {


const {confirmed, recovered, deaths} = countryInfo;
const data = {
    labels: ['Confirmed', 'Recovered', 'Deaths'],
    datasets: [
      {
        label: country,
        backgroundColor: 'rgba(0,120,132,0.2)',
        borderColor: 'rgba(0,120,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0,120,132,0.4)',
        hoverBorderColor: 'rgba(0,120,132,1)',
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
            maintainAspectRatio: false
        }}
        />
    </div>
    );
}