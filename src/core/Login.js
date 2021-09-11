

import React from 'react';
import ReactDOM from 'react-dom';
// or
import { GoogleLogin } from 'react-google-login';


const Login = (props) => {
    const responseGoogle = (response) => {
        props.loggedIn(response)
      }

      const loginFailure = () => {
          alert('Login Error')
      }

    return <GoogleLogin
    clientId="1088902297690-286bu3igk2b1ingth07fm9are44ccp6a.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={loginFailure}
    cookiePolicy={'single_host_origin'}
  />
}

export default Login;


  
  
