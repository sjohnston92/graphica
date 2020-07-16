import useModal from '../../hooks/useModal';
import Modal from './Modal';
import React, { useState } from 'react'
import ContactTest from './ContactTest'
import { AuthConsumer } from '../../providers/AuthProvider';


const ContactModal = ({ user }) => {
  const { open, toggle } = useModal();

  return (
      <>
        <button onClick={ toggle }>See Contact</button>
        <Modal onClose={toggle} open={open}>
          <ContactTest user={ user } />
        </Modal>
      </>

  )
}

export default ContactModal;

