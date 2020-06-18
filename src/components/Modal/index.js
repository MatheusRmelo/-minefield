import React from 'react'
import './styles.css'
import { FaRegWindowClose } from 'react-icons/fa'

export default function Modal({id='modal', onClose=() => {}, children}){
    
    function handleOutsideClick(e){
        if(e.target.id === id) onClose()
    }

    return (
        <div id={id} className="modal" onClick={handleOutsideClick}>
            <div className="container">
                <div className="cart-header">
                    <button onClick={onClose}>
                        <FaRegWindowClose size={20} />
                    </button>
                </div>
                <div className="content">{children}</div>
            </div>
        </div>
    )
}