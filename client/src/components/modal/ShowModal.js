import React, { useState } from 'react'
import Modal from './Modal'
import Test from './Test'
import useModal from "../../hooks/useModal";

const ShowModal = ({ isCurrentUser }) => {
  const { open, toggle } = useModal();

  return (
    <div>
      { isCurrentUser &&
        <button onClick={ toggle }>Click to add Pic</button>
      }
      <>
      <Modal onClose={toggle} open={open}>
        <Test />
      </Modal>
      </>
    </div>
  )
}

export default ShowModal;
