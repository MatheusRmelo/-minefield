import React, { Component } from 'react';
import './App.css';
import params from './params'
import Header from './components/Header'
import MineField from './components/MineField'
import { 
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines
} from './functions'
import Modal from './components/Modal'

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
      showLevelSelection: false,
      menuVisible: false
    }
  }
  handleModal(){
    this.setState({showLevelSelection:false})
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
        <header className="App-header">
          {
                this.state.showLevelSelection ?
                <Modal onClose={()=> this.setState({ showLevelSelection: false})}>
                    <div className="modal-button">
                            <h1 style={styles.title}>Selecione o nível</h1>
                    
                            <button style={styles.buttonEasy} onClick={() => this.onLevelSelected(0.1)}>Fácil</button>
                            <button style={styles.buttonNormal} onClick={() => this.onLevelSelected(0.2)}>Intermédiario</button>
                            <button style={styles.buttonHard} onClick={() => this.onLevelSelected(0.3)}>Difícil</button>
                    </div>
                </Modal>
                :null 
            }
          <div className="app-info">
            <Header onDifficultClick={()=> this.setState({ showLevelSelection: true})} onNewGame = {() => this.setState(this.createState())} />
            <div style={StyleBoard}>
              <MineField board={this.state.board}
                  onOpenField={this.onOpenField} />
            </div>
          </div>
         
        </header>
        

      </div>
    ) 
  }
}
  
const StyleBoard = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#AAA'
}
const styles = {
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonEasy: {
      backgroundColor: '#49b65d',
  },
  buttonNormal: {
      backgroundColor: '#2765F7'
  },
  buttonHard: {
      backgroundColor: '#F26337'
  }
}


export default App;
