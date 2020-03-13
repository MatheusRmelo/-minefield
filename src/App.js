import React, { Component } from 'react';
import './App.css';
import params from './params'
import Header from './components/Header'
import LevelSelection from './screens/LevelSelection'
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
      lost: false,
      showLevelSelection: false
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
  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }
  render() {
    return (
      <div className="App">
        <LevelSelection isVisible={this.state.showLevelSelection} onLevelSelected={this.onLevelSelected} onCancel={() => this.setState({ showLevelSelection: false})}/>
        <Header onDifficultClick={()=> this.setState({ showLevelSelection: true})} onNewGame = {() => this.setState(this.createState())} />
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
