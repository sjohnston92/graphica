import React, { useState } from 'react';
import Modal from '../modal/Modal';
import useModal from "../../hooks/useModal";
import PictureForm from "../new/PictureForm";


const NewPictureButton = ({ isCurrentUser }) => {
  const { open, toggle } = useModal();

  return (
   <>
      {/* make button reactive to user */}
      <button onClick={ toggle }>Add a Picture</button>
      
    <Modal onClose={toggle} open={open}>
      <PictureForm toggleModal={toggle}/>
    </Modal>
   </>
  )
}

export default NewPictureButton;