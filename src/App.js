import React, { Component } from 'react';
import './App.css';
import params from './params'

import MineField from './components/MineField'
import { 
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines

} from './functions'
class App extends Component{

  constructor(props){
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColunmsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColunmsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if ( lost ) {
      showMines(board)
      alert('LOSER!')
    } 
    if ( won ) {
      alert('Você venceu!')
    }

    this.setState({ board, lost, won })
  }

  render() {
    return (
      <div className="App">
        <h3 className="welcome">Iniciando o Mines!</h3>
        <h4 className="instructions">
          Tamanho da grade: { params.getRowsAmount()} x { params.getColunmsAmount()} 
        </h4>
        <div style={StyleBoard}>
          <MineField board={this.state.board}
              onOpenField={this.onOpenField} />
        </div>

      </div>
    ) 
  }
}
  
const StyleBoard = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#AAA'
}


export default App;
