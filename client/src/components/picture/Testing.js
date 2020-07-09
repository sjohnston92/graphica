import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from '../home/Card'

const Feed = () => {
  const [picture, setPicture] = useState([]);
  
  useEffect(() => {
    axios.get("/api/pictures/5")
      .then( res => {
        setPicture(res.data)
      })
      .catch(console.log)
  }, [])

  return(
    <ColumnContainer>
        <Card {...picture}/>
    </ColumnContainer>
  )
}

const ColumnContainer = styled.div`
  column-count: 3; 
`
const StyledImage = styled.img`
  width: 100%
`

export default Feed
