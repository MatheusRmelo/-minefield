import React from 'react'
import 'font-awesome/css/font-awesome.css'
import params from '../../params'
export default function Header(props){
    return (
        <header style={styles.container}>
            <div style={styles.difficultContainer}>
                <button style={{padding:15}} onClick={props.onDifficultClick}>
                    <i className="fa fa-lg fa-cogs"></i>
                    Dificuldade
                </button>


                   <span  style={{color: 'black', fontSize: 20}}> Nivel Dificuldade: { params.difficultLevel * 10 }</span>
            </div>
            <button style={{padding:15}}  onClick={props.onNewGame}>
                <i className="fa fa-lg fa-sync"></i>
                Novo Jogo
            </button>
        </header>
    )
}

const styles = {
    container: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal:20
    },
    difficultContainer: {
        flexDirection: 'row',
        padding: 10,
        margin:15,
    }

}