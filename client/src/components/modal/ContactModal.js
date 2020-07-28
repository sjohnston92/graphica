import useModal from '../../hooks/useModal';
import Modal from './Modal';
import React, { useState } from 'react'
import ContactTest from './ContactTest'
import styled from 'styled-components';


const ContactModal = ({ user }) => {
  const { open, toggle } = useModal();

  return (
      <>
        <ContactInfo onClick={ toggle }>See Contact</ContactInfo>
        <Modal onClose={toggle} open={open}>
          <ContactTest user={ user } />
        </Modal>
      </>

  )
}


const ContactInfo = styled.div`
    color: black;
    cursor: pointer;
    display: inline;
    `

export default ContactModal;

