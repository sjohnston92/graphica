import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'

const CollectionImage = (props) => {
  const [ picture, setPicture ] = useState()

  useEffect (() => {
    axios.get(`/api/pictures/${props.picId}`)
      .then(res => setPicture(res.data))
      .catch(console.log)
  }, [] )
  
  return <> {picture && <StyledImage image={picture.url} /> } </>
}

export default CollectionImage

const StyledImage = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  height: 40px;
  width: 40px;
`

