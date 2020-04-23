import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StaticTable from "./StaticTable";
import DynamicTable from "./DynamicTable"
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
  const title1 = "Todays Statistics";
  return (
    
    
    <Grid container className={classes.root} spacing={3}>
    <Grid className = {classes.statscard} item xs={4}>
       <DynamicTable title = "Today's Statistics"></DynamicTable>
    </Grid>
    <Grid className = {classes.statscard} item xs={4}>
       <StaticTable title = "All Time Statistics"></StaticTable>
    </Grid>
    <Grid className = {classes.statscard} item xs={4}>
    <StaticTable  title = "Fine Payments"></StaticTable>
    </Grid>
    </Grid>
  );



}
