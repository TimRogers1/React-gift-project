

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


 function GiftCard(props) {

  const handleClick = (category) => {
    if (props.indicator === "giftCardProduct") {
      props.history.push(`/gift/description/${props.category}/${props.giftId}`)
    } else {
      if (props.title === 'Fashion') {
        props.history.push('/gift/fashion')
      } else if (props.title === 'Electronics') {
        props.history.push('/gift/electronics')
      } else {
        props.history.push('/gift/books')
      }
    }
  }
  

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.imageUrl}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button onClick={handleClick}  size="small" color="primary">
         Explore
        </Button>
      </CardActions>
    </Card>
  );
}

export default withRouter(GiftCard);

