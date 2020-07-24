import React, { useState } from "react";
import Modal from "./Modal";
import useModal from "../../hooks/useModal";
import styled from "styled-components";
import Dropzone from "react-dropzone";
import axios from "axios";
import { AuthConsumer, } from "../../providers/AuthProvider";
import PictureForm from '../new/PictureForm';

const NewPictureModal = (props) => {
  const { toggle, open } = props

  return (
    <Modal onClose={toggle} open={open}>
      <PictureForm toggle={toggle}/>
    </Modal>
  )
}

export default NewPictureModal;