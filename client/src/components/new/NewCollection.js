import React, { useState } from 'react';
import Modal from '../modal/Modal';
import useModal from "../../hooks/useModal";
import CollectionForm2 from "./CollectionForm2"


const NewPictureCollectionModal = () => {
  const { open, toggle } = useModal();


  return (
   <>
    <button onClick={ toggle }>New Collection</button>

    <Modal onClose={toggle} open={open}>
     <CollectionForm2 />
    </Modal>
   </>
  )
}

export default NewPictureCollectionModal;