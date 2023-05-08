import React from 'react';
import ReactDOM from 'react-dom';
import './ModalOverlay.css';

const Modal = () => {
    return (
        <div className='modal'>
            <div className="loader"></div>
        </div>
    )
};

const portalElement = document.getElementById('overlays');
ReactDOM.createPortal(<Modal/>, portalElement)

export default Modal;