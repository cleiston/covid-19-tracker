import React from 'react';
import {Bar} from 'react-chartjs-2';

export default function BarChart({country, countryInfo}) {


const {confirmed, recovered, deaths} = countryInfo;
const data = {
    labels: ['Confirmed', 'Recovered', 'Deaths'],
    datasets: [
      {
        label: country,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [confirmed, recovered, deaths]
      }
    ]
  };

    return (
    <div>
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