import React, { useState } from 'react';
import Modal from '../modal/Modal';
import useModal from "../../hooks/useModal";
import CollectionForm from "../collection/CollectionForm";
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const NewCollection = (props) => {
  const { open, toggle } = useModal();
  const handleRes = (newCollection) => {
    toggle()
    props.history.push(`/collections/${newCollection.id}`)
  } 

  return (
   <>
    <CollectionButton onClick={ toggle }>
      New Collection 
      <svg width="1rem" height="1rem" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0H18C19.1 0 20 0.9 20 2V14C20 15.1 19.1 16 18 16H6C4.9 16 4 15.1 4 14V2C4 0.9 4.9 0 6 0ZM18 14V2H6V14H18ZM9.5 9.67L11.19 11.93L13.67 8.83L17 13H7L9.5 9.67ZM0 18V4H2V18H16V20H2C0.9 20 0 19.1 0 18Z" fill="white"/>
      </svg>
    </CollectionButton>
    <Modal onClose={toggle} open={open}>
      <CollectionForm handleRes={handleRes}/>
    </Modal>
   </>
  )
}


  const CollectionButton = styled.button`
    width: 148px;
    height: 38px;

    background: #0099BA;
    box-shadow: 0px 2px 10px rgba(0, 153, 186, 0.5);
    border-radius: 4px;
    color: white;
    margin-left: 20px;
    border: none;
    font-family: 'Montserrat',  sans-serif;
    cursor: pointer;

  `

export default withRouter(NewCollection);
