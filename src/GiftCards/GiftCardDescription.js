import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import emailjs from 'emailjs-com';
import './GiftCardDescription.css'
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 845,
    align: 'center',

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



 function RecipeReviewCard(props) {
    const [giftDescription, setGiftDescription] = useState([]);
    const [ open, setOpen ] = useState(false)
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ message, setMessage ] = useState('')
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  
    useEffect(() => {
      axios.get(
        `http://localhost:3001/${props.match.params.category}/${props.match.params.giftId}`
    )
    .then(res => {
        console.log('res', res)
        setGiftDescription(res.data)
        console.log('z', giftDescription)
    }).catch((error) => alert('Error'))
    }, [setGiftDescription]);

    const handleSubmit = (e) => {
      e.preventDefault()
      const templateData = {
        'To_Name': name,
        'To_Email': email,
        'Message_body': message,
        'To_Subject': 'A Gift For You',
        'Gift_Description': giftDescription.image
      }

      emailjs.send('service_amcvwgi', 'template_ejywd38', templateData, 'user_ygfslj54DL1PrchgAmOe2')
        .then((result) => {
          console.log(result)
            console.log(result.text);
            alert('Email Sent!');
            setOpen(false)
        }, (error) => {
          console.log(error)
            console.log(error.text);
        });
      }
    

      
      // const sendFeedback = (templateId, variables) => {
      // window.emailjs.send(
      //   'gmail', templateId,
      //   variables
      //   ).then(res => {
      //     console.log('Email successfully sent!')
      //   })
      //   // Handle errors here however you like, or use a React error boundary
      //   .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      //  }

      // const sendEmail = (e) => {
      //   e.preventDefault();
    
      // //   emailjs.sendForm('gmail', 'template_ejywd38', e.target, 'user_ygfslj54DL1PrchgAmOe2')
      // //     .then((result) => {
      // //         console.log(result.text);
      // //     }, (error) => {
      // //         console.log(error.text);
      // //     });
      // // }


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setOpen(false)
  }

  const data = useSelector(state => state.userData)
  console.log('data in gift card description', data)

  return (
    <div>
      
    
      <div id="giftCradDescription" style={{'display': 'flex', 'justifyContent': 'center', 'marginTop': '50px'}}>
          <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={giftDescription.title}
        subheader={giftDescription.description}
      />
      <CardMedia
        className={classes.media}
        image={giftDescription.image}
        title={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon  onClick={() => {setOpen(true)}}/>
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      </Collapse>
    </Card>
      </div>
      <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Send a Gift</DialogTitle>
        <DialogContent>
            <DialogContentText>
              To gift this product to your love ones , please enter their email address here. 
            </DialogContentText>
      
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="Text"
            fullWidth
            onChange={(event) => {setName(event.target.value)}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            onChange={(event) => {setEmail(event.target.value)}}
          />

          <TextField
            autoFocus
            margin="dense"
            id="message"
            label="Message"
            type="Text"
            fullWidth
            onChange={(event) => {setMessage(event.target.value)}}
          />
          {/* <div style={{'display': 'table-caption', 'margin-left': '170px'}}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="To_Name" onChange={(event) => {setName(event.target.value)}}/>
            <label>Email</label>
            <input type="email" name="To_Email" onChange={(event) => {setEmail(event.target.value)}}/>
            <label>Subject</label>
            <input type="subject" name="To_Subject" onChange={(event) => {setSubject(event.target.value)}}/>
            <label>Message</label>
            <textarea name="Message_body" onChange={(event) => {setMessage(event.target.value)}}/>
            <input type="submit" value="Send" />
          </form>
          </div> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Send 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      </div>
    
  );
}


export default withRouter(RecipeReviewCard);