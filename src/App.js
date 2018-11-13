import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header';
import Form from './components/form';
import Switch from './components/switch';
import Front from './components/front';
import Back from './components/back';

class App extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    activeFront: 'none',
    hideForm: 'block',
    selectFront:'block',
    selectBack:'none',
    activeSwitch: 'none',


  };


  inputEmail = e => this.setState({ email: e.target.value });
  inputName = e => this.setState({ name: e.target.value });
  inputPhone = e => this.setState({ phone: e.target.value });
  showFront (e) {
    e.preventDefault()
    this.setState({activeFront: 'block', hideForm: 'none', activeSwitch: 'block'})
  }
  // showBack(e){
  //   this.setState({activeFront: 'block', hideForm: 'none', activeSwitch: 'block'})
    
  // }
  selectFront = () => this.setState({activeFront: 'block', selectBack: 'none'})
  showBack = () => this.setState({activeFront: 'none', selectBack: 'block'})
  
  
    




  render() {
    console.log(this.state.name)
    console.log(this.state.phone)
    console.log(this.state.email)
    console.log(this.state.activeFront)
    return (
      <div className="App">
        <Header/>
        <Switch
        frontSide ={this.state}
        showFront={this.selectFront}
        selectBack={this.showBack}
        />
        <Form 
        inputEmail = {this.inputEmail}
        inputName = {this.inputName}
        inputPhone = {this.inputPhone}
        frontSide ={this.state}
        showFront={this.showFront.bind(this)}


        
        />
        <Front
          frontSide ={this.state}
      
          
        />
        <Back
        frontSide ={this.state}
        />
     
        
      
        
      </div>
    );
  }
}

export default App;
