import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import './styles.css';

export default function SimpleCard({countryInfo, country}) {

  let countryName = country === '' ? 'Globally' : `in ${country}`;
  const {confirmed, recovered, deaths, lastUpdate} = countryInfo;
  return (
    <div className="card-container">
    <Card className="root confirmed">
      <CardContent>
        <Typography className="title" color="textSecondary" gutterBottom>
          Confirmed
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp
          start={0}
          end={ confirmed ? confirmed: 0}
          duration={2.75}
          separator=" "
        />
        </Typography>
        <Typography className="pos" color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
            Number of COVID-19 confirmed cases {countryName}
        </Typography>
      </CardContent>
    </Card>

    <Card className="root recovered">
      <CardContent>
        <Typography className="title" color="textSecondary" gutterBottom>
          Recovered
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp
          start={0}
          end={ recovered ? recovered: 0}
          duration={2.75}
          separator=" "
        />
        </Typography>
        <Typography className="pos" color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          Number of COVID-19 recovered cases {countryName}
        </Typography>
      </CardContent>
    </Card>

    <Card className="root deaths">
    <CardContent>
      <Typography className="title" color="textSecondary" gutterBottom>
        Deaths
      </Typography>
      <Typography variant="h5" component="h2">
        <CountUp
          start={0}
          end={ deaths ? deaths: 0}
          duration={2.75}
          separator=" "
        />
      </Typography>
      <Typography className="pos" color="textSecondary">
        {new Date(lastUpdate).toDateString()}
      </Typography>
      <Typography variant="body2" component="p">
        Number of COVID-19 death cases {countryName}
      </Typography>
    </CardContent>
    </Card>
    </div>
  );
}