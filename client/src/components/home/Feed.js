import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from './Card'
import List from './List'

const Feed = () => {
  const [pictures, setPictures] = useState([]);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    // axios.get("/api/pictures")
    axios.get("/api/pictures/?limit=9")

      .then( res => {
        setPictures(res.data)
      })
      .catch( err => {
        console.log(err)
      })
  }, [])

  return(
   // these two lines in Feed
// axios.get("/api/pictures/?limit=3&offset=0")
<> <List pictures={pictures} /> </>

    // <ColumnContainer>
    //   {pictures.map((picture, index) => (
    //    <CardGroup>
    //     <Card key={picture.id} {...picture}/>
    //    </CardGroup>
    //   ))}
    // </ColumnContainer>
   
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
