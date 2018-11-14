import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header';
import Form from './components/form';
import Switch from './components/switch';
import Front from './components/front';
import Back from './components/back';
import axios from 'axios';



class App extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        activeFront: 'none',
        hideForm: 'block',
        selectFront: 'block',
        selectBack: 'none',
        activeSwitch: 'none',
        firstStep: true,
        isLogin: false,
        cardSize: 350,
        isReversed: false
    };
    inputEmail = e => this.setState({email: e.target.value});
    inputName = e => this.setState({name: e.target.value});
    inputPhone = e => this.setState({phone: e.target.value});
    setSize = e => this.setState({cardSize: e});
    reverseColors = e => this.setState((prevState) => ({isReversed:!prevState.isReversed}));
    selectFront = () => this.setState({firstStep: true})
    showBack = () => this.setState({firstStep: false})
    onLogin = (e) => {
        e.preventDefault()
        this.setState({isLogin: true}) 
        axios.post('http://localhost/8090/visit', {state: this.state})
    }


    render() {
        return (
            <div className="App">
                <Header/>
                {this.state.isLogin ? (<Switch
                    showFront={this.selectFront}
                    selectBack={this.showBack}/>) : (null)}
                {this.state.isLogin ? this.state.firstStep ? 
                (<Front
                    state={this.state}
                    setSize={this.setSize.bind(this)}
                />) :
                (<Back
                    state={this.state}
                    setSize={this.setSize.bind(this)}
                    reverseColors={this.reverseColors.bind(this)}
                />) : 
                (<Form
                    inputEmail={this.inputEmail}
                    inputName={this.inputName}
                    inputPhone={this.inputPhone}
                    state={this.state}
                    onLogin={this.onLogin.bind(this)}
                 />)
                }
            </div>
        );
    }
}

export default App;
