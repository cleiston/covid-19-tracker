import React from 'react';
import {Line} from 'react-chartjs-2';

export default function LineChart ({dailyData}){
    const data = {
    labels: dailyData.map(({date}) => date),
    datasets: [
        {
            label: 'Confirmed',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dailyData.map(({confirmed}) => (confirmed))
        },

        {
            label: 'Deaths',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(255,100,100,0.8)',
            borderColor: 'rgba(255,100,100,0.8)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255,100,100,0.8)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255,100,100,0.8)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dailyData.map(({deaths}) => (deaths))
        }
    ]
    };

    return (
        <div>
            <Line data={data} />
        </div>
    );
  
}

