import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Cards from "../src/Cards";
import StatsCard from "../src/statscard";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop:25,
    flexGrow: 1,
    paddingLeft:25,
    paddingRight:100
  },
  statscard: {
    paddingLeft:120,
  },
  paper: {
    height: 340,
    width: 300,
  },
  control: {
    padding: theme.spacing(3),
  },
  title:{

    marginBottom:20,
    }
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={8}>
      <Typography variant="h5" component="h2" className={classes.title}>
          Latest Offences
        </Typography>
        <Grid container spacing={3}>
          {[0, 1, 2, 4, 5, 6].map((value) => (
            <Grid key={value} item>
              <Cards className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid className = {classes.statscard} item xs={4}>
            <StatsCard ></StatsCard>
      </Grid>
    </Grid>
  );
}
