import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import FaUser from 'react-icons/lib/fa/user';
import FaKey from 'react-icons/lib/fa/lock';
import logo from '../img/logo.png';



class AlternateLoginForm extends Component {
  render() {
    return (
      <div  style={{padding: 30, }} >
    {/*=================================================*/}
    {/*
        <div className="logo">
      <img  src={logo}  width="120" height="" />
      </div>
    */}
    {/*=================================================*/}
<div className="title">
<h1>
Login to view your account
</h1>
</div>
<div>&nbsp;</div>


{/*============================================================================================*/}
<div style={{
  width: '100%'
  }}>
    <div style={{width: '5%',  float: 'left',  border: 'none',
    borderBottom: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    paddingLeft: 1,
    paddingTop: 1,
    paddingBottom: 8,
    // height: 40,
    color:'#fff', fontSize: 20,
 
  
    }}>
      <FaUser /> 
    {/*<span className="loginFormText">Username or Email Address</span>*/}
    </div>
    <div style={{width: '92%', float: 'left', }}>
        <input className="input" style={{
            width: '100%',
            height: 30,
            background: 'none',
            boxShadow: 'none',
            //borderColor: '#fff'
            border: 'none',
            borderBottom: 'solid',
            borderBottomWidth: 2,
            borderBottomColor: '#fff',
            
            // marginTop: 2
            
            }}
            placeholder="Username or Email Address"
            />
    </div>
  </div>

{/*============================================================================================*/}
  <div style={{
    width: '100%',
    marginTop: '70px',
    
    }}>
      <div style={{width: '5%',  float: 'left',  border: 'none',
      borderBottom: 'solid',
      borderBottomWidth: 2,
      borderBottomColor: '#fff',
      paddingLeft: 1,
      paddingTop: 1,
      paddingBottom: 8,
      // height: 40,
      color:'#fff', fontSize: 20,
   
    
      }}>
        <FaKey /> 
      {/*<span className="loginFormText">Username or Email Address</span>*/}
      </div>
      <div style={{width: '92%', float: 'left', }}>
          <input type="password" className="input" style={{
              width: '100%',
              height: 30,
              background: 'none',
              boxShadow: 'none',
              //borderColor: '#fff'
              border: 'none',
              borderBottom: 'solid',
              borderBottomWidth: 2,
              borderBottomColor: '#fff',
              
              // marginTop: 2
              
              }}
              placeholder="Password"
              />
      </div>
    </div>
    {/*============================================================================================*/}
    
   <div>&nbsp;</div>
   <div style={{paddingTop: 40}}>
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

export default AlternateLoginForm;
