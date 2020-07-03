import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PictureConsumer } from '../../providers/PictureProvider';
import axios from 'axios';

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
   <ColumnContainer>
      {pictures.map((picture, index) => (
        <div>
          {users.map((user, index) => {
            if(user.id === picture.user_id) {
              return(
                <>
                <StyledImage src={picture.url} />
                {user.uid}
                </>
              )
            }
          })}
        </div>
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
