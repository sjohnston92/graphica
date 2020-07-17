import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import useModal from '../../hooks/useModal';
import Modal from '../modal/Modal';
import { ImageConsumer } from '../../providers/ImageProvider'
import PictureShow from '../picture/PictureShow'


const CollectionImage = (props) => {
  const [ picture, setPicture ] = useState()
  const { open, toggle } = useModal();
  const id = props.picId


  useEffect (() => {
    axios.get(`/api/pictures/${props.picId}`)
      .then(res => setPicture(res.data))
      .catch(console.log)
  }, [] )
  
  const handleClick = () => {
    toggle()
  }
  
  return  (
    <>
    {picture && <StyledImage image={picture.url} onClick={toggle}/> } 
    <Modal onClose={toggle} open={open}>     
        <PictureShow 
          id={id}
        />
      </Modal>
    </>
  ) 
}


const StyledImage = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 1rem;
  height: 80px;
  width: 80px;
`


const ConnectedCollectionImage = (props) => (
  <ImageConsumer>
    {(value) => <CollectionImage {...props} {...value} />}
  </ImageConsumer>
);

export default ConnectedCollectionImage;