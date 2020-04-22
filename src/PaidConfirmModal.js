import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';
import firebase from './fire'
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'primary',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth: '300px'
  },
  button:{
    margin: theme.spacing(1),
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    var ref = firebase.database().ref().child('users/' + props.id)
    ref.once("value")
    .then(function(snapshot) {
       snapshot.ref.remove();
   }).catch(function(error) {alert("Data could not be deleted." + error);});
  }

  return (
    <div>
      <IconButton onClick = {handleOpen} aria-label="settings"> 
      <DoneIcon/> 
      </IconButton>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Confirm Fine Clear</h2>
            <p id="transition-modal-description">Do you want to clear this fine?</p>
            <Button onClick = {handleDelete} className = {classes.button}>Clear</Button>
            <Button onClick = {handleClose} className = {classes.button}>Cancel</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
