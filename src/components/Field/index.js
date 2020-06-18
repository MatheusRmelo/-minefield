import React from 'react'
import params from '../../params'
import Mine from '../Mine'

export default function Field(props){
    const { mined, opened, nearMines, exploded } = props
    let color = null
    let styleFields = 1
    let styleNormal = StyleField
    if ( opened ){
        styleNormal = StyleOpened
        styleFields = 2
    }
    if ( exploded ) {
        styleNormal = StyleExploded
        styleFields = 3 
    }
    if ( styleFields  === 1) styleNormal = StyleField

    
    if ( nearMines > 0 ) {
        if ( nearMines === 1) color = '#2A28D7'
        if ( nearMines === 2) color = '#2B520F'
        if ( nearMines > 2 && nearMines < 6) color = '#F9060A'
        if ( nearMines > 6 ) color = '#F221A9'
    }
    
    return (
        
        <div style={styleNormal} onClick={props.onOpen}>
            { !mined && opened && nearMines > 0 ? <p style={StyleLabel, { color: color}}>{nearMines}</p> : false }
            { mined && opened ? <Mine /> : false }
        </div>
        
    )
}
const StyleField = {
    
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize, 
    borderStyle: 'solid',
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333',
}
const StyleOpened = {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize, 
    borderStyle: 'solid',

    backgroundColor: '#999',
    borderColor: '#777',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
const StyleLabel = {
    fontWeight: 'bold',
    fontSize: params.fontSize, 
}
const StyleExploded = {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize, 
    borderStyle: 'solid',

    backgroundColor: 'red',
    borderColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',  
}
