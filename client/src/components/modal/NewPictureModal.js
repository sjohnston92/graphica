import useModal from '../../hooks/useModal';
import Modal from './Modal';
import React, { useState } from 'react'
import NewPictureTest from './NewPictureTest'

const NewPictureModal = () => {
  const { open, toggle } = useModal();

  return (
   <>
    <button onClick={ toggle }>New Picture</button>
    <Modal onClose={toggle} open={open}>
      <NewPictureTest />
    </Modal>
   </>
  )
}

export default NewPictureModal;