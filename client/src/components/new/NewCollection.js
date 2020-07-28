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
    <CollectionButton onClick={ toggle }>New Collection</CollectionButton>
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
