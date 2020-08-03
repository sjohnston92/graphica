import React from 'react';
import Modal from '../modal/Modal';
import useModal from '../../hooks/useModal';
import CollectionForm from './CollectionForm';

const EditCollectionPictures = (props) => {
  const { open, toggle } = useModal();

  return (
    <>
      <button onClick={toggle}>
        Edit Collection Info
      </button>
      <Modal onClose={toggle} open={open}>  
        <CollectionForm handleRes={props.handleRes} collection={props.collection} />
      </Modal>\
    </>
  )
}

export default EditCollectionPictures