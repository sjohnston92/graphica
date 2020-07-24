import React, { useState } from 'react';
import Modal from '../modal/Modal';
import useModal from "../../hooks/useModal";
import CollectionForm from "../collection/CollectionForm";
import { withRouter } from 'react-router-dom';

const NewCollection = (props) => {
  const { open, toggle } = useModal();
  const handleRes = (newCollection) => {
    toggle()
    props.history.push(`/collections/${newCollection.id}`)
  } 

  return (
   <>
    <button onClick={ toggle }>New Collection</button>
    <Modal onClose={toggle} open={open}>
      <CollectionForm handleRes={handleRes}/>
    </Modal>
   </>
  )
}

export default withRouter(NewCollection);