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
  render() {
    return (

      <div className="App">

          
        <Opciones></Opciones>      
        <div><p></p></div>
        
      <div className="container">      

              
          
            <Bloques>        
               
            </Bloques>          
          
        </div>


      </div>
    );
  }
}

export default App;
