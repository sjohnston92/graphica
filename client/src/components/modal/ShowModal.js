import React, { useState } from 'react'
import Modal from './Modal'
import NewPicture from '../shared/NewPicture'
import useModal from "../../hooks/useModal";
import styled from 'styled-components';


const ShowModal = () => {
  const { open, toggle } = useModal();

  return (
   <>
    <button onClick={ toggle }>Click to add Pic</button>
    <Modal onClose={toggle} open={open}>
      <HeaderImage>
      <NewPicture />
      </HeaderImage>
    </Modal>
   </>
  )
}

const HeaderImage = styled.div`
  height: "150px",
  width: "150px",
  border: "10px dashed black",
  borderRadius: "25px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  `


export default ShowModal;
