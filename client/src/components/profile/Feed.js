import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PictureConsumer } from '../../providers/PictureProvider';
import axios from 'axios';
import Card from './Card';
import { Grid, Image } from 'semantic-ui-react'

const Feed2 = () => {

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
    axios.get("/api/users")
      .then( res => {
        setUsers(res.data)
      })  
      .catch( err => {
        console.log(err)
      })
  }, [])

  

  return(
  //   <Grid columns={3}>
  //   <Grid.Row>

  //     {pictures.map((picture, index) => (
  //     <Grid.Column>

        
  //       <Card key={picture.id} {...picture}/>

  //     </Grid.Column>
  //     ))}

  //   </Grid.Row>
  // </Grid>
    
   <ColumnContainer>
      {pictures.map((picture, index) => (
        <>
        <Card key={picture.id} {...picture}/>
 </>
      ))}
    </ColumnContainer>
  )
}

const ColumnContainer = styled.div`
  column-count: 3; 
`
const StyledImage = styled.img`
  width: 100%
`


export default Feed2