import React from 'react';
export default props => {
    return (
        <div >
            {
                props.isVisible ?
                    <div style={styles.frame}>
                        <div style={styles.container}>
                            <button onClick={props.onCancel}>Fechar</button>
                            <h1 style={styles.title}>Selecione o nível</h1>
                    
                            <button style={styles.buttonEasy} onClick={() => props.onLevelSelected(0.1)}>Fácil</button>
                            <button style={styles.buttonNormal} onClick={() => props.onLevelSelected(0.2)}>Intermédiario</button>
                            <button style={styles.buttonHard} onClick={() => props.onLevelSelected(0.3)}>Difícil</button>
                        </div>
            
                    </div>
                : null
            }
        </div>
    )
}

const styles = {
    frame: {
        display: 'flex',
        flex:1,
        
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        backgroundColor:'#EEE',
        display: 'flex',
        width:477,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttonEasy: {
        backgroundColor: '#49b65d'
    },
    buttonNormal: {
        backgroundColor: '#2765F7'
    },
    buttonHard: {
        backgroundColor: '#F26337'
    }
}
  
