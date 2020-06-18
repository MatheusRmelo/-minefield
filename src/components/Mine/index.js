import React from 'react'

export default function Mine(){
    return (
        <div style={container}>
            <div style={coreMine}></div>
            <div style={line}></div>
            <div style={line1}></div>
            <div style={line2}></div>
            <div style={line3}></div>
        </div>
    )
}

const container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
const coreMine = {
    height: 14,
    width: 14,
    borderRadius: 10,
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center' 
}

const line = {
    position: 'absolute',
    height: 3,
    width: 20,
    borderRadius: 3,
    backgroundColor: 'black'
}
const line1 = {
    position: 'absolute',
    height: 3,
    width: 20,
    borderRadius: 3,
    backgroundColor: 'black',
    transform:'rotate(45deg)'
}
const line2 = {
    position: 'absolute',
    height: 3,
    width: 20,
    borderRadius: 3,
    backgroundColor: 'black',
    transform:'rotate(90deg)'
}
const line3 = {
    position: 'absolute',
    height: 3,
    width: 20,
    borderRadius: 3,
    backgroundColor: 'black',
    transform:'rotate(135deg)'
}
