import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import Form from './components/form';
import Switch from './components/switch';
import Front from './components/front';
import Back from './components/back';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header/>
        <Switch/> */}
        <Front/>
        <Back/>
     

         
      
        
      </div>
    );
  }
}

export default App;
