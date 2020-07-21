import React, { useState } from 'react';
import Modal from '../modal/Modal';
import useModal from "../../hooks/useModal";
import CollectionForm from "./CollectionForm"


const NewPictureCollectionModal = () => {
  const { open, toggle } = useModal();


  return (
   <>
    <button onClick={ toggle }>New Collection</button>

    <Modal onClose={toggle} open={open}>
     <CollectionForm />
    </Modal>
   </>
  )
}

export default NewPictureCollectionModal;