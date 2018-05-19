import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';

class LoginForm extends Component {
  render() {
    return (
      <div  style={{padding: 30}} >

<div style={{}}>
<span className="loginFormText">Username or Email Address</span>
</div>
<input style={{
    width: '100%',
    height: 40,
    background: '#f2f2f2',
    boxShadow: 'none',
    //borderColor: '#fff',
    border: 'solid',
    borderWidth: .5,
    borderColor: '#b4b5b6',
    // marginTop: 2
    
    }}/>

    <div style={{marginTop: 20}}>
<span className="loginFormText">Password</span>
</div>
<input style={{
    width: '100%',
    height: 40,
    background: '#f2f2f2',
    boxShadow: 'none',
    //borderColor: '#fff',
    border: 'solid',
    borderWidth: .5,
    borderColor: '#b4b5b6',
    // marginTop: 2
    
    }}/>
    <div style={{marginTop: 20}}>
        <label className="checkmarkContainer">
        <input type="checkbox" checked="checked"/>
        <span className="checkmark"></span>
        <span className="loginFormText">
            Remember Me
        </span>
  
    </label>
    </div>
    <div style={{marginTop: 20}}>
    <button className="loginButton">Log In</button>
    </div>
      </div>
    );
  }
}

export default LoginForm;
