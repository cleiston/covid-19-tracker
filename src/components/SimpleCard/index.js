import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(countryInfo) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  console.log(countryInfo)
  const {confirmed, recovered, deaths, lastUpdate} = countryInfo.countryInfo;
  return (
    <>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Confirmed
        </Typography>
        <Typography variant="h5" component="h2">
          {confirmed}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {lastUpdate}
        </Typography>
        <Typography variant="body2" component="p">
            Number of confirmed cases of COVID-19
        </Typography>
      </CardContent>
    </Card>

    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Recovered
        </Typography>
        <Typography variant="h5" component="h2">
          {recovered}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {lastUpdate}
        </Typography>
        <Typography variant="body2" component="p">
            Number of recovered cases of COVID-19
        </Typography>
      </CardContent>
    </Card>

    <Card className={classes.root}>
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Deaths
      </Typography>
      <Typography variant="h5" component="h2">
        {deaths}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        {lastUpdate}
      </Typography>
      <Typography variant="body2" component="p">
          Number of deaths of COVID-19
      </Typography>
    </CardContent>
    </Card>
    </>
  );
}