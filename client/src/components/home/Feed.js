import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from './Card'

const Feed = () => {
  const [pictures, setPictures] = useState([]);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get("/api/pictures")
      .then( res => {
        setPictures(res.data)
      })
      .catch( err => {
        console.log(err)
      })
  }, [])

  return(
   
    <ColumnContainer>
      {pictures.map((picture, index) => (
       <CardGroup>
        <Card key={picture.id} {...picture}/>
       </CardGroup>
      ))}
    </ColumnContainer>
   
  )
}


const ColumnContainer = styled.div`
  column-count: 4;
  margin: 30px;
  @media (max-width: 1600px) {column-count: 3};
  @media (max-width: 1100px) {
    column-count: 2;
  }
  @media only screen and (max-width: 800px) {
    column-count: 1;
  }
  `
const CardGroup = styled.div`
  display: inline-block;
`


export default Feed
