

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router';
import Gift from '../assets/gift.png';
import Login from './Login';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../actions/user.action';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ButtonAppBar(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch()

  const classes = useStyles();

  const loginHandler = async(userData) => {
    console.log('b', userData.profileObj)
    const userDataObj = await axios.get(`http://localhost:3001/users/${userData.profileObj.email}`)
    console.log('userDataObj', userDataObj)
    localStorage.setItem('isAdmin', userDataObj.data.isAdmin)
    localStorage.setItem('email', userDataObj.data.email)
    dispatch(setUserData(userDataObj.data))
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    setIsLoggedIn(false)
  }

  const myData = useSelector(state => state.userData)

  console.log('myData', myData)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => props.history.push('/')} edge="start"  color="inherit" aria-label="menu">
            <img src={Gift}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Gift Card
          </Typography>
          {!isLoggedIn && <Login loggedIn={loginHandler}/> }
          {isLoggedIn && <Button onClick={logoutHandler}>Logout</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(ButtonAppBar);
