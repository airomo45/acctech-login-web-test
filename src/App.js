import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm';
import AlternateLoginForm from './Components/AlternateLoginForm';

import Responsive from 'react-responsive-decorator';
import background from './img/background.jpg';
import logo from './img/logo.png';


class App extends Component {
  state = {
    isMobile: false
  }
  componentDidMount() {
    this.props.media({ minWidth: 1268 }, () => {
      this.setState({
        isMobile: false
      });
    });
this.props.media({ maxWidth: 1268 }, () => {
      this.setState({
        isMobile: true
      });
    });
  }
  render() {
    const { isMobile } = this.state;
    return (
      <div>
      {isMobile ?

      <div className="App" style={{}}>
        <div className="loginCard" style={{
          //background:'rgba(255, 255, 255, .95)', 
          width: '80%',
          height: '90vh',
          marginLeft: '10%',
          marginTop: 60, 
          padding: 10}}
          > 
          
        

          <AlternateLoginForm style={{}}/>

          {/*
            <p className="App-intro">
              Login to continue:
            </p>
           <form>
           <div style={{width: '100%'}}>
              <div style={{
              width: '30%',
              float: 'left',
              backgroundColor: 'rgb(4, 18, 34)',
              fontSize: 25,
              fontWeight: 'bold',
              paddingTop: 20,
              color: '#fff',
              height: 50
              }} >
              Username: </div>
              <div style={{width: '70%', float:'left'}}>
                <input type="text" className="textInput"/>
              </div>
           </div>
           </form> 
          */}
        </div>

           

      </div>
      :
      <div className="App" style={{}}>
        <div className="loginCard" style={{
          //background:'#fff', 
          width: '25%',
          height: '60vh',
          marginLeft: '35%',
          marginTop: 60, 
          padding: 10}}
          > : 
          
        

          <AlternateLoginForm/>

          {/*
            <p className="App-intro">
              Login to continue:
            </p>
           <form>
           <div style={{width: '100%'}}>
              <div style={{
              width: '30%',
              float: 'left',
              backgroundColor: 'rgb(4, 18, 34)',
              fontSize: 25,
              fontWeight: 'bold',
              paddingTop: 20,
              color: '#fff',
              height: 50
              }} >
              Username: </div>
              <div style={{width: '70%', float:'left'}}>
                <input type="text" className="textInput"/>
              </div>
           </div>
           </form> 
          */}
        </div>

           

      </div>
        }
      </div>
      
    );
  }
}

export default Responsive(App);
