import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import firebase from './fire'

const useStyles = makeStyles({
  table: {
    maxWidth: 400,
  },
  title:{
      marginTop:20,
      marginBottom:20,
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Curtin University', 159, 6.0, 24, 4.0),
  createData('Dr Wongs', 237, 9.0, 37, 4.3),
//  / createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function StaticTable(props) {

  const classes = useStyles();
  //const [title, setTitle] = useState(title);
  //locationcount();
  return (
      <div>
           <Typography variant="h5" component="h2" className={classes.title}>
              {props.title}
        </Typography>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        {/*<caption>A basic table example with a caption</caption>*/}
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell align="right">Offences</TableCell>
            {/*}
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            */}
          </TableRow>
        </TableHead>
        <TableBody>
           {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
           
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
