import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';
import  Opciones from './components/Opciones.js';
import  Mundo from './components/Mundo.js';
import  Bloques from './components/Bloques.js';
import  RealTimeCode from './components/RealTimeCode.js';

class App extends Component { 
  
   constructor(props) {
    super(props);
    this.state = {
      code : "Esperando Instrucciones",      
    }; 
    this.handleCodex = this.handleCodex.bind(this);
  }

handleCodex(codex){
  //console.log(this.state)
  this.setState({ code: codex});
  
}

  render() {
    return (

      <div className="App">        
        <Opciones code={this.state.code}></Opciones>
        <div>
            <p></p>
        </div>        
        <div className="container">                              
            <Bloques 
                notificar = {(code) => {this.handleCodex(code)}}>
            </Bloques>                    
        </div>
      </div>
    );
  }
}

export default App;
