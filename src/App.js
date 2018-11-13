import React, {Component} from 'react';
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
        selectFront: 'block',
        selectBack: 'none',
        activeSwitch: 'none',
        firstStep: true,
        reducers: {
            setSize: this.setSize
        },
        isLogin: false,
        cardSize: 350,
        isReversed: false

    };


    inputEmail = e => this.setState({email: e.target.value});
    inputName = e => this.setState({name: e.target.value});
    inputPhone = e => this.setState({phone: e.target.value});
    setSize = e => this.setState({cardSize: e});
    reverseColors = e => this.setState((prevState) => ({isReversed:!prevState.isReversed}));

    showFront(e) {
        e.preventDefault();
        this.setState({activeFront: 'block', hideForm: 'none', activeSwitch: 'block'})
    }

    // showBack(e){
    //   this.setState({activeFront: 'block', hideForm: 'none', activeSwitch: 'block'})

    // }
    selectFront = () => this.setState({firstStep: true})
    showBack = () => this.setState({firstStep: false})
    onLogin = (e) => {
        e.preventDefault()
        this.setState({isLogin: true})

    }


    // handleChange = (value) => {
    //      console.log(value)
    //      this.setState({ checked: !this.state.checked });
    //      // this.state({checked:true}) ? document.getElementById("card-color").style.background = 'blue' :  document.getElementById("card-color").style.background = "#2cc362"
    //
    // }


    render() {
        return (
            <div className="App">
                <Header/>

                {this.state.isLogin ? (<Switch
                    frontSide={this.state}
                    showFront={this.selectFront}
                    selectBack={this.showBack}
                />) : (null)}


                {this.state.isLogin ?


                    this.state.firstStep


                        ? (<Front
                            state={this.state}
                            setSize={this.setSize.bind(this)}
                        />) :
                        (<Back
                            state={this.state}
                            setSize={this.setSize.bind(this)}
                            reverseColors={this.reverseColors.bind(this)}
                        />)


                    : (<Form
                        inputEmail={this.inputEmail}
                        inputName={this.inputName}
                        inputPhone={this.inputPhone}
                        state={this.state}
                        // showFront={this.showFront.bind(this)}
                        onLogin={this.onLogin.bind(this)}

                    />)
                }


            </div>
        );
    }
}

export default App;
