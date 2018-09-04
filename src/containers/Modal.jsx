import React, {Component} from 'react';
import './Modal.css';

const Modal = (props) => {

  return (
    <div onClick={props.closeModal} className='backdrop'>
      <div className='modal'>
        <img src={props.modalURL} alt='modal image'/>
      </div>
    </div>
  )
}

export default Modal;