import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Modal from '../modal/Modal';
import useModal from '../../hooks/useModal';
import PictureShow from '../picture/PictureShow'
import { ImageConsumer } from '../../providers/ImageProvider'
import axios from 'axios';
const CollectionCard = (props) => {
  const { open, toggle } = useModal();

  const toggleAndSetId = () => {
    props.setImageId(props.picture.id)
    toggle()
  }
  const toggleAndDelete = (incomingId) => {
    toggle()
    props.updateFeedState(incomingId)
  }

  const addImage = () => {
    props.addPicture(props.picture)
  }

  return (
    <CardBorder>
      <Modal onClose={toggle} open={open}> 
          <PictureShow toggle={toggle} toggleAndDelete={toggleAndDelete}/>   
      </Modal>  
      { props.adding
        ?
          <>
          Click to Add
          <CardDiv onClick={addImage}>
            <StyledImage src={props.picture.url} />
          </CardDiv>
        </>
        :
          <>
            { props.removing 
              ? 
                <>
                  Click to Remove
                  <CardDiv onClick={() => props.removeImage(props.picture.id)}>
                    <StyledImage src={props.picture.url} />
                  </CardDiv>
                </>
              :
                <CardDiv onClick={toggleAndSetId}>
                  <StyledImage src={props.picture.url} />
                </CardDiv>
            }   
          </>  
      }
    </CardBorder>
  )
}

const StyledImage = styled.img`
  width: 100%;
`
const StyledText = styled.div`
  position: absolute;
  z-index: 999;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 1rem; 
  text-align: left;
  width: 90%;
  visibility: hidden;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: white;
`
const CardDiv = styled.div`
  cursor: zoom-in;
  position: relative;
  display: inline-block;
    &:hover ${StyledText} {
        visibility: visible;
  }
`
const CardBorder = styled.div`
  margin-bottom: 20px;
`

const ConnectedCollectionCard = (props) => (
  <ImageConsumer>
    {(value) => <CollectionCard {...props} {...value} />}
  </ImageConsumer>
);

export default ConnectedCollectionCard
