import React, { useState } from 'react';
import Modal from '../modal/Modal';
import useModal from "../../hooks/useModal";
import CollectionForm from "../collection/CollectionForm";

const NewPictureCollectionModal = (props) => {
  const { open, toggle } = useModal();
  const handleRes = () => toggle()

  return (
   <>
    <button onClick={ toggle }>New Collection</button>
    <Modal onClose={toggle} open={open}>
      <CollectionForm handleRes={handleRes}/>
    </Modal>
   </>
  )
}

export default NewPictureCollectionModal;