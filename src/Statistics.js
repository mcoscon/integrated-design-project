import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AcccessibleTable from "./Tables";
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  root: {
    minWidth: 400,
  },
  root2: {
    minWidth: 275,
    marginTop: 25
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

    marginBottom: 9
  },
  pos2: {
    marginTop:9,
  },
  title:{
    marginBottom: 20,

  }
});

export default function StatsCard({contents}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    
    
    <Grid container className={classes.root} spacing={3}>
    <Grid className = {classes.statscard} item xs={4}>
       <AcccessibleTable data = {contents} title = "Todays Statistics"></AcccessibleTable>
    </Grid>
    <Grid className = {classes.statscard} item xs={4}>
       <AcccessibleTable title = "All Time Statistics"></AcccessibleTable>
    </Grid>
    <Grid className = {classes.statscard} item xs={4}>
       <AcccessibleTable title = "Fine Payments"></AcccessibleTable>
    </Grid>
    </Grid>
  );



}
