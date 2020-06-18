import React from 'react'
import Field from '../Field'

export default function Minefield(props){
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c} 
                    onOpen = {() => props.onOpenField(r, c)}   />
        })
        return <div key={r} >{columns}</div>
    })
    return <div style={container}>{rows}</div>
}





const container = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#EEE'
}