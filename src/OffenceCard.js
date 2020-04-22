import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import DoneIcon from '@material-ui/icons/Done';
import SimpleModal from './PaidConfirmModal';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 240
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "purple",
  },
}));

export default function Cards({contents}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [content, setContents] = React.useState(contents);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
   
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            
          </Avatar>
        }
        action={
          <SimpleModal id={content.key}/>
        }
        title={"Case: " + (content.key).slice(1,6)} 
        subheader={"Location: " + content.Location}
      />
      <CardMedia
        className={classes.media}
        image={content.ImageURL}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" paragraph component="p">
          {"Offence commited on " + content.Timestamp}
        </Typography>
      </CardContent>
      {/*
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
        */}
    </Card>
  );
}
