import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  return (
    <Card className={classes.root}>
      {/* <LazyLoadImage
        className={classes.media}
        src={props.image}
        style={{paddingTop: 0, width: "100%", height: "200px"}}
      /> */}
      
      <LazyLoadComponent>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
      </LazyLoadComponent>
      <CardHeader
        title={props.title}
        subheader=""
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Tribes: {props.nativeLand
            .map(nl => (
              <span style={{marginRight: '.2rem'}}>
                <a target="_blank" href={nl.link}>{nl.name}</a>,
              </span>
            ))}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" color="primary">
        </Button>
      </CardActions>
    </Card>
  );
}
