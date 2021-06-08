import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TrendingUp from '@material-ui/icons/TrendingUp';
import EventNote from '@material-ui/icons/EventNote';
import { Button } from '@material-ui/core';
import GameCard from '../../components/GameCard';
import matches from './../../data/matches';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 400,
    borderRadius: 10,
    [theme.breakpoints.down('sm')]: {
      width: 300,
    },
  },
  header: {
    height: '100%',
    width: 'auto',
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(3, 3, 3, 0.7) ),url("https://wallpaperaccess.com/full/1884497.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    paddingTop: 15,
  },

  heading: {
    color: 'white',
    width: 'auto',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    [theme.breakpoints.down('md')]: {
      fontSize: '26px',
      textAlign: 'center',
    },
  },
  backButton: {
    paddingTop: 20,
    color: 'white',
    width: 'auto',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 500,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      textAlign: 'center',
    },
  },
  tabs: {
    width: 500,
    [theme.breakpoints.down('sm')]: {
      width: 400,
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let gameCards = [];
  if (matches.length !== 0) {
    gameCards = matches.filter((match) => {
      return Date.now() < new Date(match.date);
    });
  }
  return (
    <section>
      <div className={classes.header}>
        <div className="d-flex justify-content-center ">
          <div>
            <h6 className={classes.heading}>Play and Win</h6>
            <Paper square className={classes.root}>
              <Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="primary" centered>
                <Tab icon={<TrendingUp />} label="Active Matches" />
                <Tab icon={<EventNote />} label="Ended Ended" />
              </Tabs>
            </Paper>
          </div>
        </div>

        {gameCards.map((singleCard) => {
          return (
            <div className="pb-3">
              <GameCard item={singleCard} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
