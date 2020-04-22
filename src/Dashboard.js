import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Cards from "./OffenceCard";
import StatsCard from "./Statistics";
import Typography from '@material-ui/core/Typography';
import firebase from "./fire";
import CircularDeterminate from "./progress";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop:50,
    flexGrow: 1,
     padding:theme.spacing(4),

  },
  paper: {
    height: 340,
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
  title:{
    marginTop:25,
    marginBottom:20,
    }
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const [data, setData] = useState([]);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  const progressbar = () =>
  {
    return(<CircularDeterminate/>);
  }
  
  useEffect(()=> {

    const dataRef = firebase.database().ref('users');
    dataRef.on('value', function(snapshot){
        var returnArr = [];
        snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        console.log(item)
        returnArr.push(item);
    });
    setData(returnArr)
  })
  return () => dataRef.off('value', dataRef);
  
},[firebase.database])

  return (

    <Grid container className={classes.root}>
      <Grid className = {classes.statscard} item xs={12}>
      <StatsCard contents = {data}></StatsCard>
      </Grid>
      <Grid item xs={12}>
      <Typography variant="h5" component="h2" className={classes.title}>
          Latest Offences
        </Typography>
        <Grid container spacing={8}>
          
        {data.map((d) => (
            <Grid key={d.key} item>
              <Cards contents ={d} className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>

    </Grid>
  );
}
