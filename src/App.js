import React, { Component } from 'react';
import './App.css';
import params from './params'
import Field from './components/Field'
class App extends Component{
  render() {
    return (
      <div className="App">
        <h3 className="welcome">Iniciando o Mines!</h3>
        <h4 className="instructions">
          Tamanho da grade: { params.getRowsAmount()} x { params.getColunmsAmount()} 
        </h4>
        <Field />
        <Field opened />
        <Field opened nearMined={1} />
        <Field opened nearMined={2} />
        <Field opened nearMined={3} />
        <Field opened nearMined={6} />
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded />

      </div>
    ) 
  }
}
  


export default App;
