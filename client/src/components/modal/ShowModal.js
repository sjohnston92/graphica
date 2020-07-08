import React, { useState } from 'react'
import Modal from './Modal'
import Test from './Test'
import useModal from "../../hooks/useModal";

const ShowModal = () => {
  const { open, toggle } = useModal();

  return (
   <>
    <button onClick={ toggle }>Click to add Pic</button>
    <Modal onClose={toggle} open={open}>
      <Test />
    </Modal>
   </>
  )
}

export default ShowModal;
