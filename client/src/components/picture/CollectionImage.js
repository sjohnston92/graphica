import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { ImageConsumer } from '../../providers/ImageProvider'

const CollectionImage = (props) => {
  const id = props.picId
  const [ picture, setPicture ] = useState()

  useEffect (() => {
    axios.get(`/api/pictures/${props.picId}`)
      .then(res => setPicture(res.data))
      .catch(console.log)
  }, [] )
  
  const updateImageId = () => props.setImageId(id)
  
  return <> {picture && <StyledImage image={picture.url} onClick={updateImageId}/> } </>
  
}

const StyledImage = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 1rem;
  height: 183px;
  width: 213px;
  cursor: zoom-in;
`

const ConnectedCollectionImage = (props) => (
  <ImageConsumer>
    {(value) => <CollectionImage {...props} {...value} />}
  </ImageConsumer>
);

export default ConnectedCollectionImage;