import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
 
const Modal = ({children, onClose, open }) =>
  open
   ? ReactDOM.createPortal(
        <div className='modal'>
          <ModalWrapper>       
            <ModalCard>          
              <CloseButton onClick={onClose}>            
              <img src="https:icon.now.sh/x/ff0000" alt="close" />
            </CloseButton>
            {children}
            </ModalCard>
            <Background onClick={onClose} />      
          </ModalWrapper>   
          <div className='modal_close' onClick={onClose}>&times;</div>
          {children}
        </div>,
        document.body
      )
   : null
  
export default Modal; 

const ModalWrapper = styled.div`
  position: fixed;  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalCard = styled.div`
  position: relative;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 100px;
  background: white;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`; 
const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 10px;
  &:hover {    
    cursor: pointer;
  }`; 
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`;