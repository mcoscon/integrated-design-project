import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SmokingRoomsOutlinedIcon from '@material-ui/icons/SmokingRoomsOutlined';
import PlaceOutlinedIcon from '@material-ui/icons/PlaceOutlined';
import InteractiveList from "../src/locationfirstcard";
import AcccessibleTable from "../src/alltimetable";
import SimpleList from "../src/finepayments"
const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
    marginTop:12,
    marginBottom: 12
  },
  pos2: {
    marginTop:12,
    marginBottom: 6,
  },
  title:{
    marginBottom: 20,

  }
});

export default function StatsCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    
      <div>
           <Typography variant="h5" component="h2" className={classes.title}>
          Todays Statistics
        </Typography>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.pos} >
            <SmokingRoomsOutlinedIcon fontSize='large' />
            Smoking Offences
        </Typography>
        <Typography className={classes.pos} >
          <PlaceOutlinedIcon fontSize='large'/>
              Locations
            
        </Typography>
      </CardContent>
    </Card>

   <AcccessibleTable></AcccessibleTable>
   <SimpleList></SimpleList>
    </div>
  );
}
