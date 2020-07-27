import React, { useState } from 'react';
import Modal from '../modal/Modal';
import useModal from "../../hooks/useModal";
import PictureForm from "../new/PictureForm";
import styled from 'styled-components';


const NewPictureButton = ({ isCurrentUser }) => {
  const { open, toggle } = useModal();

  return (
   <>
      {/* make button reactive to user */}
      <AddPictureButton onClick={ toggle }>Add a Picture</AddPictureButton>
      
    <Modal onClose={toggle} open={open}>
      <PictureForm toggleModal={toggle}/>
    </Modal>
   </>
  )
}

const AddPictureButton = styled.button`
    width: 148px;
    height: 38px;
    
    background: #0099BA;
    box-shadow: 0px 2px 10px rgba(0, 153, 186, 0.5);
    border-radius: 4px;
    border: none;
    color: white;
    cursor: pointer;
    margin-right: 1.5rem;
  `

export default NewPictureButton;